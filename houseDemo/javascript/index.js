$(document).ready(function () {
  let picNum = 0; //存放图片数量
  // 存放图片数组
  let picArr = [
    "./image/banner1.jpg",
    "./image/banner2.jpg",
    "./image/banner3.jpg"
  ];
  // 第一次调用play方法
  // play();
  $(".banner").css({
    "background-image": "url(./image/banner1.jpg)"
  });
  //   定时器控制轮播变换时间
  var Timer;
  Timer = setInterval(play, 5000);

  function play() {
    var myDate = new Date()
    console.log(myDate)
    if (picNum == picArr.length - 1) {
      picNum = 0;
      $(".banner").css("opacity", "1");
    } else {
      picNum++
      $(".banner").css("opacity", "1");
    }
    $(".banner").css("background-image", "url(" + picArr[picNum] + ")", );
    //判断图片底部小圆点/小方条与对应图片的颜色变换
    $("#bannerBox ul li").css("background-color", "white");
    $("#bannerBox ul li").eq(picNum).css("background-color", "orangered");
  }

  //  循环添加轮播图下方对应的小圆点/小方条
  $("#bannerBox").append('<ul></ul>');
  $("#bannerBox ul").css({
    "width": "100%",
    "height": "1em",
    "position": "absolute",
    "bottom": "1em",
    "text-align": "center",
    "list-style": "none"
  });
  for (let i = 0; i < picArr.length; i++) {
    $("#bannerBox ul").append("<li></li>");
    $("#bannerBox ul li").css({
      "width": "2.5em",
      "height": "0.4em",
      "display": "inline-block",
      "background": "#ffffff",
      "margin-left": "1em"
    })
  }
  //  设置默认小方条背景色
  $("#bannerBox ul li").eq(0).css("background", "orangered");
  // 点击小方条显示对应图片
  $("#bannerBox ul li").click(function () {
    clearInterval(Timer);
    $(this).index();
    picNum = $(this).index();
    picNum--;
    play();
    Timer=setInterval(play,5000);
  })
});


// // 滚动条监听事件---返回顶层
$(document).ready(function () {
  $(window).scroll(function () {
    var scrollTopValue = $(window).scrollTop();
    scrollTopValue > 400 ? $(".back").fadeIn(500) : $(".back").fadeOut(500);
  });

  $(".back").click(function () {
    $("bocy,html").animate({
      scrollTop: 0
    }, 1000);
  });
});


//百度地图API功能------------地图不能放在onload加载事件里，否则地图接口无法完整使用
function loadJScript() {
  var script = document.createElement("script");
  script.type = "text/javascript";
  script.src = "http://api.map.baidu.com/api?v=2.0&ak=5Bc45KXm3jxWRZNWNQTaD8sitxBQcQgY&callback=init";
  document.body.appendChild(script);
}

function init() {
  var map = new BMap.Map("allmap"); // 创建Map实例
  var point = new BMap.Point(116.404, 39.915); // 创建点坐标
  map.centerAndZoom(point, 15);
  map.enableScrollWheelZoom(); //启用滚轮放大缩小
}
window.onload = loadJScript; //异步加载地图