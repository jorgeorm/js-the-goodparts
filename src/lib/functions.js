Function.prototype.method = function(name, func) {
  if (!this.prototype[name]) {
    this.prototype[name] = func;
    return this;
  }
};


Function.method('curry', function() {
  let that = this;
  let outerArgs = arguments;
  return function() {
    return that.apply(null, outerArgs.concat(arguments));
  }
});
