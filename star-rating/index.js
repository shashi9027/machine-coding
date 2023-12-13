var rating = document.getElementsByClassName("star-rating")[0];
var star = document.querySelectorAll(".star")
document.addEventListener("click" , handleClick);

function handleClick(e){
    let currClicked = e.target.dataset.index;
    for(let i=0; i<star.length; i++){
        star[i].style.color = ""
    }
    for(let i=0; i<currClicked; i++){
        star[i].style.color = "yellow"
    }

    document.getElementById("count").textContent = currClicked;
    
    
}