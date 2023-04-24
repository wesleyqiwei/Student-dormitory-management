const Router = require('koa-router')
const router = new Router()
const Students = require('../model/students.js')

router.post('/students/list', async (ctx, next) => {
    let {pageNum,pageSize,gender,name,phone_number} = ctx.request.body

    console.log('pageNum,pageSize,gender,name,phone_number',pageNum,pageSize,gender,name,phone_number)
    let total = (await Students.getAllUserListTotal())[0].recordCounts
    let res = []
    if(!gender&&!name&&!phone_number){
         res = (await Students.getAllUserListNotCond(pageNum-1,pageSize))

    }else{
        gender = gender||''
        name = name||''
        phone_number = phone_number||''
        // res = (await User.getAllUserList(gender,title,phone_number, pageSize, pageNum1))
         res = (await Students.getAllUserListFind(gender,name,phone_number,pageNum-1,pageSize))

    }
    ctx.body = {
        code:2000,
        message:'success',
        total:total,
        data:res
    }

})


module.exports = router