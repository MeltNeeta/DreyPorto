// Projects.html

// Projects.html - filter

// Tombol
const allFilt = document.getElementById("allFil");
const webOnly = document.getElementById("webFil");
const desOnly = document.getElementById("desFil");
const serOnly = document.getElementById("sertifFil");

// Card
const webCon = document.querySelectorAll(".web");
const desCon = document.querySelectorAll(".design");
const serCon = document.querySelectorAll(".stf");

// Function 
allFilt.addEventListener("click", function(){
    webCon.forEach(card => card.style.display = 'block');
    desCon.forEach(card => card.style.display = 'block');
    serCon.forEach(card => card.style.display = 'block');
});
webOnly.addEventListener("click", function(){
    webCon.forEach(card => card.style.display = 'block');
    desCon.forEach(card => card.style.display = 'none');
    serCon.forEach(card => card.style.display = 'none');
});
desOnly.addEventListener("click", function(){
    webCon.forEach(card => card.style.display = 'none');
    desCon.forEach(card => card.style.display = 'block');
    serCon.forEach(card => card.style.display = 'none');
});
serOnly.addEventListener("click", function(){
    webCon.forEach(card => card.style.display = 'none');
    desCon.forEach(card => card.style.display = 'none');
    serCon.forEach(card => card.style.display = 'block');
});

console.log("hai")