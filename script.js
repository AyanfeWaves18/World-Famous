// =========================
// DOM Ready
// =========================
document.addEventListener("DOMContentLoaded", () => {

  // =========================
  // Smooth scroll for internal links (#anchors)
  // =========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  <script>
    const menu =
      document.getElementById("mobile-menu");
      document.getElementById("hamburger").onclick = () {
        menu.classList.remove("open");
  </script>

  // =========================
  // Fade-in animation on scroll
  // =========================
  const faders = document.querySelectorAll(".fade-in");

  if ("IntersectionObserver" in window) {
    const appearOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    }, appearOptions);

    faders.forEach(fader => appearOnScroll.observe(fader));
  } else {
    // Fallback for old browsers (make all visible immediately)
    faders.forEach(fader => fader.classList.add("visible"));
  }
});
