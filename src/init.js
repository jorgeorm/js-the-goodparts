const Objects = require('./playground/objects');

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

const objInstance = new Objects();

objInstance.testPrototypes();
objInstance.testForIn();
