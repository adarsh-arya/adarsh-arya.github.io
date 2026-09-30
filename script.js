const progress=document.getElementById('progress');
const nav=document.getElementById('nav');
const menu=document.getElementById('menu');
const navLinks=document.getElementById('navLinks');
function onScroll(){const h=document.documentElement.scrollHeight-window.innerHeight;progress.style.width=(window.scrollY/Math.max(h,1)*100)+'%';nav.classList.toggle('scrolled',window.scrollY>20)}
window.addEventListener('scroll',onScroll,{passive:true});onScroll();
menu?.addEventListener('click',()=>{navLinks.classList.toggle('open');});
navLinks?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');observer.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
