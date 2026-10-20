// Menú móvil
const b=document.getElementById('burger'),m=document.getElementById('menu');
b.onclick=()=>b.setAttribute('aria-expanded',m.classList.toggle('open'));
m.onclick=e=>{if(e.target.tagName=='A'){m.classList.remove('open');b.setAttribute('aria-expanded',false)}};
