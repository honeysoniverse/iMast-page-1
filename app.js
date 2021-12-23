$(document).ready(function(){
    $('.clients').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500})})

const btn = document.getElementById('m-menu');

btn.addEventListener('click',toggleMenu);
document.body.addEventListener('click', function(e){if(e.target.classList == 'menu-item')
{
    document.body.classList.toggle('no-scroll');

btn.classList.toggle('open');
dropDown.classList.toggle('hidden');}});

function toggleMenu(){
    const dropDown = document.getElementById('dropDown');
    btn.classList.toggle('open');
    dropDown.classList.toggle('hidden');
    document.body.classList.toggle('no-scroll');
}