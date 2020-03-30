class BaseModel {
    constructor({errorNum, data, message}) {
        this.errorNum = errorNum;
        if(data) {
            this.data = data
        }
        if(message){
            this.message = message
        }
    }
}

class SuccessModel extends BaseModel {
    constructor(data= {}) {
        super({
            error: 0,
            data
        })
    }
}

class ErrorModel extends BaseModel {
    constructor({errorNum, message}) {
        super({
            errorNum,
            message
        })
    }
}


module.exports = {
    SuccessModel,
    ErrorModel
}