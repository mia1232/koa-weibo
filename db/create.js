const { Blog, User } = require('./model');
!(async function() {
    const zhangsan = await User.create({
        userName:'zhangsan',
        password: '123',
        nickName: '张三',
        gender:1
    })
    console.log('zhangsan ', zhangsan.dataValues)
    const zhangsanId = zhangsan.dataValues.id;
    const lisi = await User.create({
        userName:'lisi',
        password: '123',
        nickName: '李四',
        gender: 1
    })
    console.log('lisi ', zhangsan.dataValues)
    const lisiId = lisi.dataValues.id;
})()