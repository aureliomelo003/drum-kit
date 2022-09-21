function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const play = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return;

  play.classList.toggle('playing')
  audio.currentTime = 0;
  audio.play();
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

const plays = Array.from(document.querySelectorAll('.play'));
plays.forEach(play => play.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
