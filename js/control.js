// JavaScript Document
$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 4,                // số sản phẩm hiển thị cùng lúc
    loop: true,               // chạy vòng lặp vô tận
    margin: 20,               // khoảng cách giữa các sản phẩm
    nav: true,                // hiện nút chuyển hướng (← →)
    dots: false,              // ẩn dấu chấm bên dưới
    navText: ["<",">"],       // ký tự nút điều hướng
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:4
      }
    }
  });
});