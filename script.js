const songs = ['Cinematic', 'Classical', 'Hip-hop', 'Pop'];
const pause = document.getElementById('pause');

songs.forEach(song => {
    const btn = document.createElement('button');
    btn.innerHTML = song;
    
    btn.classList.add('btn');
    
    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(song).play();
    });

    document.getElementById('buttons').appendChild(btn);    
});

pause.addEventListener('click', () => {
    stopSongs();
});

function stopSongs() {  
    songs.forEach(song => {
        const sound = document.getElementById(song);
        sound.pause();
        sound.currentTime = 0;
    });
}