var express = require('express');
var app = express();
var mysql = require('mysql');
app.use(express.static(__dirname));
var connection = mysql.createConnection({
    user:'root',
    password:'123456',
    database:'xiangmu'
});
connection.connect(function () {
    console.log('数据库链接成功！');
});

//修改获取当前id
var id = '',sou_llb='';
app.get('/zxd',function(req,res){
    id = req.query.name;
    sou_llb = req.query.sou_ll;
});
//***************** 管理员页面*************查找所有MySQL里面的数据*********
app.get('/Administrator_select',function (req,res) {
    connection.query('select * from xiang_group',function (err,data) {
        if (err) throw err;
        res.jsonp(data);
        // console.log(data);//打印mysql里的值
    });
});
//***************员工信息页面**************************
app.get('/Employee_select',function (req,res) {
    var idcar = req.query.idcar;
    // console.log(idcar);
    var str = 'SELECT * FROM daka_time WHERE idcar LIKE "'+idcar+'" LIMIT 1';
    connection.query(str,function (err,data) {
        if (err) throw err;
        res.jsonp(data);
        // console.log(data);
    });
});
//***********************打卡储存==上班******************************
app.get('/updata_daka',function (req,res) {
    var day = (new Date()).getDay();
    var s_time = req.query.s_daka_1;
    console.log(s_time);
    var number = req.query.number;
    var str = 'UPDATE daka_time SET s_daka_'+day+'="'+s_time+'" WHERE number='+number+'';
    connection.query(str,function (err,data) {
        if (err) throw err;
        res.jsonp(data);
        // console.log(data);
    });
});
//***********************打卡储存==下班**********************
app.get('/updata_dakaxiab',function (req,res) {
    var x_time = req.query.x_daka_1;
    var number = req.query.number;
    var day = (new Date()).getDay();
    var  str = 'UPDATE daka_time SET x_daka_'+day+'="'+x_time+'" WHERE number='+number+'';
    connection.query(str,function (err,data) {
        if (err) throw err;
        res.jsonp(data);
        // console.log(data);
    });
});
//********************修改页面***************************
app.get('/xiugai',function(req,res) {
    var classs = req.query.data;
    //console.log(classs)
    var strr1 = classs.number,                  //编号
        strr2 = classs.name,                     //姓名
        strr3 = classs.age,                     //年龄
        strr4 = classs.sex,                     //性别
        strr5 = classs.idcar,                   //身份证号
        strr6 = classs.phonum,                  //电话号码
        strr7 = classs.qqnum,                   //QQ号码
        strr8 = classs.Occupation,             //职业
        strr9 = classs.Ict_time,               //时间
        strr10 = classs.education;              //学历
    var str = ' UPDATE xiang_group SET `name`="' + strr2 + '",age=' + strr3 + ',sex="' + strr4 + '",idcar="' + strr5 + '",phonum=' + strr6 + ',qqnum=' + strr7 + ',Occupation="' + strr8 + '",Ict_time="' + strr9 + '",education="' + strr10 + '" WHERE number=' + strr1 + ' ';
    var str1 = ' UPDATE daka_time SET `name`="' + strr2 + '" WHERE number=' + strr1 + ' ';
    connection.query(str, function (err,data) {
        connection.query(str1, function (err,data) {
            if (err)console.log(err);
        })
        // if (err)console.log(err);
    })

});
app.get('/xiugai2',function(req,res){
    var str = 'SELECT * FROM xiang_group where number="'+ id +'"';//查询点击修改数据库信息
    connection.query(str, function (err,data) {
        res.jsonp({data:data});
        if (err)console.log(err);
    })
});
//------------------------------搜索页面------------------------------.
sou_llb='nia'
app.get('/reveal2',function(req,res){
        res.jsonp({data:sou_llb});
});
app.get('/reveal',function(req,res) {
    var nameb = req.query.name;
    var sex = req.query.sex;
    var idcar = req.query.idcar;
    if(nameb=='')nameb='0';
    if(sex=='')sex='0';
    if(idcar=='')idcar='0';
    connection.query('SELECT * FROM xiang_group where name="'+ nameb +'" OR sex="'+ sex +'" OR idcar='+ idcar +'', function (err, data) {
        res.jsonp({data: data});
        if (err)console.log(err);
    });
});
//显示页面得到数据库里面所有的值
app.get('/display',function(req,res){
    var str = 'select *from xiang_group';//查询数据库里面所有信息
    connection.query(str,function(err,data){
        if(err) throw err;
        res.jsonp({cont:data});
        //console.log(data);//打印数据库里面的所有信息
    })
});
//删除数据库里面的内容
app.get('/del',function(req,res){
    var _id = req.query._id;//信息表里面的编号值
    var str = 'DELETE daka_time,xiang_group from daka_time LEFT JOIN xiang_group ON xiang_group.number=daka_time.number WHERE xiang_group.number='+_id+'';
    connection.query(str,function(err,data){
        if(err) throw err;
    })
});
//分页第一页
app.get('/crate', function (req, res) {
    var str='SELECT *FROM  daka_time limit  0,10  ';
    connection.query(str, function (err, data) {
        res.jsonp({cont:data});
    });
});
//第二页
app.get('/crete', function (req, res) {
    var str='SELECT *FROM  daka_time limit  10,20  ';
    connection.query(str, function (err, data) {
        res.jsonp({cont:data});
    });
});
//查询
app.get('/craate', function (req, res) {
    var str='SELECT *FROM  xiang_group  ';
    connection.query(str, function (err, data) {
        res.jsonp({cont:data});
    });
});
//添加数据
app.get('/tianjia',function(req,res){
    var tian = req.query.data;
    console.log(tian);
    var str='INSERT INTO xiang_group (name,age,sex,idcar,phonum,qqnum,Occupation,Ict_time,education) VALUES("'+tian.name+'","'+tian.age+'","'+tian.sex+'","'+tian.idcar+'","'+tian.phonum+'","'+tian.qqnum+'","'+tian.Occupation+'","'+tian.Ict_time+'","'+tian.education+'")';
    var str_time='INSERT INTO daka_time (name,idcar) VALUES("'+tian.name+'","'+tian.idcar+'")';
    connection.query(str,function(error,data){
        connection.query(str_time,function(error,data){
            res.jsonp({mcg:'添加成功'});
        });
    });

});
app.listen(8000);
console.log('服务器开启成功！');