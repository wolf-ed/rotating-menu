const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');
//to select a class we use querySelector and we need to add the dot. '.container'


open.addEventListener('click', () => container.classList.add('show-nav'));


close.addEventListener('click', () => 
container.classList.remove('show-nav'));