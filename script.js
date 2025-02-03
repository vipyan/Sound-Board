const songs = ['Cinematic', 'Classical', 'Hip-hop', 'Pop'];
const pause = document.getElementById('pause');

let currentlyPlaying = null; // To track the currently playing song

songs.forEach(song => {
    const btn = document.createElement('button');
    btn.innerHTML = song;
    btn.classList.add('btn');

    btn.addEventListener('click', () => {
        const audio = document.getElementById(song);

        if (currentlyPlaying === audio) {
            // If the clicked song is already playing, pause it
            audio.pause();
            currentlyPlaying = null;
            pause.innerText = "Play"; // Change button text to Play
        } else {
            // Pause the currently playing song if it's different
            stopSongs();
            audio.play();
            currentlyPlaying = audio;
            pause.innerText = "Pause"; // Change button text to Pause
        }
    });

    document.getElementById('buttons').appendChild(btn);    
});

// Pause button functionality
pause.addEventListener('click', () => {
    if (currentlyPlaying) {
        currentlyPlaying.pause();
        currentlyPlaying = null;
        pause.innerText = "Play"; // Change button text to Play
    } else {
        // If no song is playing, restart the last played song
        if (songs.length > 0) {
            const lastSong = document.getElementById(songs[0]);
            lastSong.play();
            currentlyPlaying = lastSong;
            pause.innerText = "Pause"; // Change button text to Pause
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

