// =========================
// Ensure only one audio plays at a time
// =========================
document.addEventListener("DOMContentLoaded", () => {
  const audioPlayers = document.querySelectorAll("audio");

  audioPlayers.forEach(player => {
    player.addEventListener("play", () => {
      // Pause all other players
      audioPlayers.forEach(other => {
        if (other !== player) {
          other.pause();
        }
      });
    });
  });
});

// =========================
// Smooth scroll for internal links
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
