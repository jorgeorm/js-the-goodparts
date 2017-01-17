'use strict';

/**
 * Constructor created for testing puroposes
 * If this function is invoqued with the new prfix, then a new object will be
 * created with a hidden link to the value of the function's prototype member,
 * and 'this' will be bound to the new object.
 * The use of this style of constructor methods are not recomended.
 * @param {Object} data
 */
const ConstructorTest = function(data) {
  this.data = data;
};

/**
 * Method added to the Objecte returned by the Constructor function
 * @return {string}
 */
ConstructorTest.prototype.getStatus = function() {
  return this.data.status || 'undefined: constructor not called';
};

/**
 * Contains all examples from chapter 4 Functions
 */
class Functions {
  /**
   * Instances the Functions class.
   */
  constructor() {
    this.invokeObject = {
      value: 1,
      // Method invocation pattern, function is declared as object property
      // the 'this' is bound to the invokeObject
      increment: function(inc) {
        this.value += typeof inc === 'number' ? inc : 1;
      },
      // Method to be used by a list of arguments in Apply Invocation Pattern
      multiply: function (factor) {
         const factorCleaned = typeof factor === 'number' ? factor : 1;
         return this.value * factorCleaned;
      }
    };
  }

  /**
   * Performs a test invocating private functions inside this class
   */
  testInvocation() {
    console.log('=== Testing The Method Invocation Parttern');
    console.log('=> Original value of object', this.invokeObject.value);
    this.invokeObject.increment();
    console.log(
      '=> New value of object after method invocation',
      this.invokeObject.value
    );

    // Workaround so the inner function has access to the calle scope
    const that = this;
    /**
     * In Function invocation Pattern the 'this' is bound to the global object.
     * @param {number} valA Attribute to be multipled
     * @return {number}
     */
    function _functionInvocation(valA) {
      return valA * that.invokeObject.value;
    }
    console.log('=== Testing The Function Invocation Parttern');
    console.log('=> Original value of object', this.invokeObject.value);
    const scalar = _functionInvocation(this.invokeObject.value);
    console.log('=> Value produced by function invocation', scalar);
    console.log('=> New value of object', this.invokeObject.value);

    console.log('=== Testing the Constructor Invocation Pattern');
    // console.log(
    //   '=> Status of constructor not called by new',
    //   ConstructorTest.getStatus()
    // );
    const myConstructedObject = new ConstructorTest({status: 'created'});
    console.log(
      '=> Status of constructed object',
      myConstructedObject.getStatus()
    );

    console.log('=== Testing the Apply Invocation Pattern');
    // The apply method let us invoke a function over a set of arguments
    // specifying the this function argument, requires first the value bound to
    // 'this' and the list of parameters.
    const params = [2, 3, 4];
    let partial = 0;
    for(let i = 0; i < params.length; i++) {
      partial = this.invokeObject.multiply.apply({value: 3}, [params[i]]);
      console.log(
        '=> apply multiply method from the invokeObject with this bounded to',
        {value: 3},
        'to',
        params[i],
        '=',
        partial
      );
    }
  }

}

module.exports = Functions;
