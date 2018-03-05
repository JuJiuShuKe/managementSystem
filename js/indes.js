$('#l_bxj').click(function(){
    var    str1 =  $(this).parents('tr').find('td:nth-child(2)').find('input').val(),
        str2 =  $(this).parents('tr').find('td:nth-child(3)').find('input').val(),
        str3 =  $(this).parents('tr').find('td:nth-child(4)').find('select').val(),
        str4 =  $(this).parents('tr').find('td:nth-child(5)').find('input').val(),
        str5 =  $(this).parents('tr').find('td:nth-child(6)').find('input').val(),
        str6 =  $(this).parents('tr').find('td:nth-child(7)').find('input').val(),
        str7 =  $(this).parents('tr').find('td:nth-child(8)').find('input').val(),
        str8 =  $(this).parents('tr').find('td:nth-child(9)').find('input').val(),
        str9 =  $(this).parents('tr').find('td:nth-child(10)').find('select').val(),
        str10 =$(this).parents('tr').find('td:nth-child(1)').find('input').val();
    var xiugai = {number:str10,name:str1,age:str2,sex:str3,idcar:str4,phonum:str5,qqnum:str6,Occupation:str7,Ict_time:str8,education:str9};
    if (str1 == '' || str2 == '' || str3 == '' || str4 == '' || str5 == '' || str6 == '' || str7 == '' || str8 == '' || str9 == '' || str10 == '') {
        alert('输入不能为空！')
    } else {
        isCardNo(str5)
        isCardNQ(str6)
        isCardNI(str7)
        var ip = '192.168.0.36:8000';
        ip = '';
        $.ajax({
            url:ip + '/xiugai',
            data:{data:xiugai},
            type:'get',
            dataType:'jsonp',
            success:function(data){
                console.log(data);
            },
            error:function(err){
            }
        })
    }

});
$('.a55').click(function(){
    window.location.href = '../html/zhongxiaodie.html';
});
//判断身份证号
function isCardNo(card)
{
    // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
    var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
    if(reg.test(card) === false)
    {
        alert("身份证输入不合法");
        return  false;
    }
}
//判断QQ号
function isCardNQ(k) {
    var reg = /^\d{5,10}$/;
    //用上面定义的正则表达式测试，如果不匹配则返回false
    if (!reg.test(k)) {
        alert("请输入你正确的QQ号");
        return false;
    }
}
//判断QQ号
function isCardNI(k) {
    var reg = /^(0|86|17951)?(13[0-9]|15[012356789]|17[013678]|18[0-9]|14[57])[0-9]{8}$/;
    //用上面定义的正则表达式测试，如果不匹配则返回false
    if (!reg.test(k)) {
        alert("请输入你正确的手机号");
        return false;
    }
}