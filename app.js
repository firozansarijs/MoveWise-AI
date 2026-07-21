const info = document.querySelector(".information");
const country = document.querySelector(".country-select");
const city = document.querySelector(".city-select");
const cost = document.querySelector(".budget-input")
const sector = document.querySelector(".purpose");
const btn = document.querySelector(".analyze-btn");
const result = document.querySelector(".result-card");
const house = document.querySelector(".housing");
const travel = document.querySelector(".transport");
const eat = document.querySelector(".food");
const save = document.querySelector(".savings");
const suggestion = document.querySelector(".advice");
const estimate = document.querySelector(".estimated-cost");

fetch("https://countriesnow.space/api/v0.1/countries")
.then((response) => {
    response.json()
});

function generateHousing() {
if (sector.value == "Student") {
    house.textContent = "Shared Apartment";
} else if (sector.value == "Working Professional") {
    house.textContent = "1 BHK Apartment";
} else if (sector.value == "Tourist") {
    house.textContent = "Hotel";
} else if (sector.value == "Family") {
    house.textContent = "2 BHK Apartment";
}
}
 function generateTransport() {
    if(cost.value > 10000){
        travel.textContent = "Own Car / Taxi";
    }else if(cost.value <= 1000){
        travel.textContent = "Public Bus";
    }else{
    travel.textContent = "Metro + Bus";
    }
 }
 function generateFood() {
    if(cost.value > 10000){
        eat.textContent = "Restaurant"; 
    }else if(cost.value <= 1000){
        eat.textContent = "Cook at Home";
    }else{
        eat.textContent = "Mix of Home & Restaurant";
    }
 }
 function generateSavings() {
     if(cost.value > 10000){
         save.textContent = "Save 40% of your income";
         
        }else if(cost.value <= 1000){
            save.textContent = "Very Limited Savings"; 
        }else{
            save.textContent = "Save 15% - 20%";  
        } 
    }
    function generateAdvice() {
    if(sector.value == "Student"){
        suggestion.textContent = "Choose shared housing to save money.";
    }else if(sector.value == "Working Professional"){
        suggestion.textContent = "Stay close to your workplace.";
    }else if(sector.value == "Tourist"){
        suggestion.textContent = "Book hotels near tourist attractions.";
    }else if(sector.value == "Family"){

        suggestion.textContent =  "Choose a safe family-friendly neighborhood.";
    }
    }
    function generateEstimate() {
    if(cost.value > 10000){
        estimate.textContent = "8,000 - 10,000/month";
    }else if(cost.value <= 1000){
        estimate.textContent = "Around 900/month";  
    }else{
        estimate.textContent = "2,000 - 5,000/month";
    }
    }

btn.addEventListener("click", () => {
    if(cost.value.trim() == ""){
      alert("Please enter your monthly budget.");
      return;
    }
    generateHousing();
    generateTransport();
    generateFood();
    generateSavings();
    generateAdvice();
    generateEstimate();
});
    


