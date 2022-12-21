const asideBtn = document.getElementsByClassName('btn')[0];
const asideUl = document.getElementsByTagName('ul')[0];

asideBtn.addEventListener('click', () => {
    asideBtn.classList.toggle('actived');
    asideUl.classList.toggle('actived');
});
