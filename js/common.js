const hd = document.querySelector('header');
const hdInner = hd.querySelector('.inner');
const wrap = document.querySelector('.wrap');
// const nav = document.querySelector('header nav');
const box = document.querySelectorAll('main .box');
const ft = document.querySelector('footer');
const goTop = document.querySelector('.goTop');

let ham = document.createElement('div');
ham.classList.add('ham');
ham.innerHTML = '<span></span><span></span><span></span>';
hdInner.appendChild(ham);
ham.addEventListener('click', (e) => {
  const checkMenu = document.querySelector('.menu');
  if (checkMenu) {
    checkMenu.remove();
    hd.classList.remove('on');
    ham.classList.remove('active');
    document.body.style.overflow = 'auto';
    return;
  }

  const menu = document.createElement('nav');
  menu.classList.add('menu');
  menu.innerHTML =
    '<a href="#">intro</a><a href="#">introduce</a><a href="#">skills</a><a href="#">projects</a><a href="#">contact</a>';
  wrap.appendChild(menu);
  hd.classList.add('on');
  ham.classList.add('active');
  document.body.style.overflow = 'hidden';
});

goTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', (e) => {
  // let documentHeight = document.documentElement.scrollHeight;
  // let windowHeight = window.innerHeight;
  // let scrollY = window.scrollY || window.pageYOffset;

  if (scrollY > 10) {
    goTop.classList.add('on');
    hd.classList.add('on');
  } else {
    goTop.classList.remove('on');
    hd.classList.remove('on');
  }

  // if (scrollY + windowHeight >= documentHeight) {
  //   goTop.classList.remove('on');
  // }
});

ft.addEventListener('mouseenter', () => goTop.classList.remove('on'));
ft.addEventListener('mouseleave', () => goTop.classList.add('on'));

const cursor = document.createElement('div');
cursor.classList.add('cursor');
wrap.appendChild(cursor);
let cursorInfo = cursor.getBoundingClientRect();
document.addEventListener('mousemove', (e) => {
  let x = e.pageX - cursorInfo.width / 2;
  let y = e.pageY - cursorInfo.height / 2;
  cursor.classList.add('move');
  cursor.style.cssText = `transform: translate(${x}px, ${y}px);`;
});
document.addEventListener('click', (e) => {
  cursor.classList.add('effect');
  setTimeout(() => {
    cursor.classList.remove('effect');
  }, 300);
});
