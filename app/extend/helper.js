// 扩展里面引用第三方模块

var sd = require('silly-datetime');

module.exports = {

    formatTime(params) {
        return sd.format(new Date(params), 'YYYY-MM-DD HH:mm:ss')
    },
    // this 是 helper对象，在其中可以调用其他helper方法

    // this.ctx => context 对象
    // this.app => application 对象
    helperMsg() {
        return '为何如此之难，请告诉我？我擦'
    }
}