const productlist = document.querySelector('#product-list');
const searchinput = document.querySelector('#search-input');
const searchbtn = document.querySelector('#search-btn');
const categorybtns = document.querySelector('.category-btn');

function filterproduct(){
    const searchvalue = searchinput.value.toLowerCase();
    const productitems = document.querySelectorAll(".product-item");

    productitems.forEach(item =>{
        const title  =item.querySelector("h3").
        innerText.toLowerCase();
        const category = item.dataset.category;

        if(title.includes(searchvalue) || searchvalue == ""){
            item.style.display="block";
        }
        else{
            item.style.display="none";
        }
    })
}

function setCategory(e){
    categorybtns.forEach(btn=>btn.classList.remove("active"));

    e.target.classList.add("active");
        filterproduct();
    
}

searchbtn.addEventListener("click", filterproduct);
searchinput.addEventListener("keyup",filterproduct);
categorybtns.forEach(btn=>{
    btn.addEventListener("click",setCategory);
});

filterproduct();