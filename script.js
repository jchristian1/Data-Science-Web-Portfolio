// =====================================================================
// DOCUMENT READY FUNCTION
// =====================================================================
document.addEventListener("DOMContentLoaded", function () {
  // -------------------------------
  // PRELOADER - Fade Out on Load
  // -------------------------------
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 500);
  }, 1000);

  // -------------------------------
  // MOBILE NAVIGATION TOGGLE
  // -------------------------------
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  // -------------------------------
  // PARALLAX EFFECT VIA SCROLL EVENT
  // -------------------------------
  window.addEventListener("scroll", () => {
    const parallaxSections = document.querySelectorAll(".parallax-section");
    parallaxSections.forEach((section) => {
      const bg = section.querySelector(".parallax-bg");
      if (bg) {
        // More pronounced parallax: adjust translateY based on scroll and section offset
        const speed = 0.5; // Increase speed factor for more movement
        const offset = window.pageYOffset - section.offsetTop;
        bg.style.transform = `translateY(${offset * speed}px)`;
      }
    });
  });

  // -------------------------------
  // SMOOTH SCROLL FOR INTERNAL LINKS (Fallback)
  // -------------------------------
  const smoothLinks = document.querySelectorAll('a[href^="#"]');
  smoothLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      let target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // -------------------------------
  // HERO SLIDER FUNCTIONALITY
  // -------------------------------
  const slides = document.querySelectorAll(".hero-slider .slide");
  let currentSlide = 0;
  const slideInterval = setInterval(nextSlide, 5000);
  
  function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add("active");
  }

  // -------------------------------
  // CONTACT FORM SUBMISSION (SIMULATED)
  // -------------------------------
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const formStatus = document.getElementById("form-status");
      formStatus.style.color = "green";
      formStatus.textContent = "Message sent successfully!";
      // Reset form after submission
      contactForm.reset();
      setTimeout(() => {
        formStatus.textContent = "";
      }, 5000);
    });
  }

  // -------------------------------
  // OPTIONAL: Intersection Observer for Animations
  // -------------------------------
  const animateOnScroll = document.querySelectorAll(".section-content");
  const observerOptions = {
    root: null,
    threshold: 0.2,
  };

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        obs.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animateOnScroll.forEach(section => {
    observer.observe(section);
  });
});
