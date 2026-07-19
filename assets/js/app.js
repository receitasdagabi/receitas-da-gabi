
const menu=document.querySelector('.menu');if(menu){menu.addEventListener('click',()=>{const nav=document.querySelector('.nav');nav.classList.toggle('open');menu.setAttribute('aria-expanded',nav.classList.contains('open'))})}
document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear());
const search=document.querySelector('#recipeSearch'), cards=[...document.querySelectorAll('.recipe-card')], chips=[...document.querySelectorAll('.chip')];let active='Todas';
function filter(){const q=(search?.value||'').toLowerCase().trim();let n=0;cards.forEach(c=>{const okCat=active==='Todas'||c.dataset.category===active;const okQ=(c.dataset.search||'').includes(q);c.classList.toggle('hidden',!(okCat&&okQ));if(okCat&&okQ)n++});const count=document.querySelector('#resultCount');if(count)count.textContent=`${n} receita${n!==1?'s':''}`;}
if(search)search.addEventListener('input',filter);
chips.forEach(ch=>ch.addEventListener('click',()=>{active=ch.dataset.category;chips.forEach(x=>x.classList.toggle('active',x===ch));filter()}));
document.querySelectorAll('.print-btn').forEach(b=>b.addEventListener('click',()=>window.print()));
