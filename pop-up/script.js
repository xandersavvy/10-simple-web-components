const container = document.getElementById('container'); //get element by id
document.getElementById('btn').addEventListener('click',()=>{
    container.classList.add('active'); // if button is clicked "active"  class will be appended to container which will cause full screen pop up 
});
document.getElementById('close').addEventListener('click',()=>{
    container.classList.remove('active')//if the close button is clicked when the pop up is there it will remove active clas and pop up will disappear 
})
