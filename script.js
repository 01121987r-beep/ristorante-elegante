
const links=document.querySelectorAll('nav a');
links.forEach(link=>{
link.addEventListener('click',e=>{
const id=link.getAttribute('href');
if(id.startsWith('#')){
e.preventDefault();
document.querySelector(id).scrollIntoView({behavior:'smooth'});
}
});
});

const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');

if(track){

const scrollAmount = 450;

nextBtn.addEventListener('click',()=>{
track.scrollBy({
left:scrollAmount,
behavior:'smooth'
});
});

prevBtn.addEventListener('click',()=>{
track.scrollBy({
left:-scrollAmount,
behavior:'smooth'
});
});

}