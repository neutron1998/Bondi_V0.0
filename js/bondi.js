// Catch Element 
var toTopBtn = document.querySelector("#top")



// To Top Button Component 
window.onscroll = function(e){
    console.log(window.scrollY);
    if( window.scrollY >= 700 ){
        console.log(toTopBtn.classList)
        toTopBtn.classList.add("active")
        console.log(toTopBtn.classList)
    }
}