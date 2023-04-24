const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const koaCors = require('koa2-cors')
const userRouter = require('./router/user')
const studentsRouter = require('./router/students')
const app = new Koa()
const port = 3000

app.use(bodyParser())
app.use(koaCors())
// app.use(async (ctx)=>{
//     ctx.body = 'hello world'

// })


app.use(userRouter.routes(), userRouter.allowedMethods())
app.use(studentsRouter.routes(), studentsRouter.allowedMethods())



// const config = require('./mysql/config.js')
// // 1. 加载msyql
// var mysql = require('mysql');
// // 2. 创建连接
// var connection = mysql.createConnection(config);
// // 3. 连接数据库
// connection.connect((err) => {
//   // 如果有错误对象，表示连接失败
//   if (err) return console.log('数据库连接失败')
//   // 没有错误对象提示连接成功
//   console.log('mysql数据库连接成功')
// })








app.listen(3000)