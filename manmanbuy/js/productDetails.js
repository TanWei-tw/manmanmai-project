// $(function(){
//     var  requestUrl="http://localhost:9090";
//     function getUrlParam(name){
//         var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
//         var r = window.location.search.substr(1).match(reg);
//         if (r!=null) return unescape(r[2]); return null;
//     }
//     var productId=getUrlParam("productId");
//     var getUrlParam=getUrlParam("categoryId");
//     // main上半部分渲染
//     $.ajax({
//         url:requestUrl+"/api/getproduct",
//         data:{
//             productid:productId
//         },
//         success:function(data){
//             console.log(data);
//             var html=template('mainContentTpl',data);
//              $('.main-title').html(html)

//         }
//     })
//     //main下班部分渲染
//     $.ajax({
//         url:requestUrl+"/api/getproductcom",
//         data:{
//             productid:productId
//         },
//         success:function(data){
//         var html=template('commentTpl',data);
//         $('.main-content-list ul').html(html);

//         }
//     })
//     // 根据ID获取名称
//     $.ajax({
//         url:requestUrl+"/api/getcategorybyid",
//         data:{
//             categoryid:getUrlParam
//         },
//         success:function(data){
//             console.log(data);
           
//             var html=data.result[0].category;
//            console.log(html);
           
//            $('.fenlei').html(html)
            
//         }
//     })
// });
$(function(){
    var mml=new productDetails();
    var productId=mml.getUrlParam("productId");
    var getUrlParam=mml.getUrlParam("categoryId");
    mml.maintop(productId);
    mml.maindown(productId);
    mml.mainId(getUrlParam);
})
var productDetails=function(){

}
productDetails.prototype={
    // 公共的地址
    requestUrl:"http://localhost:9090",
    //main上半部分渲染
    maintop:function(productId){
        that=this;
        $.ajax({
            url:that.requestUrl+"/api/getproduct",
            data:{
                productid:productId
            },
            success:function(data){
                console.log(data);
                var html=template('mainContentTpl',data);
                 $('.main-title').html(html)
    
            }
        })
    },
     //main下班部分渲染
    maindown:function(productId){
        that=this;
        $.ajax({
            url:that.requestUrl+"/api/getproductcom",
            data:{
                productid:productId
            },
            success:function(data){
                console.log(data);
                
            var html=template('commentTpl',data);
            $('.main-content-list ul').html(html);
    
            }
        })
    },
    // 根据ID获取名称
    mainId:function(getUrlParam){
        $.ajax({
            url:requestUrl+"/api/getcategorybyid",
            data:{
                categoryid:getUrlParam
            },
            success:function(data){
                console.log(data);
               
                var html=data.result[0].category;
               console.log(html);
               
               $('.fenlei').html(html)
                
            }
        })
    },
    // 获取URL参数
     getUrlParam:function(name){
        var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r!=null) return unescape(r[2]); return null;
    }
}