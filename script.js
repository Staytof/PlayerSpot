// Vars
let music = document.getElementById('audio');

let duracaoMusic = document.querySelector('.fim');

let imagem = document.querySelector('img');

let nomeMusic = document.querySelector('.descricao h1');

duracaoMusic.textContent = segundosParaMinutos(Math.floor(music.duration));

let musicas = [

    { titulo: 'My Sweat', src: 'Oficial.mp3', img: 'MYCover.jpeg' },

    { titulo: 'Insteristelar Tema', src: 'Interistelar.mp3', img: 'ISCover.png' },

    { titulo: 'Sillent Hill Tema', src: 'SHteme.mp3', img: 'SLCover.png' },

];

let indexMusic = 0;


// Eventos
document.querySelector('.play').addEventListener('click', tocarMusica);

document.querySelector('.pause').addEventListener('click', pausarMusica);

music.addEventListener('timeupdate', atualizarBarra);

window.onload = duration;

document.querySelector('.prev').addEventListener('click', () => {
    indexMusic--;
    renderizarMusicar(indexMusic);

});

document.querySelector('.next').addEventListener('click', () => {
    indexMusic++;
    renderizarMusicar(indexMusic);

});


// Functions
function renderizarMusicar(index) {
    music.setAttribute('src', musicas[index].src);
    music.addEventListener('loadeddata', () => {
        nomeMusic.textContent = musicas[index].titulo;
        imagem.src = musicas[index].img;
        duracaoMusic.textContent = segundosParaMinutos(Math.floor(music.duration));
    });
}

function tocarMusica() {
    music.play();
    document.querySelector('.pause').style.display = 'block';
    document.querySelector('.play').style.display = 'none';
}

function pausarMusica() {
    music.pause();
    document.querySelector('.play').style.display = 'block';
    document.querySelector('.pause').style.display = 'none';
}

function atualizarBarra() {
    let barra = document.getElementById('progress');
    barra.style.width = Math.floor((music.currentTime / music.duration) * 100) + '%';
    let tempoDeCorrido = document.querySelector('.inicio');
    tempoDeCorrido.textContent = segundosParaMinutos(Math.floor(music.currentTime));
}

function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10) {
        campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos + ':' + campoSegundos
}

function duration() {
    duracaoMusic.textContent = segundosParaMinutos(Math.floor(music.duration));
}
