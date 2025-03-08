// Initialize AOS (Animate On Scroll)
AOS.init({
  duration: 1000, // Animation duration in milliseconds
  once: true, // Animations trigger only once
  easing: "ease-in-out", // Smooth easing for animations
});

// Smooth Scrolling for Navigation Links with Active State
document.querySelectorAll(".nav-link").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove active class from all links
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.remove("active");
    });

    // Add active class to the clicked link
    this.classList.add("active");

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjust for fixed navbar height
        behavior: "smooth",
      });
    }
  });
});

// Update active navigation link based on scroll position
window.addEventListener("scroll", () => {
  const fromTop = window.scrollY + 70; // Offset for navbar
  document.querySelectorAll(".section").forEach((section) => {
    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      const id = section.getAttribute("id");
      document.querySelectorAll(".nav-link").forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Down Arrow Button Functionality
document.querySelectorAll(".down-arrow").forEach((button) => {
  button.addEventListener("click", () => {
    const nextSectionId = button.getAttribute("data-next-section");
    const nextSection = document.getElementById(nextSectionId);
    if (nextSection) {
      window.scrollTo({
        top: nextSection.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Back to Top Button
const backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTop.style.display = "flex"; // Show button after scrolling 300px
  } else {
    backToTop.style.display = "none"; // Hide button at top
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Explore Buttons Functionality (e.g., Training/Internship Details)
document.querySelectorAll(".explore-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const targetSection = document.getElementById(targetId);
    const mainSectionId = button.closest(".section").id;
    const mainSection = document.getElementById(mainSectionId);

    if (targetSection && mainSection) {
      mainSection.style.display = "none"; // Hide main section
      targetSection.style.display = "block"; // Show detail section
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Close Buttons Functionality (Return to Main Section)
document.querySelectorAll(".close-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const mainSectionId = button.getAttribute("data-target");
    const mainSection = document.getElementById(mainSectionId);
    const detailSection = button.closest(".detail-section");

    if (mainSection && detailSection) {
      detailSection.style.display = "none"; // Hide detail section
      mainSection.style.display = "block"; // Show main section
      window.scrollTo({
        top: mainSection.offsetTop - 70,
        behavior: "smooth",
      });
    }
  });
});

// Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thank you for contacting us! We will get back to you soon.");
  this.reset(); // Reset form fields
});

// Initialize Swiper Sliders
// Home Slider
const homeSwiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000, // 5-second delay between slides
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Workshop Slider
const workshopSwiper = new Swiper(".workshopSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
});

// Success Stories Slider
const successSwiper = new Swiper(".successSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  },
});
