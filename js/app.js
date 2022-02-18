//Animação da seção about <Rotacionar a Classe "circle" conforme o Scroll>

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("circle");
    image.style.transform = "rotate(" + window.pageYOffset / 2 + "deg)";
}


// Animações da pagina conforme o Scroll

const debounce = function(func, wait, immediate) {
    let timeout;
    return function(...args) {
      const context = this;
      const later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };
  
  const target = document.querySelectorAll('[data-anime]');
  const animationClass = 'animate';
  
  function animeScroll() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4);
    target.forEach(function(element) {
      if((windowTop) > element.offsetTop) {
        element.classList.add(animationClass);
      } else {
        element.classList.remove(animationClass);
      }
    })
  }
  
  animeScroll();
  
  if(target.length) {
    window.addEventListener('scroll', debounce(function() {
      animeScroll();
    }, 200));
  }

  //----------------// 
  
  const cursor = document.querySelector(".cursor"),
  anchor = document.querySelectorAll("h2, h3"),
  link = document.querySelectorAll("button, a");

//   Cursor Personalizado


window.addEventListener("mousemove", (e) => {
  let x = e.pageX,
    y = e.pageY;

  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;
});

// efeito de foco nas tags selecionas

anchor.forEach((anc) => {
  anc.addEventListener("mouseover", () => {
        cursor.style.transform = "scale(4)";
        cursor.style.animationName = "borderAnim";
  });
  anc.addEventListener("mouseleave", () => {
    cursor.style.transform = "";
    cursor.style.animationName = "";
  });
});
link.forEach((anc) => {
    anc.addEventListener("mouseover", () => {
        cursor.style.transform = "scale(2)";
        cursor.style.animationName = "borderAnim";
    });
    anc.addEventListener("mouseleave", () => {
        cursor.style.transform = "";
        cursor.style.animationName = "";
    });
});

let splash = document.querySelector('.splash');
let logo =document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', ()=>{
    setTimeout(()=>{
        logoSpan.forEach((span, idx)=>{
           setTimeout(()=>{
               span.classList.add('active');
           }, (idx + 1) * 400) 
        });
        setTimeout(()=>{
            logoSpan.forEach((span, idx)=>{
                setTimeout(() => {
                    span.classList.remove('active')
                    span.classList.add('fade');
                }, (idx +15) * 100);
            })
        }, 2000);
        setTimeout(()=>{
            splash.style.top = '-100vh';
        }, 4000)
    })
})