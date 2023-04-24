// model/userModel.js
const query = require('../mysql/query')
class UserModel {
    //获取用户
    async getUser(username) {
        return await query(`SELECT * FROM users WHERE username = '${username}'`)
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
module.exports = new UserModel()