
// Hero區塊滾動
const $body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body'),
      $section = $('.rm');
var numOfPages = $section.length - 1, //取得section的數量
    curPage = 0, //初始頁
    scrollLock = false;
function scrollPage() {
  //滑鼠滾動
  $(document).on("mousewheel DOMMouseScroll", function(e) {
    if (scrollLock) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0)
      navigateUp();
    else
      navigateDown();
  });

  //鍵盤上下鍵
  $(document).on("keydown", function(e) {
    if (scrollLock) return;
    if (e.which === 38)
      navigateUp();
    else if (e.which === 40)
      navigateDown();
  });

  //手機版滑動
  var startx, starty;
    //获得角度
    function getAngle(angx, angy) {
        return Math.atan2(angy, angx) * 180 / Math.PI;
    };
 
    //根据起点终点返回方向 1向上 2向下
    function getDirection(startx, starty, endx, endy) {
        var angx = endx - startx;
        var angy = endy - starty;
        var result = 0;
 
        var angle = getAngle(angx, angy);
        if (angle >= -135 && angle <= -15) {
            result = 1;
        } else if (angle > 15 && angle < 135) {
            result = 2;
        }
 
        return result;
    }
    //手指接触屏幕
    document.addEventListener("touchstart", function(e) {
        startx = e.touches[0].pageX;
        starty = e.touches[0].pageY;
    }, false);
    //手指离开屏幕
    document.addEventListener("touchend", function(e) {
        var endx, endy;
        endx = e.changedTouches[0].pageX;
        endy = e.changedTouches[0].pageY;
        var direction = getDirection(startx, starty, endx, endy);
        switch (direction) {
            case 1:
                navigateDown();
                break;
            case 2:
                navigateUp();
                break;
            default:
        }
    }, false);
}



// 上滾動
function navigateUp () {
  if (curPage === 0) return;
  curPage--;
  pagination();
};
// 下滾動
function navigateDown() {
  if (curPage === numOfPages) return;
  curPage++;
  pagination();
};
// 滾動至上/下區塊
function pagination() {
  scrollLock = true;
  $body.stop().animate({
    scrollTop: $section.eq(curPage).offset().top
  }, 800, 'swing', function(){
    scrollLock = false;
  });
};

$(function() {
  scrollPage();
});


function isMobile() {

  try{ document.createEvent("TouchEvent"); return true; }

  catch(e){ return false;}

}

var bodyClass = document.body.classList,
lastScrollY = 100;
window.addEventListener('scroll', function(){
	if(isMobile())
{
    // JavaScript here 
    // 當視窗寬度小於767px時執行
} else {
	  var st = this.scrollY;
	  // 判斷是向上捲動，而且捲軸超過 200px
	  if( st < lastScrollY) {
	    bodyClass.remove('hideUp');
	  }else{
	    bodyClass.add('hideUp');
	  }
	  lastScrollY = st;
    // JavaScript here
    // 當視窗寬度不小於767px時執行
}
});