const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  options.repeatTimes = options.repeatTimes || 1;
  options.separator =  options.separator || '+';
  
  if (typeof options.addition === 'boolean' || options.addition === null){
    options.addition = String(options.addition);
  }
  if (options.addition === undefined){
    options.addition = '';
  }
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.additionSeparator = options.additionSeparator || '|';
  result = [];
  for (let i = 1; i <= options.repeatTimes; i++) {
    result.push(String(str));
    for (a = 1; a <= options.additionRepeatTimes; a++) {
      result.push(String((options.addition)));
      if (a<options.additionRepeatTimes) result.push(String(options.additionSeparator));

      // for (k = 1; k < options.additionRepeatTimes -1; k++) {
      //   result.push(options.additionSeparator);
      //   for (let j = 1; j < options.repeatTimes-1; j++) {
      //     result.push(options.separator);
      //   }
      // }
    }
    if (i<options.repeatTimes)result.push(options.separator);
  }
 return result.join('');

}
console.log(repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' }));

module.exports = {
  repeater
};
