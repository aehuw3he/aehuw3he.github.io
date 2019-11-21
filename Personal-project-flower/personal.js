var swiper = new Swiper('.swiper-container', {

  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
AOS.init();

var changeImgWidthLeft = document.querySelector("#changeImgWidthLeft")
var changeImgWidthRight = document.querySelector("#changeImgWidthRight")
var circleBtnOne = document.querySelector("#circleBtnOne")
var circleBtnTwo = document.querySelector("#circleBtnTwo")
var imgTransitionLeft =document.querySelector("#img-prodcut-overflow-L")
var imgTransitionRight =document.querySelector("#img-prodcut-overflow-R")
var insertBox = document.querySelector("#product-animate")

 circleBtnOne.onclick = function(){
  changeImgWidthLeft.classList.add("active")
  changeImgWidthRight.classList.add("widthTransition")
  imgTransitionRight.classList.add("transition")
}
circleBtnTwo.onclick = function(){
  changeImgWidthRight.classList.add("active")
  changeImgWidthLeft.classList.add("widthTransition")
  imgTransitionRight.classList.add("transition")
  imgTransitionLeft.classList.add("img-order")
  insertBox.innerHTML += `<div class="box" style="width: 50%; order:1"></div>`
}





// img_product_1.onclick = function(){
//   this.innerHTML=
// }


// $(".img-left").height($("#font-left").height())