const sounds = ["applause","boo","tada","victory","wrong"]; //arrays of the id 
sounds.forEach((sound)=>{ //iterate through the array
    const playBtn = document.createElement("button"); //create a button element for each of the value in array
    playBtn.classList.add("playbtn"); // add class button with it
    playBtn.innerText = sound; //the text tobe shown in button is the current element of the arrayb sounds
    playBtn.addEventListener('click',()=>{ // when function on click
        document.getElementById(sound).play(); //target the preloaded audio with id same as the current element of array and play it
    });
    document.body.appendChild(playBtn);//add button as a child in body
});