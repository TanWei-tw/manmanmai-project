// $(function(){
//     var  requestUrl="http://localhost:9090";
//     $.ajax({
//            url:requestUrl+"/api/getcategorytitle",
//            success:function(data){
//             console.log(data);
//             var html=template('mainTitleTpl',data)
//             $('#main').html(html);
//             mainContent();

//            }
//     })

//    var that;
//     $('#main').on('tap','.menuList-title',function(){
//         that=this;
//   mainContent();
//     })
//     function mainContent(){
//         var titleid=$(that).data('id');
//         console.log(titleid);
//         $.ajax({
//             url:requestUrl+"/api/getcategory",
//             data:{
//                 titleid:titleid
//             },
//             success:function(data){
//                 console.log(data);
//                 var html=template('mainContentTpl',data);
//                 $('.main-content').html(html)

//             }
//         })
//     }

// })
$(function () {
    var mmm = new category();
    // 标题标签
    mmm.headline();
    // 点击渲染出内容标签
    $('#main').on('tap', '.menuList-title', function () {
        var titleid = $(this).data('id');
        mmm.mainContent(titleid)
    })
})
// 创建一个函数
var category = function () {

};
// 给函数添加原型
category.prototype = {
    // 公共URL
    requestUrl: "http://localhost:9090",
    // 内容的APIajax
    mainContent: function (titleid) {
        that = this;
        console.log(titleid);
        $.ajax({
            url: that.requestUrl + "/api/getcategory",
            data: {
                titleid: titleid
            },
            success: function (data) {
                console.log(data);
                var html = template('mainContentTpl', data);
                $('.main-content').html(html)

            }
        })
    },
    // 标题
    headline: function () {
        that=this;
        $.ajax({
            url:that.requestUrl + "/api/getcategorytitle",
            success: function (data) {
                console.log(data);
                var html = template('mainTitleTpl', data)
                $('#main').html(html);
                mainContent();

            }
        })
    }


}