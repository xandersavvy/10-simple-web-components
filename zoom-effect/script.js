// get image and its container 
const container = document.getElementById('container');
const img = document.getElementById('img');

 container.addEventListener('mousemove',(e)=>{ //when mouse will be moved over the element
    const x = e.clientX - e.target.offsetLeft; //value of x axis
    const y = e.clientY - e.target.offsetTop; // value of y axis
    img.style.transformOrigin = x + 'px ' + y +'px'; // the imagewill be shown as origin x axis and y axis
    img.style.transform = 'scale(2)'; // zoom the image
 });
 container.addEventListener('mouseleave',()=>{ //if mouse leaves
     img.style.transformOrigin = 'center center'; //make the origin cente
     img.style.transform = 'scale(1)';//zoom out the image
 });