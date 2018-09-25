// Creates and returns a new dancer object that can step
// var makeDancer = function(top, left, timeBetweenSteps) {
//   this.timeBetweenSteps = timeBetweenSteps;
//   // use jQuery to create an HTML <span> tag
//   this.$node = $('<img src="http://www.stickpng.com/assets/images/584df3886a5ae41a83ddee06.png" class="dancer">');
//   this.step();
//   // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
//   // this one sets the position to some random default point within the body
//   this.setPosition(top, left);
// };

// makeDancer.prototype.step = function() {
//   setTimeout(this.step.bind(this), this.timeBetweenSteps);
// };
// makeDancer.prototype.setPosition = function(top, left) {
//   var styleSettings = {
//     top: top,
//     left: left
//   };
//   this.$node.css(styleSettings);
// };

class Dancer {
  constructor(top, left, timeBetweenSteps) {
    this.top = top;
    this.left = left;
    this.timeBetweenSteps = timeBetweenSteps;
    this.$node = $('<img src="http://www.stickpng.com/assets/images/584df3886a5ae41a83ddee06.png" class="dancer">');
    this.step();
    this.setPosition();
  }
  step() {
    setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
  setPosition(){
    var styleSettings = {
      top: this.top,
      left: this.left
    }
    this.$node.css(styleSettings);
  }
}

window.Dancer = Dancer;