const { ErrorModel } = require('../model/ResModel');

function genValidator(validator) {
    async function validator(ctx, next) {
        const data = ctx.request.body;
        const error = validator(data);
        if(error) {
            ctx.body = new ErrorModel({
                errorNum: 10009,
                message:'数据格式错误'
            })
            return;
        }
        await next();
    }
    return validator;
}

module.exports = {
    genValidator
}