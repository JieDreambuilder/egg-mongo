/**
 * middleware：增加一个或多个中间件，提供请求的前置、后置处理逻辑。
 * 
 * 在 Middleware 中获取 Context 实例则和 Koa 框架在中间件中获取 Context 对象的方式一致 (ctx,next)
 * 
 * 中间件的配置:
 *     约定一个中间件是一个放置在app/middleware目录下的单独文件，需要exports一个普通的function,接受两个参数:
 *     1.options:中间件的配置项，框架会将app.config[${middlewareName}]传递进来
 *     2.app:当前应用Application的实例
 */

module.exports = (options,app) => {
    //设置跨域白名单，只允许白名单内的网址请求跨域
    const { whiteList } = options;
    console.log('whiteList', whiteList)
    return async function decideRequest(ctx, next) {
        if(ctx.request.header.referer){ 
            // console.log(whiteList.includes(ctx.request.header.referer)) //boolean
            if(whiteList.includes(ctx.request.header.referer)){
                await next();
            }else{
                ctx.status = 401;
                ctx.body = {
                    code: -1,
                    message: '访问不在允许域名名单中！'
                }
            }
        }
    }
}