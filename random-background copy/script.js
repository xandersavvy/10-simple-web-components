const bgChangeBtn = document.getElementById('btn');//get the element by id button

bgChangeBtn.addEventListener('click',()=>{ //event listenet on click
    document.body.style.backgroundColor = 'hsl('+Math.floor(Math.random()*360)+',100%,50%)'; //hsl represents to hue sturation light now only by changing hue value we can change colors , so we are taking this format , now hue supports integer and has value from 0 to 360 
});