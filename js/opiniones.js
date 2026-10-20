// Opiniones (guardadas solo en este navegador con localStorage)
const K='sd_opiniones',$=id=>document.getElementById(id);let D=[];
try{D=JSON.parse(localStorage.getItem(K))||[]}catch(e){}
const gs=n=>'★'.repeat(n)+'☆'.repeat(5-n),sv=()=>{try{localStorage.setItem(K,JSON.stringify(D))}catch(e){}};
function draw(){const L=$('lista');L.textContent='';
$('resumen').textContent=D.length?'':'Aún no hay opiniones. ¡Sé la primera persona en escribir una!';
if(D.length){const a=D.reduce((s,o)=>s+o.r,0)/D.length;$('resumen').innerHTML='<b>'+gs(Math.round(a))+'</b> '+a.toFixed(1).replace('.',',')+' de 5 · '+D.length+(D.length==1?' opinión':' opiniones')}
D.forEach((o,i)=>{const li=document.createElement('li'),e=document.createElement('div'),p=document.createElement('p'),s=document.createElement('small'),x=document.createElement('button');
e.className='e';e.textContent=gs(o.r);e.setAttribute('aria-label',o.r+' de 5 estrellas');p.textContent=o.c;
s.textContent=o.n+' · '+new Date(o.f).toLocaleDateString('es-CO',{day:'numeric',month:'long',year:'numeric'})+' ';
x.textContent='Eliminar';x.onclick=()=>{D.splice(i,1);sv();draw()};s.append(x);li.append(e,p,s);L.append(li)})}
$('ops').onsubmit=e=>{e.preventDefault();const r=+e.target.elements.r.value,n=$('nom').value.trim(),c=$('com').value.trim(),m=$('omsg');
if(!r||!n||!c){m.textContent='Elige las estrellas y completa tu nombre y comentario.';return}
D.unshift({n,c,r,f:Date.now()});sv();draw();e.target.reset();m.textContent='¡Gracias por tu opinión!'};
draw();
