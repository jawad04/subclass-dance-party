// var makeGhostDancer = function(top, left, timeBetweenSteps) {
//   makeDancer.call(this, top, left, timeBetweenSteps);
//   this.$node.addClass('ghostDancer');
//   this.$node.attr("src", "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Toad_3D_Land.png/220px-Toad_3D_Land.png")
// };

// makeGhostDancer.prototype = Object.create(makeDancer.prototype);
// makeGhostDancer.prototype.constructor = makeGhostDancer;
// makeGhostDancer.prototype.step = function() {
//   makeDancer.prototype.step.call(this, this.timeBetweenSteps);
//   // this.setPosition($("body").height() * Math.random(), $("body").width() * Math.random());
//   doBounce(this.$node, 3, '10px', 30);  
// };

// function doBounce(element, times, distance, speed) {
//   for(i = 0; i < times; i++) {
//       element.animate({marginTop: '-='+distance},speed)
//           .animate({marginTop: '+='+distance},speed);
//   }        
// }

class GhostDancer extends window.Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('ghostDancer');
    this.$node.attr("src", "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Toad_3D_Land.png/220px-Toad_3D_Land.png")
  }
  
  step() {
    super.step.call(this, this.timeBetweenSteps);
    this.doBounce(this.$node, 3, '10px', 30);
  }
  
  doBounce(element, times, distance, speed) {
    for(var i = 0; i < times; i++) {
      element.animate({marginTop: '-='+distance},speed)
        .animate({marginTop: '+='+distance},speed);
    } 
  }
}
window.GhostDancer = GhostDancer;