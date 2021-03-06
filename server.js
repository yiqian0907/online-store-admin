const jsonServer = require('json-server');
const server = jsonServer.create();
const captcha = require('svg-captcha');
const userArr = require('./user');
const routerUser = jsonServer.router({user:userArr});
const productJson = require('./src/static/proList.json');
const routerProducts = jsonServer.router(productJson);
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const middlewares = jsonServer.defaults();

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, path.join(__dirname, 'public/server/upload')); // 文件存储的路径
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '_' + file.originalname); // 调整文件的保存地址
  }
});
const upload = multer({ storage: storage });
server.use(middlewares);
server.use(jsonServer.bodyParser);
// 所有的api的请求都要求登陆后才能获取到对应的数据
server.use('/api/product', (req, res, next) => {
  if (req.get('Authorization')) {
    next();
  } else {
    res.status(401).jsonp({
      code: 8,
      msg: '用户没有登录，不能访问'
    });
  }
});

server.get('/api/product', (req, res) => {
  res.jsonp({
    product: productJson.products,
    code: 1,
    msg: '请求成功'
  })
})

server.post('/api/product', (req, res) => {
  // console.log(req.body);
  fs.readFile(path.join(__dirname, '/src/static/proList.json'), function(err, data){
    if(err){
      console.log(err);
    }
    let productJSON = JSON.parse(data.toString());
    productJSON.products.push(req.body);
    console.log(productJSON.products);
    let productStr = JSON.stringify(productJSON);
    fs.writeFile(path.join(__dirname, '/src/static/proList.json'), productStr, function(error){
      if(error){
        console.log(error);
      }
    })
  })
  res.jsonp({
    product: productJson.products,
    code: 1,
    msg: '请求成功'
  })
})

// 用户登录成功
server.post('/api/userlogin', (req, res) => {
  console.log(1); 
  let userName = req.body.username;
  let password = req.body.password;
  let loginUser = userArr.find((item) => item.username === userName && item.password === password);
  if(loginUser) {
    res.jsonp({
      user: loginUser,
      code: 1,
      msg: '授权成功',
      token: 'jfksdjfldsjflk===>aicoder.com'
    });
  } 
  else {
    res.jsonp({
      code: 0,
      msg: '用户名或者密码错误'
    });
  }
});
server.use('/api/product', routerProducts);
server.get('/api/code', (req,res)=>{
  const cap = captcha.create();
  // req.session.captcha = cap.text; // session 存储
  res.type('svg'); // 响应的类型
  res.send(cap.data);
});
// 文件上传
server.all('/api/upload', upload.single('imgFile'), function(req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any
  var file = req.file;
  console.log(file);

  console.log('文件类型：%s', file.mimetype);
  console.log('原始文件名：%s', file.originalname);
  console.log('文件大小：%s', file.size);
  console.log('文件保存路径：%s', file.path);
  res.json({ img: `/server/upload/${file.filename}` });
});

server.use('/api/', routerUser);


server.listen(45550, () => {
  console.log('JSON Server is running');
});