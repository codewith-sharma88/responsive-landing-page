 // Search Button

document.getElementById("searchBtn")
.addEventListener("click", () => {

const destination =
document.getElementById("destination").value;

if(destination === ""){
alert("Please enter a destination");
}
else{
alert(`Searching trips for ${destination}`);
}

});


// Hero Button

document.querySelector(".cta-btn")
.addEventListener("click", () => {

alert("Welcome to TravelNow!");
});


// Package Booking

document
.querySelectorAll(".package-btn")
.forEach(button => {

button.addEventListener("click", () => {

const packageName =
button.parentElement
.querySelector("h3").innerText;

alert(`Booking ${packageName}`);
});

});


// Contact Form

document.getElementById("contactForm")
.addEventListener("submit", (e)=>{

e.preventDefault();

alert("Message sent successfully!");

e.target.reset();

});


// Back To Top Button

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll", () => {

    if(window.scrollY > 400){
        topBtn.style.display = "block";
    }
    else{
        topBtn.style.display = "none";
    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });

});