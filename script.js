const audio = document.querySelector('audio');
const main = document.querySelector('main');
const playlist = document.querySelector('.playlist');
const player = document.querySelector('.player');
const details = document.querySelector('.details');
const songName = document.querySelector('.song-name');
const songArtist = document.querySelector('.song-artist');
const songAlbum = document.querySelector('.song-album');
const songImage = document.querySelector('.figure img');
const songTimer = document.querySelector('.timer');
const songDuration = document.querySelector('.duration');
const seekBar = document.querySelector('.seek-bar');
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

function setSong(i) {
   let song = songs[i];
   seekBar.value = 0;
   audio.src = song.file;
   songImage.src = song.cover;
   songName.innerHTML = song.name;
   songAlbum.innerHTML = currentSong >= 12 ? 'Coloring Book' : 'good kid, m.A.A.d city';
   songArtist.innerHTML = currentSong >= 12 ? 'Chance the Rapper' : 'Kendrick Lamar';
   songTimer.innerHTML = '00:00';
   songDuration.innerHTML = song.duration;
   audio.addEventListener('loadeddata', () => {
      seekBar.max = audio.duration;
   });
}

function formatTime(time) {
   let min = Math.floor(time / 60);
   let sec = Math.floor(time % 60);
   let minutes = min < 10 ? `0${min}` : `${min}`;
   let seconds = sec < 10 ? `0${sec}` : `${sec}`;
   return `${minutes}:${seconds}`;
}

setInterval(() => {
   seekBar.value = Math.floor(audio.currentTime);
   songTimer.innerHTML = formatTime(audio.currentTime);
}, 1000);

function seekSong() {
   audio.currentTime = seekBar.value;
}

function playSong() {
   player.classList.add('playing');
   playBtn.querySelector('span').classList.add('pause-icon');
   playBtn.querySelector('span').classList.remove('play-icon');
   audio.play();
}

function pauseSong() {
   player.classList.remove('playing');
   playBtn.querySelector('span').classList.add('play-icon');
   playBtn.querySelector('span').classList.remove('pause-icon');
   audio.pause();
}

function prevSong() {
   currentSong <= 0 ? currentSong = songs.length - 1 : currentSong--;
   setSong(currentSong);
   playingSong();
   playSong();
}

function nextSong() {
   currentSong >= songs.length - 1 ? currentSong = 0 : currentSong++;
   setSong(currentSong);
   playingSong();
   playSong();
}

function toggleSong() {
   const isPlaying = player.classList.contains('playing');
   isPlaying ? pauseSong() : playSong();
}

function loadPlaylist() {
   const ulTag = document.createElement('ul');
   for (let i = 0; i < songs.length; i++) {
      let liTag = `
         <li li-index="${i}">
            <img src="${songs[i].cover}" alt="Image">
            <div class="wrapper">
               <h3>${songs[i].name}</h3>
               <div class="flex">
                  <p>EXPLICIT</p>
                  <h4>${songs[i].artist}</h4>
               </div>
            </div>
            <button class="more-btn"><span class="more-icon"></span></button>
         </li>
      `;
      playlist.appendChild(ulTag);
      ulTag.insertAdjacentHTML('beforeend', liTag);
   }
}

function playingSong() {
   const ulTag = playlist.querySelector('ul');
   const allLiTag = ulTag.querySelectorAll('li');
   for (let j = 0; j < allLiTag.length; j++) {
      if (allLiTag[j].getAttribute('li-index') == currentSong) {
         allLiTag[j].classList.add('now-playing');
      } else {
         allLiTag[j].classList.remove('now-playing');
      }
      allLiTag[j].setAttribute('onclick', 'clicked(this)');
   }
}

function clicked(element) {
   let getLiIndex = element.getAttribute('li-index');
   currentSong = getLiIndex;
   setSong(currentSong);
   playSong();
   playingSong();
}

function expandPlayer() {
   player.classList.add('expanded');
   main.classList.add('overlay');
}

function collapsePlayer() {
   player.classList.remove('expanded');
   main.classList.remove('overlay');
}

function shareApp() {
   let shareData = {
      title: 'MP3 App',
      text: 'by Jeff Claybrook',
      url: 'https://jeffclaybrook.github.io/sturdy-octo-parakeet/'
   };
   navigator.share(shareData)
   .then(() =>
      shareMenu.textContent = '',
      shareMenu.style.display = 'none'
   )
   .catch((e) =>
      shareMenu.textContenet = '' + e,
      shareMenu.style.display = 'none'
   )
}

collapseBtn.addEventListener('click', collapsePlayer);
expandBtn.addEventListener('click', expandPlayer);
playBtn.addEventListener('click', toggleSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
shareBtn.addEventListener('click', shareApp);
seekBar.addEventListener('change', seekSong);
audio.addEventListener('ended', nextSong);
