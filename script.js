document.addEventListener("DOMContentLoaded", function () {
  const envelope = document.getElementById("envelope");
  setTimeout(() => {
    envelope.style.opacity = 1;
  }, 500);

  const music = document.getElementById("bg-music");
  music.volume = 0.1;
});
