(function(){
  var d=document;
  var t=d.getElementById('mob-toggle'),dr=d.getElementById('mob-drawer'),o=d.getElementById('mob-overlay'),c=d.getElementById('drawer-close');
  function openM(){dr.removeAttribute('hidden');o.classList.add('visible');t.setAttribute('aria-expanded','true');t.setAttribute('aria-label','Close navigation menu');d.documentElement.style.overflow='hidden';}
  function closeM(){dr.setAttribute('hidden','');o.classList.remove('visible');t.setAttribute('aria-expanded','false');t.setAttribute('aria-label','Open navigation menu');d.documentElement.style.overflow='';}
  if(t&&dr&&o){
    t.addEventListener('click',function(){if(t.getAttribute('aria-expanded')==='true'){closeM();}else{openM();}});
    if(c){c.addEventListener('click',closeM);}
    o.addEventListener('click',closeM);
    dr.querySelectorAll('a').forEach(function(a){a.addEventListener('click',closeM);});
    d.addEventListener('keydown',function(e){if(e.key==='Escape'){closeM();}});
    window.addEventListener('resize',function(){if(window.innerWidth>900){closeM();}});
  }
  d.querySelectorAll('.faq-q').forEach(function(b){
    var p=d.getElementById(b.getAttribute('aria-controls'));
    function setOpen(v){b.setAttribute('aria-expanded',v?'true':'false');if(p){p.style.maxHeight=v?p.scrollHeight+'px':'0px';}}
    b.addEventListener('click',function(){setOpen(b.getAttribute('aria-expanded')!=='true');});
  });
  window.addEventListener('resize',function(){d.querySelectorAll('.faq-q[aria-expanded="true"]').forEach(function(b){var p=d.getElementById(b.getAttribute('aria-controls'));if(p){p.style.maxHeight=p.scrollHeight+'px';}});});
})();
