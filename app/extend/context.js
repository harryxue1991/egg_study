module.exports = {
    getApi() {
        // this就是ctx对象
        // console.log(this)

        return this.request.header.host;
    }
}