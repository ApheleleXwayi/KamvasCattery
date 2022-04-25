function weeklyWage(band, weeklyHours) {
    var wages = 0;
 var weeklyHoursList = weeklyHours.split(',')
for(let i= 0 ; i < weeklyHoursList.length; i++){

    if(weeklyHoursList.length < 6){
        return 'missing day';
        }

   else if(band == "A"){
        wages += 23 * weeklyHoursList[i] ;
    }

else if(band == "B"){
  wages += 37 * weeklyHoursList[i] ;

}
else if(band == "C"){
    wages += 51 * weeklyHoursList[i] ;
}

else{
    return 0;
}
}
  return wages
}