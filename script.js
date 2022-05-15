
const swiperMain = new Swiper('.swiper-main', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
//loop:true,
    // And if we need scrollbar

});
let end = document.querySelector(".end");

let modal = document.querySelector(".modal");
let slideMain = document.querySelectorAll(".slide-main-body");
let step=0;
let modalSwiper = document.querySelector(".gallery-thumbs");
let modalSlide =modalSwiper.querySelectorAll(".swiper-slide");
slideMain.forEach((el)=>{

    //console.log(step);
    el.addEventListener("click",()=>{
        step = el.getAttribute('data-type');

        galleryTop.activeIndex=step;
        galleryThumbs.activeIndex=step;
        console.log( galleryThumbs.activeIndex=step);
        galleryTop.slideTo(galleryThumbs.activeIndex-1);
        galleryThumbs.slideTo(galleryTop.activeIndex);
        modal.classList.remove("modal-close");
        end.classList.remove("modal-close");
        //console.log(el);
        end.addEventListener("click",()=>{
            swiperMain.slideTo(galleryTop.activeIndex)
            end.classList.add("modal-close");
            modal.classList.add("modal-close");
        })
    })
})






var galleryThumbs = new Swiper(".gallery-thumbs", {
        centeredSlides: true,

        centeredSlidesBounds: true,
        direction: "horizontal",
        spaceBetween: 10,
        slidesPerView: 3,
        freeMode: false,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        watchOverflow: true,
        breakpoints: {
            480: {
                direction: "vertical",
                slidesPerView: 3
            }
        }
    });
    var galleryTop = new Swiper(".gallery-top", {
        direction: "horizontal",
        spaceBetween: 10,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        thumbs: {
            swiper: galleryThumbs
        }
    });
    /*
console.log(step);
galleryTop.activeIndex=step;
galleryThumbs.activeIndex=step;
    galleryTop.on("slideChangeTransitionStart", function () {
        galleryThumbs.slideTo(galleryTop.activeIndex);
    });
    galleryThumbs.on("transitionStart", function () {
        galleryTop.slideTo(galleryThumbs.activeIndex);
    });
*/