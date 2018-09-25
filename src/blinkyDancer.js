// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   makeDancer.call(this, top, left, timeBetweenSteps);
//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function
// };
// makeBlinkyDancer.prototype = Object.create(makeDancer.prototype);
// makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
// makeBlinkyDancer.prototype.step = function() {
//   makeDancer.prototype.step.call(this, this.timeBetweenSteps);
//   this.$node.toggle();
// };

class BlinkyDancer extends window.Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps)
  }
  
  step() {
    super.step.call(this, this.timeBetweenSteps);
    this.$node.toggle();
  }
}

window.BlinkyDancer = BlinkyDancer;