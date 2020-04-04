const { getUserInfo, createUser } = require('../services/user');
const { SuccessModel, ErrorModel } = require('../model/ResModel')
const { registerUserNameExistInfo, registerFailInfo } = require('../model/ErrorInfo');
const { doCrypto } = require('../utils/cryp');
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

async function register({userName, password, gender}) {
    const userInfo = await getUserInfo(userName);

    if(userInfo) {
        return ErrorModel(registerUserNameExistInfo);
    }

    await createUser({userName, password:doCrypto(password), gender});
    return new SuccessModel();
}


module.exports = {
    isExist,
    register
}