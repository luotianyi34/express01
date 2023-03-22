var express = require('express');
var router = express.Router();
const conn = require("../util/db")

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{baseUrl:"http://localhost:3000/"});
});
/*
* post和delete请求的参数封装在req.body中
* get请求的参数封装在req.query中
*
* */
router.post("/login",function (req, res) {
  const {body} = req;
  let sql = "select * from userinfo where username = ? and password = ?";
  conn.query(sql,[body.username,body.password],function (e,r) {
    if(e) throw e;
    if(r.length === 1){
      const user = r[0];
      if(user.status === 1){
        res.send({code:200,msg:"success"});
      }else{
        res.send({code:500,msg:"封禁用户"});
      }
    }else{
      res.send({code:500,msg:"用户名或密码不正确"});
    }
  })
})

module.exports = router;
