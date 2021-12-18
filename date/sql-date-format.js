
/**
 * Check if the string has a number
 */
function hasNumber(string) {
  return /\d/.test(string)
}

/**
 * Function that set date in SQL format YYYY-MM-DD
 */
const dateToSqlFormat = (date) => {
  if (hasNumber(date)) {
    return new Date(date).toISOString().slice(0, 10).replace('T', ' ')
  }
  return date
}

const sqlDate = dateToSqlFormat(Date.now())

console.log(sqlDate)
