const main = document.querySelector('main');
const voices1 = document.getElementById('voices');
const textarea = document.getElementById('text');
const readBtn = document.getElementById('read');
const toggleBtn = document.getElementById('toggle');
const closeBtn = document.getElementById('close');
const message = new SpeechSynthesisUtterance();
const data = [{
        image: 'img/drink.jpg',
        text: "I'm Thirsty"
    },
    {
        image: 'img/food.jpg',
        text: "I'm Hungry"
    },
    {
        image: 'img/tired.jpg',
        text: "I'm Tired"
    },
    {
        image: 'img/hurt.jpg',
        text: "I'm Hurt"
    },
    {
        image: 'img/happy.jpg',
        text: "I'm Happy"
    },
    {
        image: 'img/angry.jpg',
        text: "I'm Angry"
    },
    {
        image: 'img/sad.jpg',
        text: "I'm Sad"
    },
    {
        image: 'img/scared.jpg',
        text: "I'm Scared"
    },
    {
        image: 'img/outside.jpg',
        text: 'I Want To Go Outside'
    },
    {
        image: 'img/home.jpg',
        text: 'I Want To Go Home'
    },
    {
        image: 'img/school.jpg',
        text: 'I Want To Go To School'
    },
    {
        image: 'img/grandma.jpg',
        text: 'I Want To Go To Grandmas'
    }
];
data.forEach(tianjiabox); //遍历添加的内容
function tianjiabox(item) {
    const box = document.createElement('div');
    const { image, text } = item;
    box.classList.add('box');
    box.innerHTML = `
    <img src="${image}" alt="${text}" />
    <p class="info">${text}</p>
  `;
    box.addEventListener('click', () => {
        fanhui(text);
        langdu();
        box.classList.add('active');
        setTimeout(() => box.classList.remove('active'), 500);
    });
    main.appendChild(box);
} //添加div元素

function fanhui(text) {
    message.text = text;
}

function langdu() {
    speechSynthesis.speak(message);
}

function huoqu(e) {
    message.voice = voices.find(voice => voice.name === e.target.value);
}
let voices = [];

function huoquyvyan() { //获取api接口内的语言信息
    voices = speechSynthesis.getVoices();

    voices.forEach(voice => {
        const option = document.createElement('option');

        option.value = voice.name;
        option.innerText = `${voice.name} ${voice.lang}`;

        voices1.appendChild(option);
    });
}
speechSynthesis.addEventListener('voiceschanged', huoquyvyan);
toggleBtn.addEventListener('click', () =>
    document.getElementById('text-box').classList.toggle('show')
);
closeBtn.addEventListener('click', () =>
    document.getElementById('text-box').classList.remove('show')
);
voices1.addEventListener('change', huoqu);
readBtn.addEventListener('click', () => {
    fanhui(textarea.value);
    langdu();
});

huoquyvyan();