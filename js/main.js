let burgerBtn = document.querySelector('.header-burger');
let headerMenu = document.querySelector('.burger-menu');
burgerBtn.addEventListener('click', function(){
  headerMenu.classList.toggle('active');
});
console.log(burgerBtn);