const songs = ['Cinematic', 'Classical', 'Hip-hop', 'Pop'];
const pause = document.getElementById('pause');

// Set initial text
pause.innerText = "Please select a song"; 


let currentlyPlaying = null; // To track the currently playing song
let isPaused = false; // Track if a song is paused

songs.forEach(song => {
    const btn = document.createElement('button');
    btn.innerHTML = song;
    btn.classList.add('btn');

    btn.addEventListener('click', () => {
        const audio = document.getElementById(song);

        if (currentlyPlaying === audio) {
            // If the clicked song is already playing, pause it
            audio.pause();
            isPaused = true;
            pause.innerText = `Play ${currentlyPlaying.id}`;
        } else {
            // Pause the currently playing song if it's different
            stopSongs();
            audio.play();
            currentlyPlaying = audio;
            isPaused = false;
            pause.innerText = `Pause ${currentlyPlaying.id}`;
        }
    });

    document.getElementById('buttons').appendChild(btn);    
});

// Pause button functionality
pause.addEventListener('click', () => {
    if (currentlyPlaying) {
        if (!isPaused) {
            // Pause the song
            currentlyPlaying.pause();
            isPaused = true;
            pause.innerText = `Play ${currentlyPlaying.id}`;
        } else {
            // Resume the last played song
            currentlyPlaying.play();
            isPaused = false;
            pause.innerText = `Pause ${currentlyPlaying.id}`;
        }
    }
});

function stopSongs() {  
    songs.forEach(song => {
        const sound = document.getElementById(song);
        sound.pause();
        sound.currentTime = 0;
    });
}
