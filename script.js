const audio = document.querySelector('audio');
const main = document.querySelector('main');
const playlist = document.querySelector('.playlist');
const player = document.querySelector('.player');
const details = document.querySelector('.details');
const songName = document.querySelector('.details h1');
const songArtist = document.querySelector('.details h2');
const songAlbum = document.querySelector('.header h4');
const songImage = document.querySelector('.figure img');
const songTimer = document.querySelector('.timer');
const songDuration = document.querySelector('.duration');
const progressBar = document.querySelector('.progress-bar');
const playBtn = document.querySelector('.play-btn');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const shuffleBtn = document.querySelector('.shuffle-btn');
const repeatBtn = document.querySelector('.repeat-btn');
const themeBtn = document.querySelector('.theme-btn');
const expandBtn = document.querySelector('.details');
const collapseBtn = document.querySelector('.collapse-btn');
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

let currentSong = Math.floor((Math.random() * songs.length) + 1);

window.addEventListener('load', () => {
   loadPlaylist();
   setSong(currentSong);
   playingSong();
})

function setSong(i) {
   let song = songs[i];
   progressBar.value = 0;
   audio.src = song.file;
   songImage.src = song.cover;
   songName.innerHTML = song.name;
   songAlbum.innerHTML = currentSong >= 12 ? 'Coloring Book' : 'good kid, m.A.A.d city';
   songArtist.innerHTML = currentSong >= 12 ? 'Chance the Rapper' : 'Kendrick Lamar';
   songTimer.innerHTML = '00:00';
   songDuration.innerHTML = song.duration;
   audio.addEventListener('loadeddata', () => {
      progressBar.max = audio.duration;
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
   progressBar.value = Math.floor(audio.currentTime);
   songTimer.innerHTML = formatTime(audio.currentTime);
}, 1000);

function seekSong() {
   audio.currentTime = progressBar.value;
}

function playSong() {
   player.classList.add('playing');
   playBtn.querySelector('ion-icon').setAttribute('name', 'pause-circle');
   audio.play();
}

function pauseSong() {
   player.classList.remove('playing');
   playBtn.querySelector('ion-icon').setAttribute('name', 'play-circle');
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
            <button class="more-btn"><ion-icon name="ellipsis-vertical"></ion-icon></button>
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

function setTheme() {
   let theme = localStorage.getItem('theme');
   if (theme == 'dark') {
      document.body.classList.toggle('dark-theme');
   } else if (theme == 'light') {
      document.body.classList.toggle('light-theme');
   } else if (prefersDarkScheme.matches) {
      document.body.classList.toggle('light-theme');
      theme = document.body.classList.contains('light-theme') ? 'light' : 'dark';
   } else {
      document.body.classList.toggle('dark-theme');
      theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';
   }
}

collapseBtn.addEventListener('click', collapsePlayer);
expandBtn.addEventListener('click', expandPlayer);
playBtn.addEventListener('click', toggleSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
themeBtn.addEventListener('click', setTheme);
progressBar.addEventListener('change', seekSong);
audio.addEventListener('ended', nextSong);