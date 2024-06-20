const main_s = new Swiper(".main-slide",{
    autoplay: {delay:3000},
    loop: true,
    navigation:{
        nextEl: ".rental .swiper-button-next",
        prevEl: ".rental .swiper-button-prev",
    },
})
const product_s = new Swiper(".product-slide",{
    slidesPerView:5,
    spaceBetween:80,
    navigation:{
        nextEl: ".product-slide .swiper-button-next",
        prevEl: ".product-slide .swiper-button-prev",
    },
})