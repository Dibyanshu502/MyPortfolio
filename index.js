
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
});


//Parallelax effect for sections
  window.addEventListener('scroll', () => {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    parallaxSections.forEach((section, index) => {
      const speed = 0.1 + (index * 0.05); // Different speed per section
      const offset = window.scrollY * speed;
      section.style.transform = `translateY(${offset}px)`;
    });
  });