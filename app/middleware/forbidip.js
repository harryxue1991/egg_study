module.exports = (options, app) => {
    return async function forbidipMiddleware(ctx, next) {
        // console.log(options);
        // console.log(ctx.request.ip);
        var sourceIp=ctx.request.ip;
        const match = options.ip.some(val =>{
            if(val==sourceIp){
                return true;
            }
        });

        if (match) {
            ctx.status = 403;
            ctx.body = 'ip被屏蔽';
        } else {
            await next();
        }

    }
};
