# personalShowPages
个人实验展示网页
操作步骤：
	1: 在电脑上安装node.js 以及express-generator和cnpm(百度搜索淘宝npm镜像) 不懂得自行百度
	2: cmd窗口中进入本工程所在的文件夹linjiafa
	3: 执行命令cnpm install 没问题之后，执行命令npm start
	4: 浏览器中输入 localhost:3000/test1  即可访问首页

工程详解：
	1: 需要关心的地方只有三个：public views
	2: public中存放的是你需要的资源，只需要关注images 和media，分别存放图片和音、视频。在代码中已经定义好了public的路径
	   使用的时候，如 src='/media/petersburg.mp3' 即可
	3: views中存放的是你能看到的网页，分别对应路由名，样式和内容地点已经写好注释，请自行修改避免雷同。用的模版是jade，不会的可以先写成html格式，然后 在 http://html2jade.org/ 上可以直接转成jade。

注意：
	请务必自己修改视图，避免被发现重复，否则后果自负。
