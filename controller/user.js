const { getUserInfo } = require('../services/user');
const { SuccessModel, ErrorModel } = require('../model/ResModel')
async function isExist(userName) {
    const userInfo = await getUserInfo(userName);
    console.log(JSON.stringify(userInfo));
    if(userInfo) {
        //User already exist
        return new SuccessModel(userInfo);
    }  else {
        return new ErrorModel({
            errorNum: 100003,
            message: '用户名不存在'
        })
    }  

}


module.exports = {
    isExist
}