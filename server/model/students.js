// model/userModel.js
const query = require('../mysql/query')
class students {
    //获取用户
    //根据分页查询用户列表
    async getAllUserListNotCond(pageNum,pageSize) {
        return await query(`SELECT * FROM students LIMIT ${pageNum},${pageSize}`)
    }
    //获取用户信息列表的总条数
    async getAllUserListTotal() {
        return await query(`SELECT COUNT(*) as recordCounts FROM students`)
    }
    //条件获取用户信息
    async getAllUserListFind(gender,name,phone_number,pageNum,pageSize) {
        return await query(`SELECT * FROM students WHERE 1=1 
        and if('${gender}' is null or '${gender}' ='',  1=1, gender='${gender}')
        
        and if('${name}' is null or '${name}' ='',  1=1,  name='${name}') 
        
        and if('${phone_number}' is null or '${phone_number}' ='',  1=1, phone_number='${phone_number}') LIMIT ${pageNum},${pageSize}`)
    }
    // //获取用户手机号
    // async getTel(tel) {
    //     return await query(`SELECT * FROM user WHERE tel = '${tel}'`)
    // }
    // //用户注册
    // async insert(name, tel, password) {
    //     return await query(`INSERT INTO user(name, tel, password) VALUES('${name}', '${tel}', '${password}')`)
    // }
}


module.exports = new students()