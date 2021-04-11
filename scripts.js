let nameOfDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
let nameOfMales  = ["Kwasi", "Kwado","Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
let nameOfFemales = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

function getDetails(){
    let year = parseInt(document.getElementById("year").value);
    let month = parseInt(document.getElementById("month").value);
    let date = parseInt(document.getElementById("date").value);
    let gender = document.getElementById("gender").value;
    //console.log(year, month, date, gender)
    if (month < 1 || month > 12) {
        alert("invalid month");
    }
    if (year < 1900 || year > 2029) {
        alert("invalid year")
    }
    let d = new Date(year, month, date);
    console.log(d)
}
