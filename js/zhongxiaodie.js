window.onload = function(){
    var IP='192.168.0.36:8000';//声明全局变量地址，方便后期修改
    IP = "";
    _data();
    var sz =[];
  function _data(){

      $.ajax({
          url :IP +'/display',
          dataType:'jsonp',
          success:function(data,status){
              $.each(data.cont,function(index,val){
                  var lgz='<tr class="tr1">'+
                      '<td><input type="text" disabled value='+data.cont[index].number+'></td>'+
                      '<td><input class="transverse" type="text" disabled value='+data.cont[index].name+'></td>'+
                      '<td><input class="transverse" type="text" disabled value='+data.cont[index].age+'></td>'+
                      '<td><input class="transverse" type="text" disabled value='+data.cont[index].sex+'></td>'+
                      '<td><input class="transverse" type="text" disabled value='+data.cont[index].idcar+'></td>'+
                      '<td><input class="transverse" type="text" disabled value='+data.cont[index].phonum+'></td>'+
                      '<td><input class="transverse" type="text" disabled value='+data.cont[index].qqnum+'></td>'+
                      '<td><input class="transverse" type="text" disabled value='+data.cont[index].Occupation+'></td>'+
                      '<td><input class="transverse" type="text" disabled value='+data.cont[index].Ict_time+'></td>'+
                      '<td><input class="transverse" type="text" disabled value='+data.cont[index].education+'></td>'+
                      '<td>'+
                      '<button class="transverse1">删除</button>'+
                      '<button class="transverse2">修改</button>'+
                      '</td>'+
                      '</tr>';
                  sz.push(lgz);
              });
              for(var i = 0;i<10;i++){
                  $('.form').append(sz[i]);
              }
              $('.transverse2').click(function(){
                  var trObj = $(this).parents('tr:eq(0)');
                  var id = trObj.find('td:eq(0) input').val();
                  $.ajax({
                        url:IP+'/zxd',
                        data:{name:id},
                        success:function(data){
                            console.log(data);
                        },
                        error:function(err){
                          //console.log(err);
                        }
                  });
                  setTimeout(function(){window.location.href = '../html/xiugai.html';},500)
              });
              $('.transverse1').click (function(){
                  var xx = confirm("确认删除这条数据吗？");//弹出对话框
                  if(xx == true){//如果点击确认
                      del(this);//执行删除函数
                  }
              });
              $('#sousuo_l2').on('click',function () {
                  var sou_val = $('#sousuo_l').val()
                  $.ajax({
                      url:IP+'/zxd',
                      data:{sou_ll:sou_val},
                      success:function(data){
                      },
                      error:function(err){
                      }
                  });
                  setTimeout(function(){window.location.href = '../html/sousuo.html';},500)
              });
          },
          error:function(err){
              console.log(err);
          }
      });
  }
//页面跳转到添加
    $('#add1').click(function(){
        window.location.href = '../html/tianjia.html';
    });
    /**
     * 点击删除父级元素
     * remove 清楚所匹配的标签
     * @param _this
     */
    function del(_this){
        $(_this).parent().parent().remove();//清楚当前点击删除这行的父级的父级
        var str = $(_this).parent().parent().children().children().val();//找到当前点击删除这行的编号的值
        zxd(str);//引用ajax
        console.log(str);
    }

    /**
     * ajax的删除操作
     * @param _id
     */
    function zxd(_id){
        $.ajax({
                url:IP +'/del',
                data:{_id:_id},//把当前页面的删除这行的编号的值传入到后台
                success:function(data){
                    console.log(data);
                },
                error:function(err){
                    console.log(err);
                }
            }
        )
    }


    $('li').click(function(){
        console.log(this.innerText);
        $('.tr1').html('');
        zxd1(this.innerText);
    });


    function zxd1(num){
        if(num>0&&num<6){
            index = num;
        }
        if(num == '«'){
            index--;
        }
        if(num == '»'){
            index++;
        }
        if(index == 0){
            index = 5;
        }
        if(index == 6){
            index = 1;
        }
        if(index ==1 ){
            for(var i = 0;i<10;i++){
                $('.form').append(sz[i]);
            }
            $('.transverse1').click (function(){
                var xx = confirm("确认删除这条数据吗？");//弹出对话框
                if(xx == true){//如果点击确认
                    del(this);//执行删除函数
                }
            });
        }
        else if(index == 2){
            for(var i2 = 10;i2<20;i2++){
                $('.form').append(sz[i2]);
            }
            $('.transverse1').click (function(){
                var xx = confirm("确认删除这条数据吗？");//弹出对话框
                if(xx == true){//如果点击确认
                    del(this);//执行删除函数
                }
            });
        }
        else if(index == 3){
            for(var i3 = 20;i3<30;i3++){
                $('.form').append(sz[i3]);
            }
        }
        else if(index == 4){
            for(var i4 = 30;i4<40;i4++){
                $('.form').append(sz[i4]);
            }
        }
        else if(index == 5){
            for(var i5 = 40;i5<50;i5++){
                $('.form').append(sz[i5]);
            }
        }
    }
};