let nameOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let nameOfMales  = ["Kwasi", "Kwado","Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
let nameOfFemales = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

function getDetails(){
    let year = parseInt(document.getElementById("year").value);
    let month = parseInt(document.getElementById("month").value);
    var date = parseInt(document.getElementById("date").value);
    var gender = document.getElementById("gender").value;
    console.log(year, month, date, gender)
}