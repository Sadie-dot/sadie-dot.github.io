/* Sticky header behaviour (see .is-compact, .is-hidden and .nav a[aria-current] in styles.css)
   1. Compact the header once the page has scrolled.
   2. On phones only: hide the header while scrolling down; bring it back on the first scroll up, at the top, or when it gains focus.
   3. On the home page, mark the Work link current once the #work section reaches the header. */
(function(){
  var header=document.querySelector('.site-header');if(!header)return;
  var work=document.getElementById('work');
  var workLink=document.querySelector('.nav a[href$="#work"]');
  var spy=work&&workLink&&!workLink.hasAttribute('aria-current');
  var phone=window.matchMedia('(max-width:767px)');
  var lastY=window.scrollY,ticking=false;
  function update(){
    var y=window.scrollY,h=header.offsetHeight;
    header.classList.toggle('is-compact',y>24);
    if(!phone.matches||y<=h){header.classList.remove('is-hidden');}
    else if(y>lastY+4){header.classList.add('is-hidden');}
    else if(y<lastY-4){header.classList.remove('is-hidden');}
    lastY=y;
    if(spy){
      var inWork=work.getBoundingClientRect().top<=h;
      if(inWork)workLink.setAttribute('aria-current','true');else workLink.removeAttribute('aria-current');
    }
    ticking=false;
  }
  window.addEventListener('scroll',function(){if(!ticking){requestAnimationFrame(update);ticking=true;}},{passive:true});
  window.addEventListener('resize',update);
  header.addEventListener('focusin',function(){header.classList.remove('is-hidden');});
  update();
})();
