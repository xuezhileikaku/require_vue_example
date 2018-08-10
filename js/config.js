/**
 * Created by cyb on 2018/8/9.
 */
require.config({
    baseUrl: 'js/node_modules/',
    paths: {
        'vue': 'vue/dist/vue',
        'header': '../vue_modules/header',
        'footer': '../vue_modules/footer',
        'content': '../vue_modules/content'
    },
    shim: {},

});
requirejs(['vue', 'header', 'content', 'footer'], function (Vue, Head, Con, Foot) {

});
