// JavaScript

const items = document.querySelectorAll('.img-item');

// console.log(items);
// console.log(items.length);

// for文
for(let i = 0; i < items.length; i++){

  const keyframes = {
    opacity: [0, 1],
    translate: ['0 50px', 0],
    filter: ['blur(10px)', 'blur(0)'],
  };
  
  const options = {
    duration: 600,
    delay: i * 400,
    fill: 'forwards',
  };

  items[i].animate(keyframes, options);
}

// forEach文
// items.forEach((item, i) => {

//   const keyframes = {
//     opacity: [0, 1],
//     translate: ['0 50px', 0],
//     filter: ['blur(10px)', 'blur(0)'],
//   };
  
//   const options = {
//     duration: 600,
//     delay: i * 400,
//     fill: 'forwards',
//   };

//   item.animate(keyframes, options);
// });
//スクロール
const show = (entries) => {
  const keyframes = {
    opacity: [0, 1],
    translate: ['200px 0',0]
  }
  entries[0].target.animate(keyframes,600);
}

const observer = new IntersectionObserver(show);
observer.observe(document.querySelector('#img01'));

const show2 = (entries) => {
  const keyframes = {
    opacity: [0, 1],
    translate: ['200px 0',0]
  }
  entries[0].target.animate(keyframes,600);
}

const observer2 = new IntersectionObserver(show2);
observer2.observe(document.querySelector('#img02'));

const show3 = (entries) => {
  const keyframes = {
    opacity: [0, 1],
    translate: ['200px 0',0]
  }
  entries[0].target.animate(keyframes,600);
}

const observer3 = new IntersectionObserver(show3);
observer3.observe(document.querySelector('#img03'));