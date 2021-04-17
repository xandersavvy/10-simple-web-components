//getting existing element
const btn = document.getElementById("btn");
const container = document.getElementById("container");
//creating element for the notifictaion
const newBtn = document.createElement('button');
const notification = document.createElement('div');
//adding class name to the element so it can be easy to accessible
newBtn.classList.add('close-button');
notification.classList.add('toast-notification');
//close button
newBtn.innerText = 'x';
//message to display
notification.innerText = 'I am your notification';
////when button is clicked notification will be shown
btn.addEventListener('click',()=>{ 
   container.appendChild(notification);
   container.appendChild(newBtn);
   //to automaticaaly remove notification after 5 sec
   setTimeout(()=>{
      removeNotification();
   },5000);
});
//when close button will be clicked it can remove noification to 
newBtn.addEventListener('click',()=>{ //when button is clicked
   removeNotification();
});
//remove notifcation and close button together
function removeNotification(){
   notification.remove();
   newBtn.remove();
}