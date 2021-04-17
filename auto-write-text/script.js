const txt= 'we have to practice more.🙌 '
const container = document.getElementById('container')
let index =0;
function writeText(){
 container.innerText= txt.slice(0,index)+'|';
index++;
if(index == txt.length){
    index=0;
}

}
setInterval(writeText,500);