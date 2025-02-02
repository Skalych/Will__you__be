const messages = [
    "Ти впевнена?",
    "справді впевнена?",
    "Ти переконана, що все гаразд?",
    "Зайка, будь ласка...",
    "Подумайте над цим ще разок!",
    "Якщо ти скажеш «ні», мені буде дуже сумно...",
    "Мені буде дуже сумно...",
    "Мені буде дуже, дуже, дуже, дуже сумно...",
    "Добре, добре, я більше не буду питати...",
    "скажи «так», будь ласка! ❤️",
    "піздец тобі"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}