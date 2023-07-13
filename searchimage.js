const formWrapper = document.querySelector('.form-wrapper');
const form = document.querySelector('#form');
const searchInput = document.querySelector('#searchInput'); 
const buttonWrapper = document.querySelector('.button-wrapper'); 
const searchButton = document.querySelector('#search-button'); 
const clearButton = document.querySelector('#clear-button'); 
const imageListWrapper =document.querySelector('.imageList-wrapper');

runEventListener()
function runEventListener(){
    form.addEventListener("submit",search)
    clearButton.addEventListener("click",clear)
}
function clear(){
    searchInput.value="";
    // Array.from(imageListWrapper.children).forEach((child)=>child.remove())
    imageListWrapper.innerHTML="";
}

function search(e){
    const value = searchInput.value.trim();
    
    fetch(`https://api.unsplash.com/search/photos?query=${value}`,{
        method:"GET",
        headers:{
            Authorization: "Client-ID 57HUdbkj8k0LGpr4ARh9yjaO_yZeV25V4AEwPwwir80"
        }
})
    .then((res)=>res.json())
    .then((data)=>{Array.from(data.results).forEach((image)=>{
        addImageToUI(image.urls.small)})})
   
    .catch((err)=>console.log(err));
    e.preventDefault();
}

function addImageToUI(url){
 const div = document.createElement("div");
 div.className="card";

 const img = document.createElement("img");
 img.setAttribute("src",url);
 img.width='400';
 img.height='400';

 div.appendChild(img);
 imageListWrapper.appendChild(div);
}