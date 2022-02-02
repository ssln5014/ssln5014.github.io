const fs = require('hexo-fs');
var filter = require('./lib/filter');
const old = fs.writeFile;
var assign = require('object-assign');
const path = require('path');
hexo.config.cute = hexo.config.cute || {
    enable: true,
    html: {},
    css: {},
    js: {},
};

if (true === hexo.config.cute.enable) {
    // HTML minifier
    hexo.config.cute.html = assign(
        {
            enable: true,
            logger: true,
            exclude: [],
            ignoreCustomComments: [/^\s*more/],
            removeComments: true,
            removeCommentsFromCDATA: true,
            collapseWhitespace: true,
            collapseBooleanAttributes: true,
            removeEmptyAttributes: true,
            minifyJS: true,
            minifyCSS: true,
        },
        hexo.config.cute.html
    );

    // Css minifier
    hexo.config.cute.css = assign(
        {
            enable: true,
            logger: true,
            exclude: ['*.min.css'],
        },
        hexo.config.cute.css
    );

    // Js minifier
    hexo.config.cute.js = assign(
        {
            enable: true,
            mangle: true,
            logger: true,
            output: {},
            compress: {},
            exclude: ['*.min.js'],
        },
        hexo.config.cute.js,
        {
            fromString: true,
        }
    );
}
function before_generate(ctx, args) {
    const logger = ctx.log || console;
    logger.info('now we try to listen hexo write files');
    fs.writeFile = (dest, str) => {
        // ok , now we try to deal it by change str!
        const ext = path.extname(dest);
        const option = {
            path: dest,
        };
        str = str.toString();
        if (ext === '.html') {
            str = filter.logic_html.call(ctx, str, option);
        } else if (ext === '.js') {
            str = filter.logic_js.call(ctx, str, option);
        } else if (ext === '.css') {
            str = filter.logic_css.call(ctx, str, option);
        } else {
            // ignore
            logger.info('no cute handler found with ext:' + ext);
        }
        return old(dest, str);
    };
}
function after_generate(ctx, args) {
    const logger = ctx.log || console;
    logger.info('bye from hexo-cute');
}

hexo.extend.filter.register('after_init', function () {
    const logger = this.log || console;
    before_generate_time = Date.now();
    console.log(before_generate_time);
    logger.log('now we install the diy hooks before_generate and after_generate');
    const generateConsole = this.extend.console.store['generate'];
    const newGenerateConsole = (args) => {
        // watch = args.w || args.watch;
        // if (watch) {
        //     logger.warn('hexo-cute is disabled in watch mode');
        //     return generateConsole.call(this, args);
        // }
        before_generate(this, args);
        const ret = generateConsole.call(this, args).then(() => {
            after_generate(this, args);
        });
        return ret;
    };
    newGenerateConsole.options = generateConsole.options;
    newGenerateConsole.desc = generateConsole.desc;

    this.extend.console.store['generate'] = newGenerateConsole;
});
// hexo.extend.filter.register('before_generate', function () {
//     before_generate = Date.now();
//     before_generate = Date.now();
//     logger.log('now we start after_init:', before_generate);
//     const classGenerate = this.extend.console.store['generate'];
//     console.log(classGenerate.prototype);
//     logger.log('now we start generate:', before_generate);
// });
// hexo.extend.filter.register('after_generate', function () {
//     const logger = this.log || console;
//     const after_generate = Date.now();
//     before_generate = Date.now();
//     logger.log('now we start after_init:', before_generate);
//     const classGenerate = this.extend.console.store['generate'];
//     console.log(classGenerate.prototype);
//     logger.log('now we finish generate in %d ms', after_generate - before_generate);
// });
