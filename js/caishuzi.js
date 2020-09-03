const msg1 = document.getElementById("msg");
const randomnumber = getrandom();

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let yvyin = new window.SpeechRecognition();
yvyin.start();
console.log("数字：", randomnumber);

function getrandom() {
    return Math.floor(Math.random() * 100) + 1;
}

function speaks(e) {
    const msg = e.results[0][0].transcript;
    neirong(msg);
}
function neirong(msg) {
    msg1.innerHTML = `
    <div>你说的是：</div>
    <span class="box">${msg}</span>`;
    const num = +msg;
    if (Number.isNaN(num)) {
        msg1.innerHTML += `<div>这不是数字</div>`;
        return;
    }
    if (num > 100 || num < 1) {
        msg1.innerHTML += `<div>数字在1到100之间</div>`;
        return;
    }
    if (num === randomnumber) {
        msg1.innerHTML = `<div>你猜对了！！</div>
        <button class="play-again" id="play-again">
        重新开始</button>`;
    }
    if (num < randomnumber) {
        msg1.innerHTML += `<div>太小了</div>`;
    } else {
        msg1.innerHTML += `<div>太大了</div>`;
    }
}
document.body.addEventListener('click', e => {
    if (e.target.id == 'play-again') {
        window.location.reload();
    }
});
yvyin.addEventListener('end', () => yvyin.start());
yvyin.addEventListener('result', speaks);