const MALE_NAMES = ["Kofi", "Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw"]
const FEMALE_NAMES = ["Afua", "Ama", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa"]
const DAYS_OF_THE_WEEK = ["Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"]

function getUserInputAndCalculateDay(){
  var year = prompt("Enter year (YYYY):");
   if (year === ""){
    alert("Enter year (YYYY). Cannot be blank!");
}
  var century = parseInt(year.substring(0,2));
  year = parseInt(year);
  var month = parseInt(prompt("Enter month (MM);"));
   if (month!=month){
    alert("Enter month (MM). Cannot be blank!");
    } else if (month <=0 || month >12){
      alert("Invalid entry. Enter a number between 1 and 12!");
} 
var day = parseInt(prompt("Enter day (DD):"));
   if (day!=day) {
    alert("Enter Day (DD). Cannot be blank!")
    } else if (day <=0 || day >31){
      alert("Invalid entry. Enter a number between 1 and 31!");        
}  
  var dayOfTheWeek = Math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);
   return dayOfTheWeek   
}

function getGender(){
  var gender = prompt("Enter your gender (Male/Female)");
    if (gender=="Male"||gender=="Female"||gender=="male"||gender=="female"||gender=="MALE"||gender=="FEMALE"){
      return gender;
        } else if (gender!="Male"||gender!="Female"||gender!="male"||gender!="female"||gender!="MALE"||gender!="FEMALE") {
          alert("Enter your gender (Male or Female). Cannot be blank!");
}
}

function main(){
  var day = getUserInputAndCalculateDay();
  var gender = getGender();
  var akanName = null;

  if (gender.toLowerCase().startsWith('f')){
    akanName = FEMALE_NAMES[day];
  } else {
    akanName = MALE_NAMES[day];
  }
  alert("Your Akan name is " + akanName);
}