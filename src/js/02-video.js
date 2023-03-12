import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('timeupdate', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    player.getCurrentTime({
        duration: 61.857,
        percent: 0.049,
        seconds: 3.034});


