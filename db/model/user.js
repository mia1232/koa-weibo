const seq = require('../seq');
const { STRING, DECIMAL } = require('../types')

const User = seq.define('user', {
    userName: {
        type: STRING,
        allowNull: false,
        unique: true,
        //用户名必须唯一

    },
    userName: {
        type: STRING,
        allowNull: false
    },
    nickName: {
        type: STRING,
        allowNull: false
    },
    gender: {
        type: DECIMAL,
        allowNull: false,
        //一男 二女 三 保密 
    },
    picture: {
        type: STRING,
    },
    city: {
        type: STRING
    }
})

module.exports = User