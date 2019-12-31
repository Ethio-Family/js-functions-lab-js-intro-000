// write your code below!
function happyHolidays() {
  return "Happy holidays!"
}

function happyHolidaysTo(name) {
  return `Happy holidays, ${name}!`
}

function happyHolidayTo(holiday, name) {
  var holiday;
  var name;

  if(holiday === "Independence Day") {
    holiday = "Independence Day"
    name = "you"
    return `Happy ${holiday}, ${name}!`
  }

  if(holiday === "Happy New Year") {
    holiday = "Happy New Year"
    name = "everyone!"
    return `Happy ${holiday}, ${name}!`
  }

}
