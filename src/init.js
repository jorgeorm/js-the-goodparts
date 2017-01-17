const Objects = require('./playground/objects');
const Functions = require('./playground/functions');

Function.prototype.method = (name, func) => {
   this.prototype[name] = func;
   return this;
};

if (typeof Object.create !== 'function') {// If no create function is created
   /**
   * In case there is no create function of the Objects
   * @param {Object} o Object that is going to be used as prototype
   * @return {Function} Function whose protoype is the one entered as parameter
   */
   Object.create = (o) => {
      const F = () => {};
      F.prototype = o;
      return new F();
   };
}

// Chapter 2: Objects
// const objInstance = new Objects();
// objInstance.testPrototypes();
// objInstance.testForIn();

// Chapter 3: Functions
const funInstance = new Functions();
funInstance.testInvocation();
