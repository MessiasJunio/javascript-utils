/* Getting date by week number, the inverse of MySQL WEEK() function */

const getDateByWeekNumber = (weekNumber, year) => {
  var date = new Date(year, 0, 1 + (weekNumber - 1) * 7)
  var dow = date.getDay()
  var ISOweekStart = date

  if (dow <= 4) {
    ISOweekStart.setDate(date.getDate() - date.getDay() + 1)
  } else {
    ISOweekStart.setDate(date.getDate() + 8 - date.getDay())
  }

  return ISOweekStart
}

const dateByWeekNumber = getDateByWeekNumber(2, 2021)

console.log(dateByWeekNumber)
