const btn = document.getElementById("btn");
const nav = document.getElementById("nav");
btn.addEventListener('click',()=>{ //when button is clicked
     nav.classList.toggle('active'); //if button don't have active class add active class but if button has active class remove it
    btn.classList.toggle('active');//same to nav 
});