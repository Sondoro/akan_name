function getUserInputAndCalculateDay(){
  var year = prompt("Enter year:");
  var century = parseInt(year.substring(0,2));
  year = parseInt(year);
  var month = parseInt(prompt("Enter month;"));
  var day = parseInt(prompt("Enter day:"));

  var dayOfTheWeek = Math.round(( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + day ) % 7);

   return dayOfTheWeek   
}
