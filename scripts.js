// Initialize AOS
AOS.init({
  duration: 1200,
  once: true,
  easing: "ease-in-out-cubic",
});

// GSAP Timeline for Hero Animation
gsap.from(".hero-content", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 0.5,
  ease: "power3.out",
});

// Navbar Scroll Effect
window.addEventListener("scroll", () => {
  const nav = document.getElementById("mainNav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Smooth Scroll with GSAP
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: targetElement.offsetTop - 70, autoKill: false },
      ease: "power2.inOut",
    });
  });
});

// Back to Top
const backToTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    gsap.to(backToTop, { duration: 0.5, opacity: 1, display: "block" });
  } else {
    gsap.to(backToTop, { duration: 0.5, opacity: 0, display: "none" });
  }
});

backToTop.addEventListener("click", () => {
  gsap.to(window, { duration: 1.5, scrollTo: 0, ease: "power2.inOut" });
});

// Swiper Initializations
const heroSwiper = new Swiper(".heroSwiper", {
  effect: "fade",
  autoplay: { delay: 5000, disableOnInteraction: false },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const workshopSwiper = new Swiper(".workshopSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

const successSwiper = new Swiper(".successSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    640: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

// Card Hover Animation
gsap.utils
  .toArray(".training-card, .placement-card, .workshop-card, .success-card")
  .forEach((card) => {
    card.addEventListener("mouseenter", () =>
      gsap.to(card, {
        scale: 1.05,
        boxShadow: "0 10px 30px rgba(0, 123, 255, 0.3)",
        duration: 0.5,
      })
    );
    card.addEventListener("mouseleave", () =>
      gsap.to(card, {
        scale: 1,
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        duration: 0.5,
      })
    );
  });

// Typing Animation for Hero Slider
const typingElements = document.querySelectorAll(".typing-text");
typingElements.forEach((element, index) => {
  const text = element.textContent;
  element.textContent = "";
  let charIndex = 0;

  function type() {
    if (charIndex < text.length) {
      element.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, 100);
    } else {
      setTimeout(() => {
        element.textContent = "";
        charIndex = 0;
        type();
      }, 2000); // Wait 2 seconds before restarting
    }
  }
  type();
});

// FAQ Animation with GSAP
document.querySelectorAll(".accordion-button").forEach((button) => {
  button.addEventListener("click", () => {
    const collapse = document.querySelector(
      button.getAttribute("data-bs-target")
    );
    if (collapse.classList.contains("show")) {
      gsap.to(collapse, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.in",
      });
    } else {
      gsap.from(collapse, {
        height: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  });
});

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  gsap.to("#contactForm", {
    scale: 0.95,
    duration: 0.2,
    yoyo: true,
    repeat: 1,
    onComplete: () => {
      alert("Message sent successfully! We will get back to you soon.");
      e.target.reset();
    },
  });
});
