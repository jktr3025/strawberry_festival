$(function(){

$(".full").fullpage({
    keyboardScrolling:true,       
    ScrollingSpeed:3000,  
    menu:"#menu", 
    achors:["#section0", "#section1","#section2","#section3", "#section4", "#section5"] ,
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

$(".md_list").slick({
    autoplay:true,   //슬라이드 자동 실행 여부 기본값 false로 자동 슬라이드 안 됨
    autoplaySpeed:500,    //슬라이드 속도 (1000이 1초)
    dots:true,       //버튼 여부 기본값 false로 안 나타남
    arrows:true,    //앞 뒤 이동 화살표 여부 기본값 true로 버튼 표시됨
    slidesToShow:4,    //한 번에 노출될 이미지 갯수
    slidesToScroll:1,  //앞 뒤 화살표 한 번 누를 때 이동될 이미지 갯수 (한 번에 이동될 이미지 갯수 증가하면 버튼 객수 줄어든)
    infinite:true, // 무한 반복 여부 기본값이 true로 계속 반복됨
    rows:1,     //이미지를 몇 줄로 표시할지 여부 
    // slidesPerRow:2,
    // vertical:true,  //이미지가 위 아래로 슬라이드 됨
    // fade:true, //이미지가 페이드 효과로 슬라이드 됨
    pauseOnFocus:true,     //마우스 클릭 시 슬라이드 멈춤 기본값 true
    pauseOnHover:true , // 마우스 호버시 슬라이드 멈춤 기본값 true
    pauseOnDotsHover:true,   //마우스를 버튼에 호버시 슬라이드 멈춤 기본값 false


    // 여러 속성 입력시 쉼표(,) 필요
})//move").slick








})//jquery