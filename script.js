
const menuToggle = document.querySelector('.menu-toggle');
const navWrap = document.querySelector('.nav');
const mobilePanel = document.getElementById('mobileMenu');

if (menuToggle && navWrap && mobilePanel) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navWrap.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  mobilePanel.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navWrap.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

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

if(nextBtn){
nextBtn.addEventListener('click',()=>{
track.scrollBy({
left:scrollAmount,
behavior:'smooth'
});
});
}

if(prevBtn){
prevBtn.addEventListener('click',()=>{
track.scrollBy({
left:-scrollAmount,
behavior:'smooth'
});
});
}

}
