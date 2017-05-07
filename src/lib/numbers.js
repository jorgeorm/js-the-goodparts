/**
 * integer, returns a integer representation of the number
 * @return {Number}
 */
Number.method('integer', function() {
  return Math[this < 0 ? 'ceil' : 'floor'](this);
});
