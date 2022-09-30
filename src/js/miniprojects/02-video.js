import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .catch(error => {
    switch (error.name) {
      case 'TypeError':
        // localStorage is empty, playing will be started since 0 seconds
        break;
    }
  });

player.on('timeupdate', throttle(currentTime, 1000));

function currentTime(event) {
  let time = event.seconds;
  localStorage.setItem('videoplayer-current-time', time);
}
