// 🎵 Sticky Music Player Functionality
const audioPlayer = document.getElementById("audio-player");
const trackTitle = document.getElementById("track-title");

/**
 * Plays a track in the sticky footer player.
 * @param {string} src - The source of the audio file.
 * @param {string} title - The title of the track.
 */
function playTrack(src, title) {
  if (audioPlayer && trackTitle) {
    audioPlayer.src = src;
    trackTitle.textContent = title;
    audioPlayer.play();
  }
}

// Example usage in music.html or gallery.html:
// <button onclick="playTrack('songs/track1.mp3', 'My New Song')">▶ Play</button>

// ✅ Optional: Smooth scroll for contact page
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
