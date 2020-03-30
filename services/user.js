const { User } = require('../db/model/index');
const { formatUser } = require('./_format');
async function getUserInfo(userName, password) {

    const whereOpt = {
        userName
    }
    if(password) {
        Object.assign(whereOpt, { password })
    }

    const result = await User.findOne({
        attributes: ['id', 'userName', 'nickName'],
        where: whereOpt
    })

    console.log(JSON.stringify(result));

    if(result === null) {
        // not found
        return result
    }

    return formatUser(result.dataValues);
}
module.exports = {
    getUserInfo
}