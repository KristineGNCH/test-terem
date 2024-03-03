const form = document.querySelector('.form');
const text = document.querySelector('.text');

function insertText(item) {
    const span = `<span class='insert-info'> ${ item } </span>`;
    text.insertAdjacentHTML('beforeend', span);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dataArr = [...new FormData(form)];
    const dataObj = Object.fromEntries(dataArr);
    const json = JSON.stringify(dataObj);
    const URLArr = [];

    insertText(json);
    dataArr.forEach((el) => URLArr.push(el.join(' = ')));
    const URLString = URLArr.join(' | ');
    getResponse(URLString);
});

async function getResponse(data) {
    const response = await fetch(`./index.html?${data}`);
    if (response.ok) {
        alert('Спасибо, информация отправлена!');
    }
    console.log(data);
}
