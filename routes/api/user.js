const router = require('koa-router')();
const  { isExist, register } = require('../../controller/user');
const userValidate = require('../../validator/user');
const { genValidator } = require('../../middlewares/validator');
router.prefix('/api/user')
router.post('/register', genValidator(userValidate), async (ctx, next) => {
    const { userName, password, gender} = ctx.request.body;
    ctx.body = await register({ userName, password, gender});
})


router.post('/isExist', async (ctx, next) => {
    const { userName } = ctx.request.body;
    ctx.body = await isExist(userName);
})

module.exports = router;
