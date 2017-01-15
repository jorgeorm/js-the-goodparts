'use strict';

/**
 * Contains all examples generated in the Chapter 3
 */
class Objects {
   /**
    * Pending to be implemented
    */
   constructor() {
      // Creates an object with a protype linked to the stooge object
      this.anotherStooge = Object.create(Objects.STOOGE);
      this.anotherStooge['propertyTwo'] = 'Do I kknow this shit!!';
   }

   /**
    * Performs a test on the prototypes by doing stuff
    */
   testPrototypes() {
      console.log('===Testing creationg of objects with prototypes');
      console.log('=> Original object');
      console.log('Stooge:', Objects.STOOGE);
      console.log('=> Object created based on Stooge prototype');
      console.log('Another Stooge: ', this.anotherStooge);
   }

   /**
    * Tests the for...in and its benefits/hard parts
    */
   testForIn() {
      console.log('===Testing Objects and iterating over its props');
      console.log('=> Iterating over anotherStooge');
      for (let prop in this.anotherStooge) {
         // Avoiding prototype chain
         if (this.anotherStooge.hasOwnProperty(prop)) {
            const element = this.anotherStooge[prop];
            console.log('  Property ', prop, '=', element);
         }
      }

      console.log('=> Iterating over object and digging property chain');
      for (let prop in this.anotherStooge) {
         // Skips inherited funcs.
         if (typeof this.anotherStooge[prop] !== 'function') {
            const element = this.anotherStooge[prop];
            console.log('  Property ', prop, '=', element);
         }
      }

      console.log(
         '=> Iterating over object and digging property chain',
         'controlling order'
      );

      const propNames = [
         'propertyOne',
         'propertyTwo',
      ]; // Use array to controll order over iteration

      for (let prop, i = 0; i < propNames.length; i++) {
         prop = propNames[i];
         const element = this.anotherStooge[prop];
         console.log('  Property ', prop, '=', element);
      }
   }
}

Objects.STOOGE = {
   propertyOne: 'Value 1',
};

module.exports = Objects;
