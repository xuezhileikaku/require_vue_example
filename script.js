/**
 * Created by cyb on 2018/8/9.
 */
require.config({
    baseUrl: 'js/node_modules/',
    paths: {
        'vue': 'vue/dist/vue',
        'header': '../vue-module/tq-header',
        'footer': '../vue-module/tq-footer'
    },
    shim: {
        // 'vue': {
        //     exports: 'Vue'
        // }
    },

});
requirejs(['vue', 'header', 'footer'], function (Vue, Head, Foot) {

});
