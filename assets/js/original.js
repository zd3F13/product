// bodyの背景色を変更
// $(function () {
//   var p = Math.floor(Math.random() * 5);
//   function getClrTop() {
//     var clrArrTop = ["#bdc3c7", "#ee9ca7", "#2193b0", "#b92b27", "#373B44"];
//     var clrTop = clrArrTop[p];
//     return clrTop;
//   }
//   function getClrBtm() {
//     var clrArrBtm = ["#2c3e50", "#ffdde1", "#6dd5ed", "#1565C0", "#4286f4"];
//     var clrBtm = clrArrBtm[p];
//     return clrBtm;
//   }
//   var clrTop = getClrTop();
//   var clrBtm = getClrBtm();
//   $("body").css({"background": "linear-gradient(90deg, " + clrTop + ", " + clrBtm + ")"});
//   $("body").attr("class", "bg-clr__01");
// });

$(function() {
  function getClr() {
    var clrArr = ["#cd5c5c", "#8fbc8f", "#4682b4", "#f0e68c"];
    return clrArr[Math.floor(Math.random() * clrArr.length)];
  }
  function blackOrWhite (hexcolor) {
    var r = parseInt(hexcolor.substr(1, 2), 16);
    var g = parseInt(hexcolor.substr(3, 2), 16);
    var b = parseInt(hexcolor.substr(5, 2), 16);
    return ((((r * 299) + (g * 587) + (b * 114)) / 1000) < 128) ? "#fff" : "#212529";
  }
  var clrBg = getClr();
  var clr = blackOrWhite(clrBg);
  console.log(clrBg);
  console.log(clr);
  $("section").find("h2").css({"borderLeftColor": clrBg});
  $("aside").find("h2").css({"backgroundColor": clrBg});
  $("aside").find("h2").css({"color": clr});
  $("article").find("img").css({"backgroundColor": clrBg});
});

// ページの先頭へ戻るボタンを追加
$(function() {
  var topBtn = $("#backbtn");
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 420) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  topBtn.click(function () {
    $("body,html").animate({
      scrollTop: 0
    }, 380);
    return false;
  });
});

$(function(){
    var windowWidth = $(window).width();
    if (windowWidth < 768) {
      $("article:nth-of-type(2)").removeClass("fade");
      $("article:nth-of-type(2)").addClass("fadein");
    }
});
$(function(){
    $('.fade').each(function(){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
    });
});
$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 250){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});
