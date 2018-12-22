// $(function(){
//     var  requestUrl="http://localhost:9090";
//     var page=1;
//     function getUrlParam(name){
//         var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
//         var r = window.location.search.substr(1).match(reg);
//         if (r!=null) return unescape(r[2]); return null;
//     }
//     getUrlParam=getUrlParam("categoryid");
//     console.log(getUrlParam);
    
    
//     getproductlist();
//     function getproductlist(){
//         $.ajax({
//             url:requestUrl+"/api/getproductlist",
//             data:{
//                 categoryid:getUrlParam,
//                 pageid:page
//             },
//             success:function(data){
//           console.log(data);
//           var html=template('maincontentTpl',data);
//                   $('.mainList').html(html)
//             }
//         })
//     }
  
//     // 下拉刷新上拉刷新
//     mui.init({
//         pullRefresh : {
//           container:"#refreshContainer",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
//           down : {
//             height:50,//可选,默认50.触发下拉刷新拖动距离,
//             // auto: true,//可选,默认false.首次加载自动下拉刷新一次
//             contentdown : "下拉可以刷新",//可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
//             contentover : "释放立即刷新",//可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
//             contentrefresh : "正在刷新...",//可选，正在刷新状态时，下拉刷新控件上显示的标题内容
//             callback :function(){
             
//               setTimeout(function(){
//                 getproductlist();
    
//                 mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
//                 // 结束加载有BUG百度
//                 mui('#refreshContainer').pullRefresh().refresh(true);
//                 // 重置上拉加载
//                 page=1;
//                 console.log(page);
                
               
//               },1000)
//             } //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
//           },
//           up : {
//             height:50,//可选.默认50.触发上拉加载拖动距离
//             auto:true,//可选,默认false.自动上拉加载一次
//             contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
//             contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
//             callback :function(){
//                 page++;
//               setTimeout(function(){
                
//                 $.ajax({
//                     url:requestUrl+"/api/getproductlist",
//                     data:{
//                         categoryid:getUrlParam,
//                         pageid:page
//                     },
//                     success:function(data){
//                   console.log(data);
//                   if(data.result>0){
//                     var html=template('maincontentTpl',data);
//                     $('.mainList').append(html);
//                     mui('#refreshContainer').pullRefresh().endPullupToRefresh();
//                     console.log(page);
                    
                    
//                   }else{
//                     //   alert('没有更多数据了')
                    
                    
//                       mui('#refreshContainer').pullRefresh().endPullupToRefresh(true);
                   
//                   }
                
//                     }
//                 })
               
//               },1000)
//             }
//           }
//         }
        
//       });
//     //   .根据分类id获取分类名称
//     $.ajax({
//         url:requestUrl+"/api/getcategorybyid",
//         data:{
//             categoryid:getUrlParam
//         },
//         success:function(data){
//             console.log(data);
//             console.log(data.result[0].category);
//             var html=data.result[0].category;
//            console.log(html);
           
//            $('.fenlei').html(html)
            
//         }
//     })
//     // 点击跳转到详情
//     $('.mainList').on('tap','a',function(e){
//       e.preventDefault();
//       var categoryId = $(this).data('id');
//       var productId=$(this).data('idc');
//       location="productDetails.html?categoryId="+categoryId+"&productId="+productId;
//     })
// })
// 封装原型
$(function(){
  // new出一个构造函数
  var mmb=new product();
  var page=1;
  getUrlParam=mmb.getUrlParam("categoryid");
  mmb.getmainList(page);
  // mmb.getproductlist(page);
  mmb. gitnameid(getUrlParam)

     // 点击跳转到详情
  $('.mainList').on('tap','a',function(e){
      e.preventDefault();
      // 获取a标签获取的元素
      var categoryId = $(this).data('id');
      var productId=$(this).data('idc');
      location="productDetails.html?categoryId="+categoryId+"&productId="+productId;
    });
    // 上拉下拉刷新
    mui.init({
      pullRefresh : {
        container:"#refreshContainer",//下拉刷新容器标识，querySelector能定位的css选择器均可，比如：id、.class等
        down : {
          height:50,//可选,默认50.触发下拉刷新拖动距离,
          // auto: true,//可选,默认false.首次加载自动下拉刷新一次
          contentdown : "下拉可以刷新",//可选，在下拉可刷新状态时，下拉刷新控件上显示的标题内容
          contentover : "释放立即刷新",//可选，在释放可刷新状态时，下拉刷新控件上显示的标题内容
          contentrefresh : "正在刷新...",//可选，正在刷新状态时，下拉刷新控件上显示的标题内容
          callback :function(){
           
            setTimeout(function(){
              mmb.getmainList();
  
              mui('#refreshContainer').pullRefresh().endPulldownToRefresh();
              // 结束加载有BUG百度
              mui('#refreshContainer').pullRefresh().refresh(true);
              // 重置上拉加载
              page=1;
              console.log(page);
              
             
            },1000)
          } //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
        },
        up : {
          height:50,//可选.默认50.触发上拉加载拖动距离
          auto:true,//可选,默认false.自动上拉加载一次
          contentrefresh : "正在加载...",//可选，正在加载状态时，上拉加载控件上显示的标题内容
          contentnomore:'没有更多数据了',//可选，请求完毕若没有更多数据时显示的提醒内容；
          callback :function(){
              page++;
            setTimeout(function(){
              
              $.ajax({
                  url:mmb.requestUrl+"/api/getproductlist",
                  data:{
                      categoryid:getUrlParam,
                      pageid:page
                  },
                  success:function(data){
                console.log(data);
                if(data.result>0){
                  var html=template('maincontentTpl',data);
                  $('.mainList').append(html);
                  mui('#refreshContainer').pullRefresh().endPullupToRefresh();
                  console.log(page);
                  
                  
                }else{
                  //   alert('没有更多数据了')
                  
                  
                    mui('#refreshContainer').pullRefresh().endPullupToRefresh(true);
                 
                }
              
                  }
              })
             
            },1000)
          }
        }
      }
      
    });
 
})
// 创建一个函数
var product=function(){

};
// 给product添加原型属性
product.prototype={
  //共工的请求地址
  requestUrl:"http://localhost:9090",
  // 商品详情ajax函数
  getmainList:function(page){
    var that=this;
    $.ajax({
      url:that.requestUrl+"/api/getproductlist",
      data:{
          categoryid:getUrlParam,
          pageid:page
      },
      success:function(data){
    console.log(data);
    var html=template('maincontentTpl',data);
            $('.mainList').html(html)
      }
  })
  },
  // 获取URL地址参数函数
   getUrlParam: function(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r!=null) return unescape(r[2]); return null;
},
// 页面商品头部的商品名
   gitnameid:function(getUrlParam){
     console.log(getUrlParam);
      that=this;
    $.ajax({
      url:that.requestUrl+"/api/getcategorybyid",
      data:{
          categoryid:getUrlParam
      },
      success:function(data){
          console.log(data);
          console.log(data.result[0].category);
          var html=data.result[0].category;
         console.log(html);
         
         $('.fenlei').html(html)
          
      }
  })
   }

}