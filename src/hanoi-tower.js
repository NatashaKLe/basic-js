const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  const turns1 = (Math.pow(2, disksNumber) - 1);
  const seconds1 = Math.floor(turns1 / turnsSpeed * 3600);
  let result = {};
  result.turns = turns1;
  result.seconds = seconds1;
  return result;
}

module.exports = {
  calculateHanoi
};
