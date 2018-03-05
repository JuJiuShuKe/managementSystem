var  sousu = '' ;
$.ajax({
    url:'http://192.168.0.36:8000/reveal2',
    data:{data:0},
    type:'get',
    dataType:'jsonp',
    success:function(data){
        sousu = data.data
    },
    error:function(err){
    }
});

var nameb = '';            //获取姓名    通过姓名查询
var sexb = '';            //获取性别    通过性别查询
var idb = '';            //获取身份证    通过身份证查询
setTimeout(function () {
    if (sousu.length == 1) {
        sexb = sousu;
        //console.log('男')
    } else if (sousu.length < 14) {
        nameb = sousu;
        //console.log('姓名')
    } else {
        idb = sousu;
        //console.log('身份证')
    }
    $.ajax({
        url: 'http://192.168.0.36:8000/reveal',
        data: {name: nameb, sex: sexb, idcar: idb},
        type: 'get',
        dataType: 'jsonp',
        success: function (data) {
            var tr = $('#ttrrr');
            if (data.data == '') {
                tr.after('<tr><td colspan="10">搜索无结果，请重新输入</td></tr>');
            }
            else {
                var Data_cl = data.data;
                Data_cl.forEach(function (val, index) {
                    var number = val.number,
                        name = val.name,
                        age = val.age,
                        sex = val.sex,
                        idcar = val.idcar,
                        phonum = val.phonum,
                        qqnum = val.qqnum,
                        Occupation = val.Occupation,
                        Ict_time = val.Ict_time,
                        education = val.education;
                    var str23 = '<tr class="t2">\
                <td><input type="text" style="background: #f5f5f5;" value=' + number + ' disabled="disabled"></td>\
                <td><input type="text" maxlength="4" value=' + name + ' disabled="disabled"></td>\
                <td><input type="number" oninput="if(value.length>3)value=value.slice(0,3)" value=' + age + ' disabled="disabled"></td>\
                <td><input type="text" maxlength="18" value=' + sex + ' disabled="disabled"></td>\
                <td><input type="text" maxlength="18" value=' + idcar + ' disabled="disabled"></td>\
                <td><input type="text" maxlength="11" value=' + phonum + ' disabled="disabled"></td>\
                <td><input type="text" value=' + qqnum + ' disabled="disabled"></td>\
                <td><input type="text" value=' + Occupation + ' disabled="disabled"></td>\
                <td><input type="text" value=' + Ict_time + ' disabled="disabled"></td>\
                <td><input type="text" value=' + education + ' disabled="disabled"></td>\
                </tr>';
                    tr.after(str23);
                })
            }
        },
        error: function (err) {
            if (err) console.log(err);
        }
    });
},200)