---
title: hello
date: 2022-01-28 12:56:04
tags: 日常
top_img:
categories: 日常
cover: https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.yanlutong.com%2Fuploadimg%2Fimage%2F20201125%2F20201125165827_39707.jpg&refer=http%3A%2F%2Fimg.yanlutong.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1646141278&t=5051846a000d3004e09504302b0c5ac0
---
{% p center logo large, 这很核里 %}
>这是一个教程贴
>今天是2022年1月28号，有点小雪。

### 早上睡不醒啊，起床真是一种煎熬ヽ༼⁰o⁰；༽ノ

### 前几天发现了一首很好听的歌，晚些研究一下怎么放到网页上

{% p red, 这个博客就用来写日志一类的吧。。。 %}

<!-- 图片 -->
![放个图图](https://raw.githubusercontent.com/ssln5014/pic-bed/main/%E6%94%BE%E4%B8%AA%E5%9B%BE%E5%9B%BE.jpg)

<!-- 固定图片 -->
{% image https://cdn.jsdelivr.net/gh/volantis-x/cdn-wallpaper-minimalist/2020/025.jpg, width=400px%}

这是 {% inlineimage https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/0000.gif %} 一段话。

这又是 {% inlineimage https://cdn.jsdelivr.net/gh/volantis-x/cdn-emoji/aru-l/5150.gif, height=40px %} 一段话。

```
  代码块
  ```

<!-- 在线音乐 -->
{% meting "7982259537" "tencent" "playlist" %}

<!-- 链接卡片 -->
{% link 糖果屋教程贴, https://akilar.top/posts/615e2dec/, https://npm.elemecdn.com/akilar-candyassets/image/siteicon/favicon.ico %}

<!-- 诗词 -->
{% poem 水调歌头,苏轼 %}
丙辰中秋，欢饮达旦，大醉，作此篇，兼怀子由。
明月几时有？把酒问青天。
不知天上宫阙，今夕是何年？
我欲乘风归去，又恐琼楼玉宇，高处不胜寒。
起舞弄清影，何似在人间？

转朱阁，低绮户，照无眠。
不应有恨，何事长向别时圆？
人有悲欢离合，月有阴晴圆缺，此事古难全。
但愿人长久，千里共婵娟。
{% endpoem %}

<!-- 音频 -->

<center>{% audio https://onedrive-vercel-index-eta-ten.vercel.app/api?path=/%E9%9F%B3%E4%B9%90/%E4%B8%8B%E8%BD%BD/ENEMY%20(%E5%AE%BF%E6%95%8C).mp3&raw=true %}</center>
<center>👆终于学会音频怎么搞了hhh👆</center>
<!-- 视频 -->
{% video https://onedrive-vercel-index-eta-ten.vercel.app/api?path=/%E8%A7%86%E9%A2%91/Captures/%E5%8E%9F%E7%A5%9E%202021-10-17%2014-58-01.mp4&raw=true %}
<center>👆这是视频👆</center>

<br>
<!-- 网站卡片 -->
{% sitegroup %}
{% site Salen的箱子, url=https://salen.ml, screenshot=https://www.salen.cf/api?path=/%E5%9B%BE%E7%89%87/Saved%20Pictures/20220129173139534.png&raw=true, avatar=https://chirmyram.coding.net/p/ChirmyRam/d/blogpic/git/raw/master/index/nav/logo.png, description=我的箱子(*^_^*) %}
{% endsitegroup %}

<!-- 如果需要显示类似「团队成员」之类的一组含有头像的链接： -->
{% btns circle grid5 %}
{% cell xaoxuu, https://xaoxuu.com, https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/avatar/avatar.png %}

{% endbtns %}
<!-- 或者含有图标的按钮： -->
{% btns rounded grid5 %}
{% cell 下载源码, /, fas fa-download %}
{% cell 查看文档, /, fas fa-book-open %}
{% endbtns %}
<!-- 圆形图标 + 标题 + 描述 + 图片 + 网格 5 列 + 居中 -->
{% btns circle center grid5 %}
<a href='https://apps.apple.com/cn/app/heart-mate-pro-hrm-utility/id1463348922?ls=1'>
  <i class='fab fa-apple'></i>
  <b>心率管家</b>
  {% p red, 专业版 %}
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_pro.png'>
</a>
<a href='https://apps.apple.com/cn/app/heart-mate-lite-hrm-utility/id1475747930?ls=1'>
  <i class='fab fa-apple'></i>
  <b>心率管家</b>
  {% p green, 免费版 %}
  <img src='https://cdn.jsdelivr.net/gh/xaoxuu/cdn-assets/qrcode/heartmate_lite.png'>
</a>
{% endbtns %}

<!-- 段落颜色 -->
- 彩色文字
在一段话中方便插入各种颜色的标签，包括：{% p red, 红色 %}、{% p yellow, 黄色 %}、{% p green, 绿色 %}、{% p cyan, 青色 %}、{% p blue, 蓝色 %}、{% p gray, 灰色 %}。
- 超大号文字
文档「开始」页面中的标题部分就是超大号文字。
{% p center logo large, Volantis %}
{% p center small, A Wonderful Theme for Hexo %}

<!-- 行内文本 -->
- 彩色文字
在一段话中方便插入各种颜色的标签，包括：{% span red, 红色 %}、{% span yellow, 黄色 %}、{% span green, 绿色 %}、{% span cyan, 青色 %}、{% span blue, 蓝色 %}、{% span gray, 灰色 %}。
- 超大号文字
文档「开始」页面中的标题部分就是超大号文字。
{% span center logo large, Volantis %}
{% span center small, A Wonderful Theme for Hexo %}

<!-- 行内文本样式 text -->
1. 带 {% u 下划线 %} 的文本
2. 带 {% emp 着重号 %} 的文本
3. 带 {% wavy 波浪线 %} 的文本
4. 带 {% del 删除线 %} 的文本
5. 键盘样式的文本 {% kbd command %} + {% kbd D %}
6. 密码样式的文本：{% psw 这里没有验证码 %}

简单的 [markdown](https://guides.github.com/features/mastering-markdown/) 语法
