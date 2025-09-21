// =========================
// Global Variables
// =========================
let audioElement = null;

// =========================
// Inject Player ONLY in music.html
// =========================
if (window.location.pathname.includes("music.html")) {
  window.addEventListener("DOMContentLoaded", () => {
    // Create the player container
    const playerContainer = document.createElement("div");
    playerContainer.id = "player-container";
    playerContainer.innerHTML = `
      <div id="player" style="
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

    // Add player at the bottom of the page
    document.body.appendChild(playerContainer);

    // Initialize audio element
    audioElement = document.getElementById("audio");
  });
}

// =========================
// Play Track Function
// =========================
function playTrack(title, artist, src, cover) {
  // Check that audio element exists
  if (!audioElement) {
    audioElement = document.getElementById("audio");
  }

  if (audioElement) {
    // Update UI
    document.getElementById("player-title").textContent = title;
    document.getElementById("player-artist").textContent = artist;
    document.getElementById("player-cover").src = cover;

    // Set source & play
    audioElement.src = src;
    audioElement.load();
    audioElement.play()
      .then(() => {
        console.log(`▶️ Now playing: ${title}`);
      })
      .catch(err => {
        console.error("⚠️ Playback failed:", err);
        alert("Could not play audio. Check file path or browser settings.");
      });
  }
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
