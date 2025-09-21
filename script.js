// =========================
// Global Variables
// =========================
let audioElement = null;

// =========================
// Play Track Function
// =========================
function playTrack(title, artist, src, cover) {
  // Ensure audio element exists
  if (!audioElement) {
    audioElement = document.getElementById("audio");
  }

  if (audioElement) {
    // Update player UI
    document.getElementById("player-title").textContent = title;
    document.getElementById("player-artist").textContent = artist;
    document.getElementById("player-cover").src = cover;

    // Load and play audio
    audioElement.src = src;
    audioElement.load();   // 👈 important to refresh new track
    audioElement.play().catch(err => {
      console.log("Playback failed:", err);
    });
  }
}

// =========================
// Inject Player ONLY in music.html
// =========================
if (window.location.pathname.includes("music.html")) {
  window.addEventListener("DOMContentLoaded", () => {
    const playerContainer = document.createElement("div");
    playerContainer.id = "player-container";
    playerContainer.innerHTML = `
      <div id="player" style="
        position: relative; /* 👈 removed sticky */
        width: 100%;
        background: #111;
        color: #fff;
        display: flex;
        align-items: center;
        padding: 10px;
        margin-top: 20px;
        box-shadow: 0 -2px 10px rgba(0,0,0,0.5);
      ">
        <img id="player-cover" src="" alt="Cover" width="50" style="margin-right:10px; border-radius:4px;">
        <div style="flex:1">
          <h4 id="player-title" style="margin:0; font-size:16px;">No Track</h4>
          <p id="player-artist" style="margin:0; font-size:12px; color:#aaa;"></p>
        </div>
        <audio id="audio" controls style="max-width:300px;"></audio>
      </div>
    `;
    document.body.appendChild(playerContainer);

    // Initialize audioElement reference
    audioElement = document.getElementById("audio");
  });
}

// ✅ Optional: Smooth scroll for contact page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
