const goTop = document.querySelector('.goTop');

const hd = document.querySelector('header');
const nav = document.querySelector('header nav');
const box = document.querySelectorAll('main > .box');

goTop.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

window.addEventListener('scroll', (e) => {
  if (scrollY > 10) {
    goTop.classList.add('on');
    hd.classList.add('on');
  } else {
    goTop.classList.remove('on');
    hd.classList.remove('on');
  }

  box.forEach((box, idx) => {
    if (window.scrollY >= box.offsetTop) {
      nav.querySelector('a.on').classList.remove('on');
      nav.querySelector(`a:nth-of-type(${idx + 1})`).classList.add('on');
    }
  });
});

nav.addEventListener('click', (e) => {
  if (e.target.tagName === 'A') {
    e.preventDefault();
    const idx = [...nav.children].indexOf(e.target);
    const offsetTop = box[idx].offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }
});

box.forEach((item) => {
  item.addEventListener('wheel', (e) => {
    let delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
    let prevEl = item.previousElementSibling;
    let nextEl = item.nextElementSibling;
    let moveTop;

    // prevElm && prevElm.classList.contains('box')
    // 이전 요소가 존재하며 그리고 (&& and) 이전 요소는 .box를 갖고 있는 경우
    // 두 조건을 만족하는 경우에만 { 실행 영역 } 이 진행됨

    if (delta > 0) {
      if (prevEl && prevEl.classList.contains('box')) {
        moveTop = prevEl.offsetTop;
        console.log(moveTop);
        window.scrollTo({
          top: moveTop,
          // behavior: 'smooth',
        });
      }
    } else {
      if (nextEl && nextEl.classList.contains('box')) {
        moveTop = nextEl.offsetTop;
        console.log(moveTop);
        window.scrollTo({
          top: moveTop,
          // behavior: 'smooth',
        });
      }
    }
  });
});
