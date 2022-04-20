const audio = new Audio();
const playlist = document.querySelector('.playlist ul');
const heartBtn = document.querySelector('.heart-btn');
const player = document.querySelector('.player');
const album = document.querySelector('.heading h4');
const cover = document.querySelector('.cover');
const details = document.querySelector('.details');
const track = document.querySelector('.song-name');
const artist = document.querySelector('.song-artist');
const timer = document.querySelector('.song-timer');
const duration = document.querySelector('.song-duration');
const seek = document.querySelector('.seek-bar');
const prevBtn = document.querySelector('.prev-btn');
const playBtn = document.querySelector('.play-btn');
const nextBtn = document.querySelector('.next-btn');
const collapseBtn = document.querySelector('.collapse-btn');
const shareBtn = document.querySelector('.share-btn');
const person = document.querySelector('.person');
const bg = 'linear-gradient(to bottom, rgba(69, 71, 85, .925) 0%, rgba(28, 28, 31, .95) 100%)';

const songs = [
   {
      name: "Sherane a.k.a Master Splinter's Daughter",
      artist: "Kendrick Lamar",
      duration: "04:32",
      path: "songs/song-1.mp3",
      cover: "images/image-1.webp",
      thumb: "images/thumb-1.webp"
   },
   {
      name: "Bitch, Don't Kill My Vibe",
      artist: "Kendrick Lamar",
      duration: "05:10",
      path: "songs/song-2.mp3",
      cover: "images/image-2.webp",
      thumb: "images/thumb-2.webp"
   },
   {
      name: "Backseat Freestyle",
      artist: "Kendrick Lamar",
      duration: "03:32",
      path: "songs/song-3.mp3",
      cover: "images/image-3.webp",
      thumb: "images/thumb-3.webp"
   },
   {
      name: "The Art of Peer Pressure",
      artist: "Kendrick Lamar",
      duration: "05:24",
      path: "songs/song-4.mp3",
      cover: "images/image-4.webp",
      thumb: "images/thumb-4.webp"
   },
   {
      name: "Money Trees",
      artist: "Kendrick Lamar feat. Jay Rock",
      duration: "06:26",
      path: "songs/song-5.mp3",
      cover: "images/image-5.webp",
      thumb: "images/thumb-5.webp"
   },
   {
      name: "Poetic Justice",
      artist: "Kendrick Lamar feat. Drake",
      duration: "05:00",
      path: "songs/song-6.mp3",
      cover: "images/image-6.webp",
      thumb: "images/thumb-6.webp"
   },
   {
      name: "Good Kid",
      artist: "Kendrick Lamar",
      duration: "03:34",
      path: "songs/song-7.mp3",
      cover: "images/image-7.webp",
      thumb: "images/thumb-7.webp"
   },
   {
      name: "m.A.A.d city",
      artist: "Kendrick Lamar feat. MC Eiht",
      duration: "05:50",
      path: "songs/song-8.mp3",
      cover: "images/image-8.webp",
      thumb: "images/thumb-8.webp"
   },
   {
      name: "Swimming Pools (Drank)",
      artist: "Kendrick Lamar",
      duration: "05:13",
      path: "songs/song-9.mp3",
      cover: "images/image-9.webp",
      thumb: "images/thumb-9.webp"
   },
   {
      name: "Sing About Me, I'm Dying of Thirst",
      artist: "Kendrick Lamar",
      duration: "12:03",
      path: "songs/song-10.mp3",
      cover: "images/image-10.webp",
      thumb: "images/thumb-10.webp"
   },
   {
      name: "Real",
      artist: "Kendrick Lamar feat. Anna Wise",
      duration: "07:23",
      path: "songs/song-11.mp3",
      cover: "images/image-11.webp",
      thumb: "images/thumb-11.webp"
   },
   {
      name: "Compton",
      artist: "Kendrick Lamar feat. Dr. Dre",
      duration: "04:08",
      path: "songs/song-12.mp3",
      cover: "images/image-12.webp",
      thumb: "images/thumb-12.webp"
   },
   {
      name: "All We Got",
      artist: "Chance the Rapper feat. Kanye West & Chicago Childrens Choir",
      duration: "03:23",
      path: "songs/song-13.mp3",
      cover: "images/image-13.webp",
      thumb: "images/thumb-13.webp"
   },
   {
      name: "No Problem",
      artist: "Chance the Rapper feat. Lil Wayne & 2 Chainz",
      duration: "05:04",
      path: "songs/song-14.mp3",
      cover: "images/image-14.webp",
      thumb: "images/thumb-14.webp"
   },
   {
      name: "Summer Friends",
      artist: "Chance the Rapper feat. Jeremih & Francis & The Lights",
      duration: "04:50",
      path: "songs/song-15.mp3",
      cover: "images/image-15.webp",
      thumb: "images/thumb-15.webp"
   },
   {
      name: "D.R.A.M. Sings Special",
      artist: "Chance the Rapper",
      duration: "01:41",
      path: "songs/song-16.mp3",
      cover: "images/image-16.webp",
      thumb: "images/thumb-16.webp"
   },
   {
      name: "Blessings",
      artist: "Chance the Rapper feat. Jamila Woods",
      duration: "03:42",
      path: "songs/song-17.mp3",
      cover: "images/image-17.webp",
      thumb: "images/thumb-17.webp"
   },
   {
      name: "Same Drugs",
      artist: "Chance the Rapper",
      duration: "04:17",
      path: "songs/song-18.mp3",
      cover: "images/image-18.webp",
      thumb: "images/thumb-18.webp"
   },
   {
      name: "Mixtape",
      artist: "Chance the Rapper feat. Young Thug & Lil Yachty",
      duration: "04:52",
      path: "songs/song-19.mp3",
      cover: "images/image-19.webp",
      thumb: "images/thumb-19.webp"
   },
   {

      name: "Angels",
      artist: "Chance the Rapper feat. Saba",
      duration: "03:26",
      path: "songs/song-20.mp3",
      cover: "images/image-20.webp",
      thumb: "images/thumb-20.webp"
   },
   {
      name: "Juke Jam",
      artist: "Chance the Rapper",
      duration: "03:39",
      path: "songs/song-21.mp3",
      cover: "images/image-21.webp",
      thumb: "images/thumb-21.webp"
   },
   {
      name: "All Night",
      artist: "Chance the Rapper feat. Justin Bieber & Towkio",
      duration: "02:21",
      path: "songs/song-22.mp3",
      cover: "images/image-22.webp",
      thumb: "images/thumb-22.webp"
   },
   {
      name: "How Great",
      artist: "Chance the Rapper feat. Jay Electronica & My cousin Nicole",
      duration: "05:37",
      path: "songs/song-23.mp3",
      cover: "images/image-23.webp",
      thumb: "images/thumb-23.webp"
   },
   {
      name: "Smoke Break",
      artist: "Chance the Rapper feat. Future",
      duration: "03:46",
      path: "songs/song-24.mp3",
      cover: "images/image-24.webp",
      thumb: "images/thumb-24.webp"
   },
   {
      name: "Finish Line / Drown",
      artist: "Chance the Rapper feat. T-Pain, Kirk Franklin, Eryn Allen Kane & Noname",
      duration: "06:47",
      path: "songs/song-25.mp3",
      cover: "images/image-25.webp",
      thumb: "images/thumb-25.webp"
   },
   {
      name: "Blessings",
      artist: "Chance the Rapper feat. Ty Dolla $ign, Raury, BJ The Chicago Kid & Anderson .Paak",
      duration: "03:50",
      path: "songs/song-26.mp3",
      cover: "images/image-26.webp",
      thumb: "images/thumb-26.webp"
   }
];

const people = [
   'Bill Clinton',
   'Princess Diana',
   'Elon Musk',
   'Keanu Reeves',
   'Joan of Arc',
   'Albert Enstein',
   'John Lennon',
   'Michael Jackson',
   'Abraham Lincoln',
   'The Virgin Mary',
   'Prison Mike',
   'The Scranton Strangler',
   'Adam and Eve',
   'John the Baptist',
   'Yoko Ono',
   'Mike Lindell',
   'Rudy Giuliani',
   'Carlton Banks',
   'Reince Priebus',
   'Michael Clump',
   'Detective Micahel Scarn',
   'Bill Lumbergh'
];

let currentSong = Math.floor((Math.random() * songs.length) + 1);
let currentPerson = Math.floor((Math.random() * people.length) + 1);

window.addEventListener('load', () => {
   loadPlaylist();
   setSong(currentSong);
   getPerson(currentPerson);
})

function loadPlaylist() {
   for (let i = 0; i < songs.length; i++) {
      let liTag = `
         <li li-index="${i + 1}">
            <img src="${songs[i].thumb}" alt="Image">
            <div class="wrapper">
               <h3>${songs[i].name}</h3>
               <h4>${songs[i].artist}</h4>
            </div>
            <button class="more-btn"><span class="more-icon"></span></button>
         </li>
      `;
      playlist.insertAdjacentHTML('beforeend', liTag);
   }
}

function setSong(i) {
   let song = songs[i];
   const allLiTag = playlist.querySelectorAll('li');
   track.innerHTML = song.name;
   artist.innerHTML = song.artist;
   seek.value = 0;
   timer.innerHTML = '00:00';
   duration.innerHTML = song.duration;
   album.innerHTML = currentSong >= 12 ? 'Coloring Book' : 'good kid, m.A.A.d city';
   player.style.background = `${bg}, url(${song.cover}) no-repeat center center/cover`;
   cover.src = song.cover;
   audio.src = song.path;
   audio.addEventListener('loadeddata', () => {
      seek.max = audio.duration;
   });
   for (let i = 0; i < allLiTag.length; i++) {
      let liIndex = allLiTag[i].getAttribute('li-index');
      liIndex == currentSong ? allLiTag[i].classList.add('now-playing') : allLiTag[i].classList.remove('now-playing');
   };
}

function formatTime(time) {
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

function getPerson(i) {
   let currentPerson = people[i];
   person.innerHTML = `${currentPerson}`;
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

function toggleSong() {
   const isPlaying = player.classList.contains('playing');
   isPlaying ? pauseSong() : playSong();
}

function seekSong() {
   audio.currentTime = seek.value;
}

function prevSong() {
   currentSong <= 0 ? currentSong = songs.length - 1 : currentSong--;
   setSong(currentSong);
   playSong();
}

function nextSong() {
   currentSong >= songs.length - 1 ? currentSong = 0 : currentSong++;
   setSong(currentSong);
   playSong();
}

function expandPlayer() {
   player.classList.add('expanded');
   playlist.classList.add('overlay');
}

function collapsePlayer() {
   player.classList.remove('expanded');
   playlist.classList.remove('overlay');
}

function favoriteSong() {
   heartBtn.querySelector('span').classList.toggle('heart-icon-filled');
}

function shareApp() {
   const shareMenu = document.querySelector('.share-menu');
   const shareData = {
      title: 'MP3 App',
      text: 'by Jeff Claybrook',
      url: 'https://jeffclaybrook.github.io/sturdy-octo-parakeet/'
   };
   navigator.share(shareData)
   .then(() =>
      shareMenu.textContent = ''
   )
   .catch((e) =>
   shareMenu.textContent = '' + e
   )
};

details.addEventListener('click', expandPlayer);
collapseBtn.addEventListener('click', collapsePlayer);
playBtn.addEventListener('click', toggleSong);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
seek.addEventListener('change', seekSong);
heartBtn.addEventListener('click', favoriteSong);
shareBtn.addEventListener('click', shareApp);
audio.addEventListener('ended', nextSong);
