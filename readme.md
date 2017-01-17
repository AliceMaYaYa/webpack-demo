搭建最简单的一个基于wepack+sass的网页WebApp：
<<<<<<< HEAD

1、首先需要设置 viewport

<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>

2、rem的转换，现在有个比较普遍写法是在html中插入：

<script type='text/javascript'> document.documentElement.style.fontSize = document.documentElement.clientWidth /3.75 + 'px'; </script>

然后在sublime中安装插件，就可以直接实现px to rem的转换

容易遇到的坑点：参考资料http://www.cnblogs.com/olivianate/p/5328716.html

3、编写代码，自己要实现的功能

4、使用sass，最后需要转化为css

主要是全局安装npm install node-sass，然后在package.json中script添加，

"css": "node-sass --output-style compressed --output src src"

编译sass的时候直接使用npm run css就可以把需要转换的sass文件转成css文件

5、启动本地服务器

使用http-server 首先安装npm install http-server -g，可以在自己文件夹安装npm install http-server --save-dev
接着在package.json中的script添加 "start": "http-server -a 172.16.22.197 -p 80"

6、用浏览器输入本地IP地址，打开自己做的网页http://172.16.22.197:80

7、打包工具

使用webpack 主要先安装npm install webpack -g，安装一些loader，然后再进行打包。

webpack --display-error-detail --progress --colors --watch

--display-error-detail 可以显示 webpack 出现错误的中间过程，方便在出错时进行查看。

--progress --colors 可以显示进度

--watch 可以监视文件的变化并在变化后重新加载

8、各种兼容性处理：

<meta name="apple-mobile-web-app-capable" content="yes">

<meta name="apple-mobile-web-app-status-bar-style" content="black">

<meta name="format-detection" content="telephone=no,email=no"/>

<meta name="renderer" content="webkit" /> //360兼容性处理

一眼望去，大部分是配置环境，其实这仅仅是入门，前端的工具太多，自己琢磨了一些，在这上面花费很长时间，希望熟能生巧吧，还需要勤加练习。
=======
1、首先需要设置 viewport
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum->scale=1.0, maximum-scale=1.0, user-scalable=no"/> 
2、rem的转换，现在有个比较普遍写法是在html中插入：
<script type='text/javascript'>
document.documentElement.style.fontSize = >document.documentElement.clientWidth /3.75 + 'px';
</script>
然后在sublime中安装插件，就可以直接实现px to rem的转换
容易遇到的坑点：参考资料http://www.cnblogs.com/olivianate/p/5328716.html
3、编写代码，自己要实现的功能
4、使用sass，最后需要转化为css
   主要是全局安装npm install node-sass，然后在package.json中script添加，
"css": "node-sass --output-style compressed --output src src"
编译sass的时候直接使用npm run css就可以把需要转换的sass文件转成css文件
5、启动本地服务器
使用http-server 首先安装npm install http-server -g，可以在自己文件夹安装npm install >http-server --save-dev  接着在package.json中的script添加
"start": "http-server -a 172.16.22.197 -p 80"
6、用浏览器输入本地IP地址，打开自己做的网页http://172.16.22.197:80
7、打包工具
使用webpack 主要先安装npm install  webpack -g，安装一些loader，然后再进行打包。
webpack --display-error-detail --progress --colors --watch
--display-error-detail 可以显示 webpack 出现错误的中间过程，方便在出错时进行查看。
--progress --colors 可以显示进度
--watch 可以监视文件的变化并在变化后重新加载
8、各种兼容性处理：
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black">
<meta name="format-detection" content="telephone=no,email=no"/>
<meta name="renderer" content="webkit" />     //360兼容性处理

一眼望去，大部分是配置环境，其实这仅仅是入门，前端的工具太多，自己琢磨了一些，在这上面花费很长时间，希望熟能生巧吧，还需要勤加练习。
>>>>>>> 937f63679a138e6cb962619b8149f919d115353e
