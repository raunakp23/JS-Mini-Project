let input = document.querySelector('#input');
let button = document.querySelectorAll('button');

button.forEach(element =>{
    element.addEventListener("click",(e)=>{
        console.log(e.target.textContent);
        
        //for the display
        if(e.target.textContent === "C"){
            input.innerText = "";
        }
        else if(e.target.textContent === "<"){
            input.innerText = input.innerText.slice(0,-1);
        }
        else if(e.target.textContent === "="){
            input.innerText = eval(input.innerText);
        }
        else{
            input.innerText += e.target.textContent;
        }
        input.scrollLeft = input.scrollWidth;
    })
});