const ratingNum = document.querySelectorAll(".rating_num")
const submitButton = document.querySelector(".submit_button")
const ratingContainer = document.querySelector(".rating-container")
const rating = document.querySelector(".rating")
const thankSection = document.querySelector(".thank_section")

ratingNum.forEach(ratingDiv=>ratingDiv.addEventListener("click" ,changeColortransition))

 function changeColortransition(e){
    ratingNum.forEach((ratingDiv)=> {ratingDiv.style.color="hsl(216, 12%, 54%)";ratingDiv.style.background= "hsl(225, 7%, 23%)"})
 e.target.style.background ="hsl(217, 12%, 63%)"
 e.target.style.color ="hsl(0, 0%, 100%)"
addRating(e)
}

submitButton.addEventListener("click",()=>{
    ratingContainer.style.display="none"
    thankSection.style.display="block"
})

function addRating(e){
    rating.innerText =  e.target.textContent
   
}

