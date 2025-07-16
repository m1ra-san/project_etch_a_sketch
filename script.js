const canvas=document.querySelector(".canvas");
const selectSize=document.querySelector(".size-selector")


function createPixels(pixel){
    for (let i=0;i<(pixel*pixel);i++){
        const newPixel=document.createElement("div")
        canvas.appendChild(newPixel);
        newPixel.classList.add("gridSizepixel");
        console.log("added")
    }
    canvas.style.gridTemplateColumns = `repeat(${pixel}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${pixel}, 1fr)`;
}

function deletePriv(){
    canvas.innerHTML = ""; 
}


selectSize.addEventListener("change",(e)=>{
    const selectedValue = selectSize.value;
    deletePriv()
    console.log("You selected:", selectedValue);
    createPixels(selectedValue)
})


