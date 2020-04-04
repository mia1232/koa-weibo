const router = require('koa-router')()


router.prefix('/');

router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!',
    isMe: true,
    blogList: [{
      id:1,
      title: "blog"
    }, {
      id:2,
      title: "blog2"
    },{
      id:3,
      title: "blog3"
    }]
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  const session = ctx.session
  if (session.viewNum == null) {
    session.viewNum = 0
  }
  session.viewNum++
  ctx.body = {
    title: 'koa2 json',
    viewNum: session.viewNum
  }
})


router.get('/profile/:userName', async (ctx, next) => {
  const { userName } = ctx.params;
  ctx.body = {
    title: 'this is profile page',
    userName
  }
})

router.get('/loadMore/:userName/:pageIndex', async (ctx, next) => {
  const { pageIndex, userName } = ctx.params;
  ctx.body = {
    title: 'this is profile page',
    userName,
    pageIndex
  }
})

// router.post('/login', async (ctx, next) => {
//   const { userName, password } = ctx.request.body;
//   ctx.body = {
//     tag: 101,
//     userName,
//     password
//   }
// })

module.exports = router
