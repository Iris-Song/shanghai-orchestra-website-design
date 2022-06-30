function PlaySound(soundobj) {
  var thissound=document.getElementById(soundobj);
  thissound.play();
}

function StopSound(soundobj) {
  var thissound=document.getElementById(soundobj);
  thissound.pause();
}

document.onreadystatechange = function () {
  if (document.readyState == "complete") {    
      $(".loading-div").hide();
      $('body').css('overflow','scroll');
  }
}

var mp_bg=document.getElementById("point_area");
window.onload = function (event) {
    window.onscroll = function () {
        //获取div距离顶部的偏移量
        var SHTop = document.getElementById("Shanghai").offsetTop;
        var SHHeight = document.getElementById("Shanghai").offsetHeight;
        var TKTop = document.getElementById("Tokyo").offsetTop;
        var TKHeight = document.getElementById("Tokyo").offsetHeight;
        var LDTop = document.getElementById("London").offsetTop;
        var LDHeight = document.getElementById("London").offsetHeight;
        var NYTop = document.getElementById("NewYork").offsetTop;
        var NYHeight = document.getElementById("NewYork").offsetHeight;
        var KRTop = document.getElementById("Korea").offsetTop;
        var KRHeight = document.getElementById("Korea").offsetHeight;
        var HKTop = document.getElementById("Hongkong").offsetTop;
        var HKHeight = document.getElementById("Hongkong").offsetHeight;
        //屏幕卷去的高度
        var scrollTops = document.documentElement.scrollTop || document.body.scrollTop;
        if ((scrollTops) > SHTop-SHHeight/2+30 && scrollTops < SHTop+SHHeight/2+100) {
            mp_bg.className="";
            mp_bg.classList.add("point_area");
            mp_bg.classList.add("office1");
            mp_bg.style.top=scrollTops.toString()+"px";
            mp_bg.style.display="block";

        } else if ((scrollTops) > TKTop-TKHeight/2+30 && scrollTops < TKTop+TKHeight/2+100){
            mp_bg.className="";
            mp_bg.classList.add("point_area");
            mp_bg.classList.add("office2");
            mp_bg.style.top=scrollTops.toString()+"px";
            mp_bg.style.display="block";
        } else if ((scrollTops) > LDTop-LDHeight/2+30 && scrollTops < LDTop+LDHeight/2+100){
            mp_bg.className="";
            mp_bg.classList.add("point_area");
            mp_bg.classList.add("office3");
            mp_bg.style.top=scrollTops.toString()+"px";
            mp_bg.style.display="block";
        } else if ((scrollTops) > NYTop-NYHeight/2+30 && scrollTops < NYTop+NYHeight/2+100){
            mp_bg.className="";
            mp_bg.classList.add("point_area");
            mp_bg.classList.add("office4");
            mp_bg.style.top=scrollTops.toString()+"px";
            mp_bg.style.display="block";
        } else if ((scrollTops) > KRTop-KRHeight/2+30 && scrollTops < KRTop+KRHeight/2+100){
            mp_bg.className="";
            mp_bg.classList.add("point_area");
            mp_bg.classList.add("office5");
            mp_bg.style.top=scrollTops.toString()+"px";
            mp_bg.style.display="block";
        } else if ((scrollTops) > HKTop-HKHeight/2+30 && scrollTops < HKTop+HKHeight/2+100){
            mp_bg.className="";
            mp_bg.classList.add("point_area");
            mp_bg.classList.add("office6");
            mp_bg.style.top=scrollTops.toString()+"px";
            mp_bg.style.display="block";
        } else {
            mp_bg.style.display="none";
        }
    }
}
