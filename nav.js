/* Sticky header behaviour (see .is-compact and .nav a[aria-current] in styles.css)
   1. Compact the header once the page has scrolled (desktop only).
   2. On the home page, mark the Work link current once the #work section reaches the header. */
(function(){
  var header=document.querySelector('.site-header');if(!header)return;
  var work=document.getElementById('work');
  var workLink=document.querySelector('.nav a[href$="#work"]');
  var spy=work&&workLink&&!workLink.hasAttribute('aria-current');
  var ticking=false;
  function update(){
    header.classList.toggle('is-compact',window.scrollY>24);
    if(spy){
      var inWork=work.getBoundingClientRect().top<=header.offsetHeight;
      if(inWork)workLink.setAttribute('aria-current','true');else workLink.removeAttribute('aria-current');
    }
    ticking=false;
  }
  window.addEventListener('scroll',function(){if(!ticking){requestAnimationFrame(update);ticking=true;}},{passive:true});
  window.addEventListener('resize',update);
  update();
})();
