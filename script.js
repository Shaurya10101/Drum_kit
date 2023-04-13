document.addEventListener('keydown', function playevent(event) {
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  const div = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!audio) return;
  if (audio.currentTime > 0) {
    audio.currentTime = 0;
  }
  audio.play();
  div.classList.add("playing");
  setTimeout(function() {
    div.classList.remove("playing");
  }, 420); // replace 1000 with the desired duration in milliseconds
});
