document.addEventListener("DOMContentLoaded", () => {
  // Smooth scroll to sections
  const navLinks = document.querySelectorAll(".nav-links a");
  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
      document.querySelector(".nav-links").classList.remove("show");
    });
  });

  // Form submission confirmation
  const contactForm = document.querySelector(".contact-form");
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    alert("Thank you for reaching out! I'll get back to you soon.");
    contactForm.reset();
  });

  // Optional: add scroll animation trigger (basic fade-in)
  const fadeElements = document.querySelectorAll(".project-card, .contact-form");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });
  fadeElements.forEach(el => observer.observe(el));

  // Hamburger menu toggle
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.querySelector(".nav-links");
  
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});

