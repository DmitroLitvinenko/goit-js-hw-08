import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onPlay, 1000));

function onPlay({ seconds }) {
  localStorage.setItem(STORAGE_KEY, seconds);
}

window.addEventListener('load', () => {
  const savedTime = localStorage.getItem(STORAGE_KEY);
  if (savedTime) {
    player.setCurrentTime(savedTime);
  }
});
