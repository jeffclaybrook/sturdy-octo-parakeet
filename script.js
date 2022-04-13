const audio = document.querySelector('audio');
const main = document.querySelector('main');
const playlist = document.querySelector('.playlist');
const player = document.querySelector('.player');
const details = document.querySelector('.details');
const track = document.querySelector('.song-name');
const artist = document.querySelector('.song-artist');
const album = document.querySelector('.song-album');
const image = document.querySelector('.figure img');
const timer = document.querySelector('.song-timer');
const duration = document.querySelector('.song-duration');
const seek = document.querySelector('.seek-bar');
const playBtn = document.querySelector('.play-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const shareBtn = document.querySelector('.share-btn');
const shareMenu = document.querySelector('.share-menu');
const expandBtn = document.querySelector('.details');
const collapseBtn = document.querySelector('.collapse-btn');

let currentSong = Math.floor((Math.random() * songs.length) + 1);

window.addEventListener('load', () => {
   loadPlaylist();
   setSong(currentSong);
   playingSong();
})

const loadPlaylist = () => {
   const ulTag = document.createElement('ul');
   for (let i = 0; i < songs.length; i++) {
      let liTag = `
         <li li-index="${i}">
            <img src="${songs[i].cover}" alt="Image">
            <div class="wrapper">
               <h3>${songs[i].name}</h3>
               <h4>${songs[i].artist}</h4>
            </div>
            <button class="more-btn"><span class="more-icon"></span></button>
         </li>
      `;
      playlist.appendChild(ulTag);
      ulTag.insertAdjacentHTML('beforeend', liTag);
   }
}

const setSong = (i) => {
   let song = songs[i];
   audio.src = song.file;
   image.src = song.cover;
   player.style.background = `linear-gradient(to bottom, rgba(69, 71, 85, .925) 0%, rgba(28, 28, 31, .925) 100%), url(${song.cover}) no-repeat center center/cover`;
   track.innerHTML = song.name;
   artist.innerHTML = song.artist;
   album.innerHTML = currentSong >= 12 ? 'Coloring Book' : 'good kid, m.A.A.d city';
   seek.value = 0;
   timer.innerHTML = '00:00';
   duration.innerHTML = song.duration;
   audio.addEventListener('loadeddata', () => {
      seek.max = audio.duration;
   });
}

const formatTime = (time) => {
   let min = Math.floor(time / 60);
   let sec = Math.floor(time % 60);
   let minutes = min < 10 ? `0${min}` : `${min}`;
   let seconds = sec < 10 ? `0${sec}` : `${sec}`;
   return `${minutes}:${seconds}`;
}

setInterval(() => {
   seek.value = Math.floor(audio.currentTime);
   timer.innerHTML = formatTime(audio.currentTime);
}, 1000);

const seekSong = () => {
   audio.currentTime = seek.value;
}

const playSong = () => {
   player.classList.add('playing');
   playBtn.querySelector('span').classList.add('pause-icon');
   playBtn.querySelector('span').classList.remove('play-icon');
   audio.play();
}

const pauseSong = () => {
   player.classList.remove('playing');
   playBtn.querySelector('span').classList.add('play-icon');
   playBtn.querySelector('span').classList.remove('pause-icon');
   audio.pause();
}

const prevSong = () => {
   currentSong <= 0 ? currentSong = songs.length - 1 : currentSong--;
   setSong(currentSong);
   playingSong();
   playSong();
}

const nextSong = () => {
   currentSong >= songs.length - 1 ? currentSong = 0 : currentSong++;
   setSong(currentSong);
   playingSong();
   playSong();
}

const toggleSong = () => {
   const isPlaying = player.classList.contains('playing');
   isPlaying ? pauseSong() : playSong();
}

const playingSong = () => {
   const ulTag = playlist.querySelector('ul');
   const allLiTag = ulTag.querySelectorAll('li');
   for (let i = 0; i < allLiTag.length; i++) {
      allLiTag[i].getAttribute('li-index') == currentSong ? allLiTag[i].classList.add('now-playing') : allLiTag[i].classList.remove('now-playing');
      allLiTag[i].setAttribute('onclick', 'clickedSong(this)');
   }
}

const clickedSong = (element) => {
   let getLiIndex = element.getAttribute('li-index');
   currentSong = getLiIndex;
   setSong(currentSong);
   playingSong();
   playSong();   
}

const expandPlayer = () => {
   player.classList.add('expanded');
   main.classList.add('overlay');
}

const collapsePlayer = () => {
   player.classList.remove('expanded');
   main.classList.remove('overlay');
}

const shareApp = () => {
   let shareData = {
      title: 'Audio app',
      text: 'by Jeff Claybrook',
      url: 'https://jeffclaybrook.github.io/sturdy-octo-parakeet/'
   };
   navigator.share(shareData)
   .then(() =>
      shareMenu.textContent = '',
      shareMenu.style.display = 'none'
   )
   .catch((e) =>
      shareMenu.textContent = '' + e,
      shareMenu.style.display = 'none'
   )
}

collapseBtn.addEventListener('click', collapsePlayer);
expandBtn.addEventListener('click', expandPlayer);
playBtn.addEventListener('click', toggleSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
shareBtn.addEventListener('click', shareApp);
seek.addEventListener('change', seekSong);
audio.addEventListener('ended', nextSong);