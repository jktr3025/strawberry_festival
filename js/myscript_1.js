$(function(){

$("#fullpage").fullpage({
    ScrollingSpeed:2000,  
    navigation:true,
    // keyboardScrolling:true,
    menu:".nav", 
    anchors:["section1","section2","section3", "section4", "section5","section6"],
    afterLoad :function(index){
        var n =index.index;
        console.log("n :", n)
        if(n == 1 || n == 3){
            $(".img_r").addClass("on");
            $(".img_l").addClass("on");
            $(".sec2_img").addClass("on");
        }else{
            $(".img_r").removeClass("on");
            $(".img_l").removeClass("on");
            $(".sec2_img").removeClass("on");
        }//if
    }//afterLoad
})//fullpage


// $(".md_list").slick({
//     slidesToShow:4,
//     slidesToScroll:2,
//     autoplay:true,
//     autoplaySpeed:1000,
//     dots:true,
//     pauseOnHover:true,
//     pauseOnDotsHover:true,
// })//box_view").slick







})//jquery