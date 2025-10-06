//.....................header...............//
let header = document.querySelector("header");
let initialScroll = 0;
window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;
  // console.log(currentScroll);
  if (currentScroll > initialScroll) {
    header.classList.add("header-active");
  } else if (currentScroll === 0) {
    header.style.backgroundColor = "transparent";
  } else {
    header.classList.remove("header-active");
    header.style.backgroundColor = "#2c2c2c";
  }
  initialScroll = currentScroll <= 0 ? 0 : currentScroll;
});

//..................header-mob-btn-slide-top..................//
let mobileOffcanvasBtn = document.querySelector(".hamburger");
let mobileOffcanvas = document.querySelector(".mobile-offcanvas");
console.log(mobileOffcanvasBtn);
let bodyOverlay = document.querySelector("body");

mobileOffcanvasBtn.addEventListener("click", () => {
  mobileOffcanvas.classList.toggle("mobile-offcanvas-active");
  bodyOverlay.classList.toggle("body-overlay");
});
//.................................//

let heroText = document.querySelector(".hero-text");

window.addEventListener("scroll", () => {
  if (window.innerWidth > 756) {
    let scrollValue = window.scrollY;
    let y = Math.min(scrollValue * 0.3, 100); // max 100px shift
    heroText.style.transform = `translateY(${y}px)`;
  }
});

//..................hero product move...............//
const heroSectionArea = document.querySelector(".section-hero");
const heroProduct = document.querySelector(".hero-product");

heroSectionArea.addEventListener("mousemove", (e) => {
  let sectionFullArea = heroSectionArea.getBoundingClientRect();
  // console.log(sectionFullArea);
  let mouseX = e.clientX - sectionFullArea.left;

  // Calculate normalized position (0 to 1) within container
  let normalizeX = mouseX / sectionFullArea.width;
  // console.log(normalizeX);

  let maxMovement = 200;
  let translateX = normalizeX * maxMovement;

  heroProduct.style.transform = `translateX(${translateX}px)`;
});

//..............product splide...............//

var splide = new Splide(".product-splide", {
  // type: "loop",
  perPage: 1,
  // focus: "center",
  rewind: true,
  autoplay: true,
  interval: 3500,
  pauseOnHover: false,
  height: "100%",
  arrows: true,
  pagination: false,
  gap: "1.5rem",
  easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
});

splide.mount();

//.......................cta img box.............//
let ctaGridBox = document.querySelector(".cta-grid-box");
let ctaImgBox = document.querySelector(".cta-grid-box .mdl-row .image-box");
// console.log(ctaImgBox);

let ctaBoxObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        ctaImgBox.classList.add("img-box-active");
      }
    });
  },
  {
    threshold: 0.3,
  }
);

ctaBoxObserver.observe(ctaGridBox);

//.................video play one time................//
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("singlePlayVideo");

  // IntersectionObserver to detect when the video comes into the viewport
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasPlayed) {
          playVideo();
        }
      });
    },
    {
      threshold: 0.5, // Video must be 50% in view to start playing
    }
  );

  // Start observing the video
  observer.observe(video);
});

//.......................counter.......................//

document.addEventListener("DOMContentLoaded", () => {
  let speed = 2000;
  let animateNumber = (counter) => {
    const target = +counter.getAttribute("data-count");
    const suffix = counter.getAttribute("data-suffix") || "";

    let current = 0;

    const increment = target / (speed / 50);

    const updateCount = () => {
      current += increment;

      if (current >= target) {
        counter.innerHTML = target + suffix;
      } else {
        counter.innerHTML = Math.floor(current);
        setTimeout(updateCount, 50);
      }
    };
    updateCount();
  };

  let counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateNumber(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  document.querySelectorAll(".data-counter").forEach((counter) => {
    counterObserver.observe(counter);
  });
});

//..............marquee..............//
$(document).ready(function () {
  $(".marquee-slide").marquee({
    duration: 9000,
    gap: 50,
    delayBeforeStart: 0,
    direction: "left",
    duplicated: true,
    pauseOnHover: true,
  });
});

//................AOS...................//.

const sr = ScrollReveal({
  duration: 1500,
  distance: "60px",
  easing: "cubic-bezier(0.22, 1, 0.36, 1)",
  opacity: 0, // fade in from
  scale: 0.8,
  viewFactor: 0.2, // start when 15% visible
  reset: false,
  mobile: true,
});

sr.reveal(".hero-main-text-slide", {
  origin: "bottom",
  delay: 200,
});

sr.reveal(".hero-p-slide-up", {
  origin: "bottom",
  delay: 300,
});

sr.reveal(".hero-btn-slide", {
  origin: "bottom",
  delay: 400,
});
sr.reveal(".client-box-1", {
  origin: "left",
  delay: 300,
});
sr.reveal(".client-box-2", {
  origin: "bottom",
  delay: 300,
});
sr.reveal(".client-box-3", {
  origin: "right",
  delay: 300,
});
sr.reveal(".about-text", {
  origin: "left",
  delay: 300,
});
sr.reveal(".about-btn", {
  origin: "left",
  delay: 400,
});
sr.reveal(".point-1", {
  origin: "bottom",
  delay: 400,
});
sr.reveal(".point-2", {
  origin: "bottom",
  delay: 500,
});
sr.reveal(".point-3", {
  origin: "bottom",
  delay: 600,
});
sr.reveal(".about-img", {
  opacity: 0,
  delay: 400,
});
sr.reveal(".product-intro", {
  scale: 0.8,
  opacity: 0,
  delay: 500,
});
sr.reveal(".product-box.top", {
  scale: 0.8,
  origin: "bottom",
  delay: 400,
});
sr.reveal("section-products .product-btn", {
  scale: 0.8,
  origin: "bottom",
  delay: 700,
});
sr.reveal(".product-box .img-1", {
  origin: "left",
  delay: 400,
});
sr.reveal(".product-box .img-2", {
  origin: "left",
  delay: 600,
});
sr.reveal(".product-box .img-3", {
  delay: 300,
});
sr.reveal(".section-intro", {
  origin: "top",
  delay: 300,
});
sr.reveal(".section-intro", {
  origin: "top",
  scale: 2,
  delay: 300,
});
sr.reveal(".feature-box.top-grid .box-2", {
  origin: "bottom",
  scale: 0.5,
  delay: 700,
});
sr.reveal(".feature-box.top-grid .box-3", {
  origin: "bottom",
  scale: 0.5,
  delay: 700,
});
sr.reveal(".feature-box.btm-grid .box-4", {
  origin: "top",
  distance: "200px",
  scale: 0.5,
  delay: 400,
});
sr.reveal(".feature-box.btm-grid .box-5", {
  origin: "top",
  distance: "200px",
  scale: 0.5,
  delay: 600,
});
sr.reveal(".feature-box.btm-grid .box-6", {
  origin: "top",
  distance: "200px",
  scale: 0.5,
  delay: 800,
});
sr.reveal(".section-choice-discount-img", {
  origin: "top",
  scale: 2,
  delay: 400,
});
sr.reveal(".service-right-col .box-1", {
  origin: "left",
  scale: 0.3,
  delay: 500,
});
sr.reveal(".service-right-col .box-2", {
  origin: "left",
  scale: 0.3,
  delay: 600,
});
sr.reveal(".service-right-col .box-3", {
  origin: "left",
  scale: 0.3,
  delay: 700,
});
sr.reveal(".counter-btn-1", {
  origin: "bottom",
  delay: 500,
});
sr.reveal(".counter-btn-2", {
  origin: "bottom",
  delay: 500,
});
sr.reveal(".data-counter", {
  delay: 400,
});
sr.reveal(".app-store-img-1", {
  origin: "right",
  delay: 400,
});
sr.reveal(".app-store-img-2", {
  origin: "left",
  delay: 400,
});
sr.reveal(".cta-two-intro", {
  delay: 400,
});
sr.reveal(".brands .img-1", {
  opacity: 1,
  origin: "bottom",
  delay: 400,
});
sr.reveal(".brands .img-2", {
  opacity: 1,
  origin: "bottom",
  delay: 500,
});
sr.reveal(".brands .img-3", {
  opacity: 1,
  origin: "bottom",
  delay: 600,
});
sr.reveal(".footer-top", {
  opacity: 0,
  origin: "left",
  distance: "200px",
  delay: 600,
});
sr.reveal(".footer-btm", {
  opacity: 0,
  origin: "right",
  distance: "200px",
  delay: 600,
});

//............scroll top...........//
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 280) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});
scrollTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
