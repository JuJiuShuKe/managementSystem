var IP='192.168.0.36:8000';
IP = '';
$('.tianjia').click(function(){
    add_fn(this);
});
//跳转到首页
$('button').click(function(){
    window.location.href = '../html/index.html';
});
//添加
var num = 0;
function add_fn(_this){
    num ++ ;
    var tr = $(_this).parent().parent(),
        name = tr.find('input:eq(1)').val(),
        age = tr.find('input:eq(2)').val(),
        sex=tr.find('#cls').val();
        idcar = tr.find('input:eq(3)').val(),
        phonum = tr.find('input:eq(4)').val(),
        qqnum = tr.find('input:eq(5)').val(),
        Occupation = tr.find('input:eq(6)').val(),
        Ict_time = tr.find('input:eq(7)').val(),
        education= tr.find('#cls2').val();
    var arr_value = judge_value([name,age,sex,idcar,phonum,qqnum,Occupation,Ict_time,education]);
    if(typeof arr_value == 'object'){
        //console.log(tr,name,age,sex,idcar,qqnum,phonum,Occupation,Ict_time,education);
        var str = '<tr>' +
                '<td><input type="text" value='+num+' disabled="disabled"></td>' +
                '<td><input type="text" value='+name+' disabled="disabled"></td>' +
                '<td><input type="text" value='+age+' disabled="disabled"></td>' +
                '<td><input type="text" value='+sex+' disabled="disabled"></td>' +
                '<td><input type="text" value='+idcar+' disabled="disabled"></td>' +
                '<td><input type="text" value='+phonum+' disabled="disabled"></td>' +
                '<td><input type="text" value='+qqnum+' disabled="disabled"></td>' +
                '<td><input type="text" value='+Occupation+' disabled="disabled"></td>' +
                '<td><input type="text" value='+Ict_time+' disabled="disabled"></td>' +
                '<td><input type="text" value='+education+' disabled="disabled"></td>' +
            '</tr>';
        var tianjia_arr={name:name,age:age,sex:sex,idcar:idcar,phonum:phonum,qqnum:qqnum,Occupation:Occupation,Ict_time:Ict_time,education:education};
        //console.log(tianjia_arr);
        $.ajax({//把数据传到后台
            url:IP+'/tianjia',
            type:'get',
            dataType:'jsonp',
            data:{data:tianjia_arr},
            success:function(data){
                alert('添加成功!');
            },
            error:function(error){
            }
        });
        tr.before(str);
        tr.find('input:eq(1)').val('');
        tr.find('input:eq(2)').val('');
        tr.find('input:eq(3)').val('');
        tr.find('input:eq(4)').val('');
        tr.find('input:eq(5)').val('');
        tr.find('input:eq(6)').val('');
        tr.find('input:eq(7)').val('');
    }else{
        alert(arr_value);
    }
}
//身份证正则
function sfz(s){
    var patrn=/^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    //var a=/^[12345]\d{17}$/;
    if (patrn.test(s)){
        return true;
    } else {
        return false;
    }
}
//手机号正则
function shouji(e){
    var shou=/^1[34578][0-9]\d{4,8}$/;
    if (shou.test(e)){
        return true;
    } else {
        return false;
    }
}
//判断姓名
function mingx(e){
    var myReg = /^[\u4e00-\u9fa5]+$/;
    if (myReg.test(e)) {
       return true;
    } else {
      return false;
    }
}
//输入限制
function judge_value(arr){
    if(!arr[0] || !arr[1] || !arr[2] || !arr[3] || !arr[4] || !arr[6] || !arr[7] || !arr[8]) return '不能有空！';
    if(!mingx(arr[0])) return '姓名不正确';
    if(isNaN(Number(arr[1]))) return '年龄不正确';
    if(parseInt(arr[1]) < 18 || parseInt(arr[1]) > 65) return '年龄18-65';
    if (!sfz(arr[3])) return '身份证不正确';
    if (!shouji(arr[4])) return '手机号不正确!';
    if(parseInt(arr[5].length) < 5 || parseInt(arr[5].length) > 12) return 'QQ号5-12位';
    if(!mingx(arr[6])) return '岗位不正确';
   return arr;
}