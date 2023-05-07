let typed = new Typed(".text" ,{

    strings: ["Frontend Developer", "Web Designer","Content Creator"],
    typeSpeed: 50,
    backSpeed: 80,
    backDelay: 1500,
    loop: true

});

let burgerMenu = document.querySelector('.burger-menu');
let nav = document.querySelector('.navbar');

burgerMenu.addEventListener('click', () => {
    nav.classList.toggle('mobile-menu');
  });