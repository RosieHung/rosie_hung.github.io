
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
  $("body").on("touchstart", function(e) {
	e.preventDefault();
	startY = e.originalEvent.changedTouches[0].pageY;
	});
	$("body").on("touchmove", function(e) {
	e.preventDefault();
	moveEndY = e.originalEvent.changedTouches[0].pageY,
	Y = moveEndY - startY;
	if ( Y > 0) {
	navigateUp();
	}
	else if ( Y < 0 ) {
	 navigateDown();
	}
	});
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