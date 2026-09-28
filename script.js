const root=document.documentElement;
const updateScroll=()=>{const max=document.documentElement.scrollHeight-window.innerHeight; const p=max?window.scrollY/max:0; root.style.setProperty('--scroll',p.toFixed(4));};
window.addEventListener('scroll',updateScroll,{passive:true}); updateScroll();

const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})},{threshold:.13,rootMargin:'0px 0px -40px'});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.getElementById('year').textContent=new Date().getFullYear();

const menu=document.querySelector('.menu');
const nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>{nav.classList.toggle('mobile-open');});
document.querySelectorAll('.nav nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('mobile-open')));

// Tiny sewing-machine style click feedback on primary actions.
document.querySelectorAll('.btn-primary,.floating-call').forEach(btn=>btn.addEventListener('click',()=>{document.body.classList.add('stitch-flash');setTimeout(()=>document.body.classList.remove('stitch-flash'),280)}));
