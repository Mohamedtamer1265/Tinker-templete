let links = document.querySelector('.ul'),
    Toggle = document.querySelector('.device');

Toggle.addEventListener('click', function(){
    links.classList.toggle("ul-show");
})