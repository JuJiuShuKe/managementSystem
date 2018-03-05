var ip = '192.168.0.36:8000';
ip = '';
$.ajax({
    url:ip + '/xiugai2',
    data:{data:0},
    type:'get',
    dataType:'jsonp',
    success:function(data){
        $('.t2').find('td:nth-child(1)').find('input').val(data.data[0].number),
        $('.t2').find('td:nth-child(2)').find('input').val(data.data[0].name),
        $('.t2').find('td:nth-child(3)').find('input').val(data.data[0].age),
        $('.t2').find('td:nth-child(4)').find('select').val(data.data[0].sex),
        $('.t2').find('td:nth-child(5)').find('input').val(data.data[0].idcar),
        $('.t2').find('td:nth-child(6)').find('input').val(data.data[0].phonum),
        $('.t2').find('td:nth-child(7)').find('input').val(data.data[0].qqnum),
        $('.t2').find('td:nth-child(8)').find('input').val(data.data[0].Occupation),
        $('.t2').find('td:nth-child(9)').find('input').val(data.data[0].Ict_time),
        $('.t2').find('td:nth-child(10)').find('select').val(data.data[0].education);
    },
    error:function(err){
    }
});


var xiugai
$('#l_bxj').click(function(){
    var    str1 =  $(this).parents('tr').find('td:nth-child(2)').find('input').val(),
        str2 =  $(this).parents('tr').find('td:nth-child(3)').find('input').val(),
        str3 =  $(this).parents('tr').find('td:nth-child(4)').find('select').val(),
        str4 =  $(this).parents('tr').find('td:nth-child(5)').find('input').val(),
        str5 =  $(this).parents('tr').find('td:nth-child(7)').find('input').val(),
        str6 =  $(this).parents('tr').find('td:nth-child(6)').find('input').val(),
        str7 =  $(this).parents('tr').find('td:nth-child(8)').find('input').val(),
        str8 =  $(this).parents('tr').find('td:nth-child(9)').find('input').val(),
        str9 =  $(this).parents('tr').find('td:nth-child(10)').find('select').val(),
        str10 =$(this).parents('tr').find('td:nth-child(1)').find('input').val();
    xiugai = {number:str10,name:str1,age:str2,sex:str3,idcar:str4,phonum:str6,qqnum:str5,Occupation:str7,Ict_time:str8,education:str9};
    if (str1 == '' || str2 == '' || str3 == '' || str4 == '' ||  str6 == '' || str7 == '' || str8 == '' || str9 == '' || str10 == '') {
        alert('输入不能为空！')
    } else {
        var la = isCardNQ(str4,str5,str6,str1);
        if(la == undefined){
            alert('修改成功');
            $.ajax({
                url: ip + '/xiugai',
                data:{data:xiugai},
                type:'get',
                dataType:'jsonp',
                success:function(data){
                },
                error:function(err){
                }
            })
        }

    }

});

function isCardNQ(k1,k2,k3,k4) {
    var reg2 = /^\d{5,12}$/;
    var reg3 = /^(0|86|17951)?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
    var reg4 = /^[a-zA-Z\u4e00-\u9fa5][a-zA-Z0-9\u4e00-\u9fa5]*$/;
    var reg1 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(k2){
        if (!reg2.test(k2)) {
            alert("请输入你正确的QQ号");
            return false;
        }
        if (!reg3.test(k3)) {
            alert("请输入你正确的手机号");
            return false;
        }
        if (!reg4.test(k4)) {
            alert("姓名不能以数字开头");
            return false;
        }
        if (reg1.test(k1) === false) {
            alert("身份证输入不合法");
            return false;
        }
    }else {
        xiugai.qqnum = 0
        if (!reg3.test(k3)) {
            alert("请输入你正确的手机号");
            return false;
        }
        if (reg1.test(k1) === false) {
            alert("身份证输入不合法");
            return false;
        }
        if (!reg4.test(k4)) {
            alert("姓名不能以数字开头");
            return false;
        }
    }

}
