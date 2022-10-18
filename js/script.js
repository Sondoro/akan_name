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
   if (month <=0 || month >12){
    alert("Invalid entry. Enter a number between 1 and 12!");
} 
  var day = parseInt(prompt("Enter day (DD):"));
   if (day===1||day===2||day===3||day===4||day===5||day===6||day===7||day===8||day===9||day===10||day===11||day===12||day===13||day===14||day===15||day===16||day===17||day===18||day===19||day===20||day===21||day===22||day===23||day===24||day===25||day===26||day===27||day===28||day===29||day===30||day===31
    ){
    return day;
    } else if (day!==1||day!==2||day!==3||day!==4||day!==5||day!==6||day!==7||day!==8||day!==9||day!==10||day!==11||day!==12||day!==13||day!==14||day!==15||day!==16||day!==17||day!==18||day!==19||day!==20||day!==21||day!==22||day!==23||day!==24||day!==25||day!==26||day!==27||day!==28||day!==29||day!==30||day!==31
    ){
    alert("Invalid! Enter a number between 1 and 31!");        
} 
  var dayOfTheWeek = Math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);
   return dayOfTheWeek   
}

function getGender(){
  var gender = prompt("Enter your gender (Male/Female)");
     if (gender=="Male"||gender=="Female"||gender=="male"||gender=="female"){
       return gender;
    }  else if (gender!="Male"||gender!="Female"||gender!="male"||gender!="female") {
      alert("Enter Male or Female. Cannot be blank!");
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