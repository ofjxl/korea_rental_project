const main_s = new Swiper('.main-slide',{
    navigation:{
        nextEl:".main-slide .swiper-button-next",
        prevEl:".main-slide .swiper-button-prev",
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