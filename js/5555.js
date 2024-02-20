$(function(){

    $('.full').fullpage({
        css3:true,
        //options here
        autoScrolling:true,
        // scrollHorizontally: true,
        navigation:true,
        // menu : ".nav",
        anchors :["section1", "section2", "section3","section4", "section5","section6"],
        


    });  

    $.fn.fullpage.setAllowScrolling(false);


})//jquery