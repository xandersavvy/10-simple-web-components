const images = document.getElementById('image-container');
const allImages = document.querySelectorAll('img#carousel-img');
let index = 0;
function carouselChanger(){
    index++;
    if(index>allImages.length-1){
        index =0;
    }
    images.style.transform = 'translateX(-'+index*100+'vw)';
}
setInterval(carouselChanger,3000);
