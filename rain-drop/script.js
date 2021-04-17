function createdrop(){ //function initialize
    const drop = document.createElement('div'); //create the drop(div) element
    drop.classList.add('drop'); //add class drop
    drop.style.left = Math.random()*100 + "vw"; //randomly select viewport width from 0 to 100
    drop.style.animationDuration = Math.random()*2 +3 +'s'; // randomly give drop speed from 3 to 5 second
    drop.innerText= "💧"; //rain drop emoji
    document.body.appendChild(drop); // add drop to body
    setTimeout(()=>{drop.remove();},5000) //after sometime drops will be removed so that it can't stack infinitely below
}
setInterval(createdrop,100); //create drop will be called after interval of 100 ms for every time