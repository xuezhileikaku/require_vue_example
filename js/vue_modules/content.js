/**
 * Created by cyb on 2018/8/9.
 */


// require.js define() 函数包裹
define(['vue'], function (Vue) {

// 定义组件内容，数据，方法
    var con = Vue.extend({
        template: '<div class="gmat-wrapper">\
        <div class="top-nav">\
        <ul class="nav navbar-nav navbar-left">\
        <li class="active"><a href="/index.php/site/index">首页</a></li>\
            <li><a href="/index.php/paper/view?type=0">模考套题</a></li>\
            <li><a href="/index.php/paper/view?type=1">分项练习</a></li>\
            <li><a id="myrecords" href="/index.php/paper/myrecords">我的记录</a></li>\
        </ul>\
        </div>\
    </div>',
        data: function () {
            return {
                name: 'function'
            }
        },
        methods: {
            show: function () {
                alert(this.name);
            }
        }
    });
// 注册组件的标签 <tq-footer> 绑定组件
    Vue.component('gcontent', con);
//实例化
    new Vue({
        el: '#main',
    });
//vue组件结束
});
//define end