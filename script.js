let gridcontainer = document.querySelector('.grid-container');
let n=8; 
document.querySelector('.gridsquarenumber').innerHTML=n+"x"+n +" squares";
let slider = document.getElementsByClassName("slider")[0];
slider.addEventListener('input',(e) => {n=(e.target.valueAsNumber); document.querySelector('.gridsquarenumber').innerHTML=n+"x"+n +" squares"; ;creategrid(n);});

function addingElistener(){
    gridsquares = document.querySelectorAll('.grid-square');
    gridsquares.forEach(div => {
        div.addEventListener('mouseover',(e) => {
            if(e.buttons == 1)
                div.style.backgroundColor='grey';
        })
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




