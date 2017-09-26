/**
 * Created by N on 2017/8/31.
 */
//轮播图
new Swiper(".swiper-container",{
    loop:true,
    pagination:".swiper-pagination",
    /*autoplay:1000,*/
    paginationClickable:true
});

//article-list
$.ajax({
    url:"data/list.json",
    type:"get",
    success:function(result){
        renderList(result);
    }
});

function renderList(result){
    var str = '';
    for(var i = 0;i<result.length;i++){
        str += "<dl><dt><img src="+result[i].img+"></dt><dd><h3>"+result[i].name+"</h3><p>"+result[i].tec+"</p><h4><span>"+result[i].money+"</span><i>/40分钟</i></h4><h5>接单量：<span>"+result[i].num+"</span></h5></dd></dl>";
    }

    $('.article-list').html(str);
}