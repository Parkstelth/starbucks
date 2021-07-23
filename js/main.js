const searchEl = document.querySelector(".search")
const searchinputEl = searchEl.querySelector("input")

searchEl.addEventListener("click", function () {
  searchinputEl.focus()
})

searchinputEl.addEventListener("focus", function () {
  searchEl.classList.add("focused")
  searchinputEl.setAttribute("placeholder", "통합검색")
})

searchinputEl.addEventListener("blur", function () {
  searchEl.classList.remove("focused")
  searchinputEl.setAttribute("placeholder", "")
})

const badgeEl = document.querySelector("header .badges")
const scrollEl = document.querySelector("body .scroll")
// console.log(scrollEl)
window.addEventListener("scroll", _.throttle(function () {
  if (scrollY > 500) {
    gsap.to(badgeEl, .6, {
        opacity: 0,
        display: "none"
      }),
      gsap.to(scrollEl, .1, {
        x: 0
      })
  } else {
    gsap.to(badgeEl, .6, {
        opacity: 1,
        display: "block"
      }),
      gsap.to(scrollEl, .1, {
        x: 68
      })
  }
}, 300))

scrollEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  })
});

const fadeinEls = document.querySelectorAll(".visual .fade-in")

fadeinEls.forEach(function (fadeinEl, index) {
  gsap.to(fadeinEl, 1, {
    delay: (index + 1) * .7,
    opacity: 1
  })
})

new Swiper(".notice-line .swiper-container", {
  direction: 'vertical',
  loop: true,
  autoplay: true
})

new Swiper(".promotion .swiper-container", {
  slidesPerView: 3,
  loop: true,
  // autoplay:true,
  centeredSlides: true,
  spaceBetween: 10,
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },

  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})

const toggleBtnEl = document.querySelector(".toggle-promotion")
const promotionEl = document.querySelector(".promotion")
let isHide = false

toggleBtnEl.addEventListener("click", function () {
  isHide = !isHide;
  if (isHide) {
    promotionEl.classList.add("hide")
  } else {
    promotionEl.classList.remove("hide")
  }
})

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(select, delay, size) {

  gsap.to(select, random(1.5, 2.5), {
    y: size,
    repeat: -1,
    yoyo: true,
    ease: Power1.easeInOut,
    delay: random(0, delay)
  })
}

floatingObject('.floating1', .5, 15);
floatingObject('.floating2', 1, 15);
floatingObject('.floating3', 1.5, 15);

const spyEls = document.querySelectorAll('section.scroll-spy')
// console.log(spyEls)

spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl,
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});

new Swiper(".awards .swiper-container", {
  slidesPerView: 5,
  loop: true,
  autoplay: true,
  centeredSlides: true,
  spaceBetween: 30,

  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
})

const thisYear = document.querySelector('.this-year')
// console.log(thisYear.textContent)
thisYear.textContent = new Date().getFullYear()




// 상품이미지 스크롤 내릴시 옆으로 나왔다가 사라지기 직접작성해보기
// const seasonProductEl =document.querySelector(".season-product .product")

// window.addEventListener("scroll", _.throttle(function(){
//   // console.log(sc)
//   if(scrollY >= 1000){
//     gsap.to(seasonProductEl, 1 ,{opacity:1,x:0})
//   }
//   else{
//     gsap.to(seasonProductEl, 1 ,{opacity:0,x:-100})
//   }


// },300))