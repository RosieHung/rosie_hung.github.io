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

