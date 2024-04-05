const cursor = document.querySelector('.cursor');
const over = document.querySelectorAll('.over');
let cursorInfo = cursor.getBoundingClientRect();

document.addEventListener('mousemove', (e) => {
  let x = e.pageX - cursorInfo.width / 2;
  let y = e.pageY - cursorInfo.height / 2;
  cursor.style.cssText = `transform: translate(${x}px, ${y}px);`;

  // 기준점을 가운데로 설정한 값
  let imgX = window.innerWidth / 2 - x;
  let imgY = window.innerHeight / 2 - y;
  const img = document.querySelector('.mainImg img');
  img.style.cssText = `transform: translate(${imgX / 30}px, ${imgY / 20}px);`;
});

over.forEach((overArea) => {
  overArea.addEventListener('mouseenter', () => {
    cursor.classList.add('on');
    cursorInfo = cursor.getBoundingClientRect();
  });
  overArea.addEventListener('mouseleave', () => {
    cursor.classList.remove('on');
    cursorInfo = cursor.getBoundingClientRect();
  });
});
