window.onload = function () {
    $('.box_p2').css({
        display:'none'
    });
    //点击用户登录
    $('.box_yuangong').on('click',function () {
        $('.box_pp2').css({
            display:'block'
        });
        $('.box_pp').css({
            display:'none'
        });
        $('.box_a1').on('click',function () {
            var user = $('.box_input1').val();
            var password = $('.box_input2').val();
            var idcard = $('.box_input3').val();
            setCookie('idcar',idcard,5);
            if (idcard == ''){
                alert('输入有误！');
            }else if(idcard != ''){
                var Id_kwm =    formValidate($.trim($('#identity').val()) )
                if(Id_kwm==undefined){
                    alert('登录成功！');
                    var date = new Date();
                    var d = new Date(date.setTime(date.getTime()+1000*60*20));
                    document.cookie = 'pwd2 = 456;expires='+ d.toGMTString();
                    window.location.href = './html/k_daka.html';
                }
            }
        });
    });
    // 验证身份证
    function formValidate(k1) {
        var reg1 = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (reg1.test(k1) === false) {
            alert("身份证输入不合法");
            return false;
        }
    }
    //点击管理员登录
    $('.box_guanliy').on('click',function () {
        $('.box_pp2').css({
            display:'none'
        });
        $('.box_pp').css({
            display:'block'
        });
        $('.box_a1').on('click',function () {
            var user = $('.box_input1').val();
            var password = $('.box_input2').val();
            if (user=='' || user !== '东方不败' || password == ''|| password !== '123456'){
                // alert('输入错误！');
            }else {
                alert('登录成功!');
                //创建cookie
                var date = new Date();
                var d = new Date(date.setTime(date.getTime()+1000*60*20));
                document.cookie = 'pwd1 = 123;expires='+ d.toGMTString();
                window.location.href = './html/index.html';
            }
        });
    });
    //点击登录
    $('.box_a1').on('click',function () {
        var user = $('.box_input1').val();
        var password = $('.box_input2').val();
        var idcard = $('.box_input3').val();
        if (user == '' || password == '' || idcard == ''){

        }
        // alert('登录成功！');
    });
    var ip = '192.168.0.36:8000';
    ip = '';
//    *******************管理员页面******************
    $.ajax({
        url:ip + '/Administrator_select',
        dataType:'jsonp',
        success:function (data) {
            // console.log(data);//打印所有MySQL里的数据
            var str = '';
            $.each(data,function (index,val) {
                // console.log(val);//依次打印MySQL的数据
                str += '<tr>' +
                    '<td>'+val.number+'</td>' +
                    '<td>'+val.name+'</td>' +
                    '<td>'+val.age+'</td>' +
                    '<td>'+val.sex+'</td>' +
                    '<td>'+val.idcar+'</td>' +
                    '<td>'+val.phonum+'</td>' +
                    '<td>'+val.qqnum+'</td>' +
                    '<td>'+val.Occupation+'</td>' +
                    '<td>'+val.Ict_time+'</td>' +
                    '<td>'+val.education+'</td>' +
                    '<td>'+val.daka_shangban+'</td>' +
                    '<td>'+val.daka_xiabang+'</td>' +
                    '</tr>';
            });
            $('.box3_table').find('tr').after(str);//把每一天数据添加在table里面
        },
        error:function (err) {
            console.log(err);
        }
    });
//*************************员工页面***************************
    var number;
    var shang_time;
    var xia_time;
    var E_str = '';
    var E_str2 = '';
    var day =(new Date()).getDay();//获取周几
    var time_daka = daka_time();//获取当前的时间
    $.ajax({
        url:ip + '/Employee_select',
        dataType:'jsonp',
        data:{idcar:getCookie('idcar')},
        success:function (data) {
            // console.log(data);
            $.each(data,function (E_index,E_val) {
                number=E_val.number;
                switch (day){
                    case 1:shang_time=E_val.s_daka_1; break;
                    case 2:shang_time=E_val.s_daka_2;  break;
                    case 3:shang_time=E_val.s_daka_3;  break;
                    case 4:shang_time=E_val.s_daka_4;   break;
                    case 5:shang_time=E_val.s_daka_5;  break;
                    default:  break;
                }
                switch (day){
                    case 1: xia_time=E_val.x_daka_1; break;
                    case 2: xia_time=E_val.x_daka_2; break;
                    case 3: xia_time=E_val.x_daka_3; break;
                    case 4: xia_time=E_val.x_daka_4; break;
                    case 5: xia_time=E_val.x_daka_5; break;
                    default:  break;
                }
                E_str += '<tr>' +
                    '<td>'+E_val.number+'</td>' +
                    '<td>'+E_val.name+'</td>' +
                    '<td>'+E_val.idcar+'</td>' +
                    '<td>'+
                     '<a href="javascript:;" style="background: #ff313d" class="box2_a1">是</a>' +
                    '</td>' +
                    '<td>'+
                        '<a href="javascript:;" style="background: #ff313d" class="box2_a2">是</a>' +
                    '</td>' +
                    '</tr>';
                E_str2 += '<tr>' +
                    '<td class="time_daka">'+shang_time+'</td>' +
                    '<td class="time_dakaxiab">'+xia_time+'</td>' +
                    '</tr>';
            });
            $('.box2_table').find('tr').after(E_str);
            $('.box2_table2').find('tr').after(E_str2);
            var tr = '<tr>' +
                '<td colspan="2" ><h3>'+"星期"+day+'</h3></td>' +
                '</tr>'
            $('.box2_table2').find('tr:eq(0)').before(tr);
            //打卡时点击‘是’----------上班
            $('.box2_a1').on('click',function () {
                $.ajax({
                    url:ip+'/updata_daka',
                    dataType:'jsonp',
                    data:{s_daka_1:time_daka,number:number},
                    success:function (data) {
                        alert('上班打卡成功,已存储在后台！');
                        $('.time_daka').text(time_daka);
                    },
                    error:function (err) {
                        console.log(err);
                    }
                });
            });
            //打卡时点击‘是’----------下班
            $('.box2_a2').on('click',function () {
                $.ajax({
                    url:ip+'/updata_dakaxiab',
                    dataType:'jsonp',
                    data:{x_daka_1:time_daka,number:number},
                    success:function (data) {
                        alert('下班打卡成功,已存储在后台！');
                        $('.time_dakaxiab').text(time_daka);
                        console.log(data);
                    },
                    error:function (err) {
                        console.log(err);
                    }
                });
            })
        },
        error:function (err) {
            console.log(err);
        }
    });
    //点击退出
    $('.box2_a3').on('click',function () {
        window.location.href = '../k_index.html';
    })
    //获取打卡时间
    function daka_time() {
        var time = new Date();
        var year = time.getFullYear();
        var month = (time.getMonth()+1) < '10' ? '0'+(time.getMonth()+1) : (time.getMonth()+1);
        var data = (time.getDate()) < '10' ? '0'+(time.getDate()) : (time.getDate());
        var hour = (time.getHours()) < '10' ? '0'+(time.getHours()) : (time.getHours());
        var minous = (time.getMinutes()) < '10' ? '0'+(time.getMinutes()) : (time.getMinutes());
        var second = (time.getSeconds()) < '10' ? '0'+(time.getSeconds()) : (time.getSeconds());
        // month < '10' ? '0'+month : month;
        var time_dake = year+'/'+month+'/'+data+' '+hour+'：'+minous+'：'+second;
        return time_dake;
    }
    //cookie
    function getCookie(name) {
        var arr = document.cookie.split(';');
        var cookie = document.cookie.split('; ');
        var value = '';
/*        for (var i=0,len = arr.length;i<len;i++){
            if (arr[i].split('=')[0] == name){
                value = arr[i].split('=')[1];
                break;
            }
        }*/

        //  ---------------  zzq   change your idcar value ---------------
        cookie.forEach(function(val,index){
            if(val.split('=')[0] == 'idcar'){
                value = val.split('=')[1];
            }
        });
        return value;
    };
};