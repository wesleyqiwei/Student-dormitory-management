const Router = require('koa-router')
const router = new Router()
const User = require('../model/user')

router.post('/user/login', async (ctx, next) => {
    let { username, password } = ctx.request.body
    const res = (await User.getUser(username))[0]
    // res.token = 'akluhyffshafuhw42325'
    if(res){
        ctx.body = {
            code:2000,
            message:'success',
            data:res
        }
    }else{
        ctx.body = {
            code:1000,
            message:'用户名不存在！',
            data:res
        }
    }

})
router.get('/user/info', async (ctx, next) => {
    // console.log()
    const res = (await User.getUser(ctx.query.token))[0]
    // res.token = 'akluhyffshafuhw42325'
    if(res){
        ctx.body = {
            code:2000,
            message:'success',
            data:res
        }
    }else{
        ctx.body = {
            code:1000,
            message:'error',
            data:res
        }
    }

})
router.post('/user/logout', async (ctx, next) => {
    // console.log()

        ctx.body = {
            code:2000,
            message:'success'
        
        }
    

})

module.exports = router