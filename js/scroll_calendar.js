let cal_svg = d3.select(".bar");
let offset_x = 10, offset_y = 10, isdown = false;

cal_svg.select(".img_wrap").call(d3.drag()
  .on('start',  // 拖动开始，触发一次
    function () {
      offset_x = event.pageX - this.parentNode.offsetLeft;
      isdown = true;
    })

  .on('drag', function () {
    if (isdown) {
      leftpx = event.pageX - offset_x;
      if (leftpx < window.screen.width * 0.3) leftpx = window.screen.width * 0.3;
      else if (leftpx > window.screen.width * 0.58) leftpx = window.screen.width * 0.58;
      document.getElementById('calday').scrollLeft =
        (leftpx - window.screen.width * 0.3) / (window.screen.width * 0.28)
        * (document.getElementById('calday').scrollWidth - document.getElementById('calday').clientWidth);
      d3.select(".progress").style("left", leftpx + 'px');
    }
  })
  .on('end',
    function () { 
      isdown = false;
      let pxbase= document.getElementById('t1').clientWidth;
      let pybase= document.getElementById('t1').clientHeight;
      console.log(pxbase)
      let leftvec = [.45,1.65,2.25,3.60,4.65,5.80,7.5,8.75,9.9,10.95,10.65,10.80];
      let topvec = [.5,-0.7,-1.70,-2.70,-4.30,-3.45,-6.55,-11.85,-9.00,-10.20,-11.40,-12.70];
      for (let i = 1; i <= leftvec.length; i++) {
        let leftpx = (-1*document.getElementById('calday').scrollLeft/pxbase + leftvec[i-1])*100;
        let toppx = topvec[i-1]*100;
        let trans = "translate3d(" + leftpx+ "%,"+toppx+"%,0)";
        console.log(trans)
        d3.select("#t"+i).style("transform", trans);
      } }
  ))

