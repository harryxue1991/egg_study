/**
 * 外部可以通过this.app.foo方法
 */

module.exports = {
    foo(params) {
        // this就是app对象
        
        // console.log(this.config.keys);
        return this.config.keys;
    }
}