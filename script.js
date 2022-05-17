let gridcontainer = document.querySelector('.grid-container');
let n=16; 
document.querySelector('.gridsquarenumber').innerHTML=n+"x"+n +" squares";
let slider = document.getElementsByClassName("slider")[0];
slider.addEventListener('input',(e) => {n=(e.target.valueAsNumber); document.querySelector('.gridsquarenumber').innerHTML=n+"x"+n +" squares"; creategrid(n);});
let color='grey';
let colorpicker = document.getElementById('html5colorpicker');
colorpicker.value='#696969';
colorpicker.addEventListener('input',(e) => {color = (e.target.value)});


let pen = document.querySelector('.pen');
pen.addEventListener('click',()=>{color=colorpicker.value; eraser.style.background = ''; pen.style.background='grey';});

let eraser = document.querySelector('.eraser');
eraser.addEventListener('click',()=>{color='white'; pen.style.background = ''; eraser.style.background='grey';});

let resetbutton = document.querySelector('.resetbutton');
resetbutton.addEventListener('click',(e)=>{creategrid(n);});

function addingElistener(){
    gridsquares = document.querySelectorAll('.grid-square');
    gridsquares.forEach(div => {
        div.addEventListener('mouseover',(e) => {
            if(e.buttons == 1)
                div.style.backgroundColor=color;
        })
        div.addEventListener('click',(e)=>{div.style.backgroundColor=color;})
    });
}

function creategrid(n){
    gridcontainer.innerHTML='';
    for(let i=0;i<n;i++)
    {
        for(let j=0;j<n;j++){
            let square = document.createElement('div');
            square.style.cssText = 
            " margin: 0; width: "+(((gridcontainer.clientWidth-32))/n)+"px; height: "+(((gridcontainer.clientWidth-32))/n)+"px; background-color:white;";
            square.className='grid-square';
            gridcontainer.appendChild(square);
        }
    }
    addingElistener();
}
creategrid(n);




