// Floating hearts
setInterval(() => {
const heart = document.createElement('div');
heart.className = 'heart';
heart.innerHTML = '❤';
heart.style.left = Math.random() * 100 + 'vw';
heart.style.fontSize = Math.random() * 20 + 15 + 'px';
document.body.appendChild(heart);


setTimeout(() => heart.remove(), 6000);
}, 300);


// Music control
function toggleMusic() {
const music = document.getElementById('bgMusic');
if (music.paused) music.play();
else music.pause();
}


// Love letter popup
function openLetter() {
document.getElementById('popup').style.display = 'block';
}


function closeLetter() {
document.getElementById('popup').style.display = 'none';
}


// Countdown to Feb 14
function updateCountdown() {
const now = new Date();
const target = new Date(now.getFullYear(), 1, 14);


if (now > target) target.setFullYear(target.getFullYear() + 1);


const diff = target - now;


const days = Math.floor(diff / (1000 * 60 * 60 * 24));
const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
const mins = Math.floor((diff / (1000 * 60)) % 60);


document.getElementById('countdown').innerText =
`⏳ ${days}d ${hours}h ${mins}m until Valentine's Day`;
}


setInterval(updateCountdown, 1000);