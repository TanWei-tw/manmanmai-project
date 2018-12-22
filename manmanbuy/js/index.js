$(function(){
    var  requestUrl="http://localhost:9090"
    // 轮播图初始化
    var mySwiper = new Swiper ('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
        },
        autoplay: true,
        delay: 500
        
        // 如果需要前进后退按钮
  
      })    
    
      
// menu区域数据
// url=requestUrl+"api/getindexmenu";
// console.log(url);

$.ajax({
    url:requestUrl+"/api/getindexmenu",
    
    success:function(data){
        console.log(data);
        var html=template('menuListTpl',data);
        $('.menu-list').html(html);
    
    }
})
// 热门推荐区域
$.ajax({
    url:requestUrl+"/api/getmoneyctrl",
    success:function(data){
        console.log(data);
        var html=template('commodityHotTpl', data);
        $('.commodity-hot').html(html);
        
    }
})
})