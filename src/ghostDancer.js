var makeGhostDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('bouncyDancer');
};

makeGhostDancer.prototype = Object.create(makeDancer.prototype);
makeGhostDancer.prototype.constructor = makeGhostDancer;
makeGhostDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
  this.$node.animate({borderRadius:"50%"});
  this.setPosition($("body").height() * Math.random(), $("body").width() * Math.random());
};