/**
 * Created by cyb on 2018/8/9.
 *  header
 */

//require define 函数 start
define(['vue'], function (Vue) {
//数据
    var data = {
        list: [{
            name: "首页",
            url: "./index.html",
        }, {
            name: "博客",
            url: "http://taoquns.com"
        }, {
            name: "微博",
            url: "http://weibo.com/1654438844/profile?topnav=1&wvr=6"
        }, {
            name: "简书",
            url: "http://www.jianshu.com/users/633b8f612f8e/latest_articles"
        }, {
            name: "作品展示",
            url: "http://taoquns.com/mypage"
        }],
    };
//定义组件 模板 数据 方法
    var header = Vue.extend({
        template: '<nav id="w0" class="navbar-inverse navbar-fixed-top navbar">\
        <div class="container">\
        <div class="navbar-header">\
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#w0-collapse"><span class="sr-only">Toggle navigation</span>\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span>\
        <span class="icon-bar"></span></button>\
        <a class="navbar-brand" href="/index.php"><img class="header-logo" src="../../imgs/gwd.png" width="60" height="30"></a></div>\
        <div id="w0-collapse" class="collapse navbar-collapse">\
        <ul id="w1" class="navbar-nav navbar-right nav">\
        <li><a href="/index.php">首页</a></li>\
        <li><a href="/index.php/paper/view?type=0">GRE模考</a></li>\
        <li><a href="https://boxiaozhi.com/">出国考试答疑器</a></li>\
        <li><a href="https://static.meiqia.com/dist/standalone.html?_=t&amp;eid=99242" target="_blank">联系客服</a>\
        </li>\
        <li class="dropdown"><a class="dropdown-toggle" href="#" data-toggle="dropdown">程盈博 <span class="caret"></span></a>\
        <ul id="w2" class="dropdown-menu">\
        <li><a href="/index.php/paper/myrecords" tabindex="-1">我的记录</a></li>\
        <li><a href="/index.php/site/logout" data-method="post" tabindex="-1">退出</a></li>\
        </ul>\
        </li>\
        </ul>\
        </div>\
        </div>\
        </nav>',
        data: function () {
            return data;
        },
        methods: {
            show: function () {
            }
        },
    });
// 注册组件标签 <tq-header> 绑定组件
    Vue.component('ghead', header);
//实例化
    new Vue({
        el: '#header'
    });
});
//require define 函数 end