/**
 * Created by cyb on 2018/8/9.
 */

// require.js define() 函数包裹
define(['vue'], function (Vue) {

// 定义组件内容，数据，方法
    var footer = Vue.extend({
        template: '<footer class="footer">\
        <div class="container">\
        <p class="pull-left">© yiiframework 2018</p>\
    <p class="pull-right">Powered by <a href="http://www.yiiframework.com/" rel="external">Yii Framework</a></p>\
    </div>\
    </footer>',
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
    Vue.component('gfoot', footer);
//实例化
    new Vue({
        el: '#footer',
    });
//vue组件结束
});
//define end