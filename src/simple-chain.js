const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  masLink: [],
   getLength() {
  return this.masLink.length;
  },
  addLink(value) {
    if(value === null) value = 'null';
    this.masLink.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof(position) === 'number' && (position > 0) && (position <= this.masLink.length)){
   this.masLink.splice(position-1, 1);
    } else {
      this.masLink = [];
     throw Error ('You can\'t remove incorrect link!');
    }
    return this;
  },
  reverseChain() {
    this.masLink.reverse();
    return this;
  },
  finishChain() {
    let result = '( ' + this.masLink.join(' )~~( ') + ' )';
    this.masLink = [];
    return  result;
  }
};

module.exports = {
  chainMaker
};
