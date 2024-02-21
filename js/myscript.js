window.onload = function(){
    $(".pop, .modal").show();
}//

$(document).ready(function () {
    $('#fullpage').fullpage({
            //options here
            autoScrolling: true,
            scrollHorizontally: true,
            // navigation: true,
            menu: ".nav",
            anchors: ["section1", "section2", "section3", "section4", "section5", "section6"],
            afterLoad: function (index) {
                var n = index.index;
                console.log("n :", n)
                if (n == 1 || n == 3) {
                    $(".img_r").addClass("on");
                    $(".img_l").addClass("on");
                    $(".sec2_img").addClass("on");
                } else {
                    $(".img_r").removeClass("on");
                    $(".img_l").removeClass("on");
                    $(".sec2_img").removeClass("on");
                } //if
            } //afterLoad
        },
        $(".md_list").slick({
            slidesToShow: 5,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 1500,
            dots: false,
            arrows: false,
        }), // slick
        
        
        
        
        //tab
        $(".sec6_cont h3").click(function(){
            $(".sec6_cont h3").removeClass("on");
            $(this).addClass("on");
    
            $(".sec6_cont ul").removeClass("on");
            $(this).next().addClass("on");
        }),//

        //pop
        $(".close1, .close2").click(function(){
            $(".pop, .modal").hide();
        })//

        )//fullpage

}); //jquery

var originalId , cloneId 
window.addEventListener("DOMContentLoaded", function(){

    // 롤링 배너 복제본 생성
    let roller = document.querySelector(".roller");
    roller.id = "roller1";

    let clone =  roller.cloneNode(true);
    clone.id = "roller2";
    document.querySelector(".wrap").appendChild(clone); //부착

    //원본, 복제본 배너 위치 지정
    document.querySelector("#roller1").style.left = "0px"
    document.querySelector("#roller2").style.left = document.querySelector(".roller ul").offsetWidth + "px";

    //클래스 할당
    roller.classList.add("original");
    clone.classList.add("clone");

    //인터벌 매서드 애니메이션
    let rollerWidth = document.querySelector(".roller ul").offsetWidth;
    let betweenDistance = 1;

    //롤링 시작
    function startRoller(){
        originalId = window.setInterval(betweenrollcallback, parseInt(3000/100),betweenDistance, document.querySelector("#roller1") );
        cloneId = window.setInterval(betweenrollcallback, parseInt(3000/100),betweenDistance, document.querySelector("#roller2") );
    }//



    function betweenrollcallback(d, roller){
        let left = parseInt(roller.style.left);
        roller.style.left = (left - d) + "px" ; //이동
        //조건부 리셋
        if(rollerWidth + (left - d) <= 0){
            roller.style.left = rollerWidth + "px";
        }
    }

    startRoller(); //롤링 초기화


    //롤링 정지
    function stopRoller(){
        clearInterval(originalId);
        clearInterval(cloneId);
    }
    
    //마우스 호버시 롤리 멈추기, 다시 롤리 되기
    document.getElementById("roller1").addEventListener("mouseover", ()=> {stopRoller()} );
    document.getElementById("roller2").addEventListener("mouseover", ()=> {stopRoller()} );
    document.getElementById("roller1").addEventListener("mouseout", ()=> {startRoller()} );
    document.getElementById("roller2").addEventListener("mouseout", ()=> {startRoller()} );
})//window.addEventListener



