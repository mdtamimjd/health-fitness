let hambar = document.querySelector('.hambar')
let closeButton = document.querySelector('.close_hambar')
let manu = document.getElementById("manuBar")

hambar.addEventListener("click",()=>{
    manu.style.display ="flex"
    hambar.style.display = "none"
    closeButton.style.display = "block"
})
closeButton.addEventListener("click",()=>{
    manu.style.display ="none"
    hambar.style.display = "block"
    closeButton.style.display = "none"
})