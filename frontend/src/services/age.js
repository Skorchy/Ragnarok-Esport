/**
 * return the age from a birthday date
 * 
 * @param {number} year 
 * @param {number} month 
 * @param {number} day 
 * 
 * @returns {number}
 */
export function getAge(year, month, day) {
  const birthday = new Date(year, month, day);
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}