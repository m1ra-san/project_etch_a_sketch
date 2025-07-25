const canvas=document.querySelector(".canvas");
const selectSize=document.querySelector(".size-selector");
const colorPicker=document.querySelector("#colorPicker");
const prismatic=document.querySelector("#prismaticColor")
let useRandomColor = false;

function createPixels(pixel){
    for (let i=0;i<(pixel*pixel);i++){
        const newPixel=document.createElement("div")
            newPixel.addEventListener('mouseenter',setColor);
        canvas.appendChild(newPixel);
        newPixel.classList.add("gridSizepixel");
        console.log("added")
    }
    canvas.style.gridTemplateColumns = `repeat(${pixel}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${pixel}, 1fr)`;
}


function getRandomColor(){
    var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function setColor(e){
    if(useRandomColor){
        e.target.style.backgroundColor = getRandomColor();
    } else {
        e.target.style.backgroundColor = colorPicker.value;
    }

}

prismatic.addEventListener("click", (e)=>{
    useRandomColor = !useRandomColor;
    prismatic.classList.toggle("active-mode", useRandomColor);
})


function deletePriv(){
    canvas.innerHTML = ""; 
}


selectSize.addEventListener("change",(e)=>{
    const selectedValue = selectSize.value;
    deletePriv()
    console.log("You selected:", selectedValue);
    createPixels(selectedValue)
})


let gridDefault=16;
createPixels(gridDefault);