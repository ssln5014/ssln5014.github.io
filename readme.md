## 程序下载
```
https://github.com/git-for-windows/git/releases/download/v2.35.1.windows.2/Git-2.35.1.2-64-bit.exe
https://odejs.org/dist/v16.13.2/node-v16.13.2-x64.msi
```
## 生成ssh
```
git config --global user.name "ssln5014" && git config --global user.email "228540204@qq.com" && ssh-keygen -t rsa -C "2285740204@qq.com"
```
## 认证
```
ssh -T git@github.com
```
## 克隆文件
```
git clone git@github.com:ssln5014/ssln5014.github.io.git
```
## 配置环境
```
npm install hexo-cli -g && npm install hexo && npm install && npm install hexo-deplyer-git
```
## 关联分支
```
git remote add origin git@github.com:ssln5014/ssln5014.github.io.git
```
## 强制覆盖本地文件
```
git fetch --all && git reset --hard origin/hexo && git pull
```
## 上传
```
git add . && git commit -m "..." && git push -u origin hexo
```
## 强制上传
```
git push -u origin master -f
```
## 切换分支
```
git ceckout -b hexo
```
## 编译
```
hexo clean && hexo g && hexo s
```
## 端口
```
http://localhost:4000
```
## 出错：删除git提交内容文件夹
```
.deply_git/
```
## 执行
```
git config --global core.autocrlf false
```
## 最后
```
hexo clean &&hexo g && hexo d
```

命令|描述
:-:|:-:
A , B|执行A后不论A的返回结果接着执行B
A && B|执行A后，仅在A成功运行后执行B
A \|\| B|执行A后仅在A失败后执行A