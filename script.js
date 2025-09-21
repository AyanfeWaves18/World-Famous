// Global audio player
let audio = new Audio();
let currentTrack = null;

// Sticky player elements
const player = document.createElement("div");
player.className = "sticky-player";
player.innerHTML = `
  <img id="player-cover" src="" alt="Cover">
  <div class="player-info">
    <h4 id="player-title">Not Playing</h4>
    <p id="player-artist"></p>
  </div>
  <div class="player-controls">
    <button id="play-pause">⏯</button>
    <input type="range" id="seek-bar" value="0" min="0" max="100">
  </div>
`;
document.body.appendChild(player);

// References
const playPauseBtn = document.getElementById("play-pause");
const seekBar = document.getElementById("seek-bar");
const playerTitle = document.getElementById("player-title");
const playerArtist = document.getElementById("player-artist");
const playerCover = document.getElementById("player-cover");

// Function to play track
function playTrack(title, artist, src, cover) {
  if (currentTrack !== src) {
    audio.src = src;
    currentTrack = src;
    playerTitle.textContent = title;
    playerArtist.textContent = artist;
    playerCover.src = cover;
    audio.play();
    playPauseBtn.textContent = "⏸";
  } else {
    if (audio.paused) {
      audio.play();
      playPauseBtn.textContent = "⏸";
    } else {
      audio.pause();
      playPauseBtn.textContent = "▶️";
    }
  }
}

// Play/pause button
playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸";
  } else {
    audio.pause();
    playPauseBtn.textContent = "▶️";
  }
});

// Update seek bar as track plays
audio.addEventListener("timeupdate", () => {
  if (!isNaN(audio.duration)) {
    seekBar.value = (audio.currentTime / audio.duration) * 100;
  }
});

// Seek when user changes range
seekBar.addEventListener("input", () => {
  audio.currentTime = (seekBar.value / 100) * audio.duration;
});

// ✅ Optional: Smooth scroll for contact page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
