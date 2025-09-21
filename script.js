// =========================
// Global Variables
// =========================
let audioElement = null;

// =========================
// Play Track Function
// =========================
function playTrack(title, artist, src, cover) {
  if (!audioElement) {
    audioElement = document.getElementById("audio");
  }

  if (!audioElement) {
    console.error("❌ Audio element not found!");
    return;
  }

  // Update player UI
  document.getElementById("player-title").textContent = title;
  document.getElementById("player-artist").textContent = artist;
  document.getElementById("player-cover").src = cover;

  // Load and play audio
  audioElement.src = src;
  audioElement.play().catch(err => {
    console.error("⚠️ Error playing track:", err);
  });
}

// =========================
// Inject Player ONLY in music.html
// =========================
if (window.location.href.includes("music.html")) {
  const playerContainer = document.createElement("div");
  playerContainer.id = "player-container";
  playerContainer.innerHTML = `
    <div id="player" style="
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background: #111;
      color: #fff;
      display: flex;
      align-items: center;
      padding: 10px;
      box-shadow: 0 -2px 10px rgba(0,0,0,0.5);
      z-index: 9999;
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
}

// ✅ Smooth scroll for internal links (optional)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
