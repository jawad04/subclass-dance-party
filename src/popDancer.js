// var makePopDancer = function(top, left, timeBetweenSteps) {
//   makeDancer.call(this, top, left, timeBetweenSteps);
//   this.$node.addClass('popDancer');
//   this.$node.attr("src", "http://purepng.com/public/uploads/large/purepng.com-super-mario-luigimariofictional-charactervideo-gamefranchisenintendodesigner-1701528624279pdkrj.png");
// };

// makePopDancer.prototype = Object.create(makeDancer.prototype);
// makePopDancer.prototype.constructor = makePopDancer;
// makePopDancer.prototype.step = function() {
//   makeDancer.prototype.step.call(this, this.timeBetweenSteps);
//   this.$node.animate({borderSpacing: -90}, {
//     step: function(now, fx) {
//       $(this).css('-webkit-transform','rotate('+now+'deg)'); 
//       $(this).css('-moz-transform','rotate('+now+'deg)');
//       $(this).css('transform','rotate('+now+'deg)');
//     },
//     duration:'slow'
//   },'linear');
//   this.$node.animate({borderSpacing: 90}, {
//     step: function(now, fx) {
//       $(this).css('-webkit-transform','rotate('+now+'deg)'); 
//       $(this).css('-moz-transform','rotate('+now+'deg)');
//       $(this).css('transform','rotate('+now+'deg)');
//     },
//     duration:'slow'
//   },'linear');
//   this.$node.animate({top: "+=300"}, 2000);
//   this.$node.animate({top: "-=300"}, 1000);
//   this.$node.animate({borderSpacing: 360}, {
//     step: function(now, fx) {
//       $(this).css('-webkit-transform','rotate('+now+'deg)'); 
//       $(this).css('-moz-transform','rotate('+now+'deg)');
//       $(this).css('transform','rotate('+now+'deg)');
//     },
//     duration:'slow'
//   },'linear');
//   this.$node.mouseenter(function() {
//     $(this).attr("src", "https://upload.wikimedia.org/wikipedia/it/6/6d/Luigi.png");
//   });
//   this.$node.mouseleave(function() {
//     $(this).attr("src", "http://purepng.com/public/uploads/large/purepng.com-super-mario-luigimariofictional-charactervideo-gamefranchisenintendodesigner-1701528624279pdkrj.png");
//   });
// };

class PopDancer extends window.Dancer {
  constructor(top, left, timeBetweenSteps) {
    super(top, left, timeBetweenSteps);
    this.$node.addClass('popDancer');
    this.$node.attr("src", "http://purepng.com/public/uploads/large/purepng.com-super-mario-luigimariofictional-charactervideo-gamefranchisenintendodesigner-1701528624279pdkrj.png");
  }

  step() {
    super.step.call(this, this.timeBetweenSteps);
    this.$node.animate({borderSpacing: -90}, {
      step: this.rotate,
      duration:'slow'
    },'linear');
    this.$node.animate({borderSpacing: 90}, {
    step: this.rotate,
    duration:'slow'
    },'linear');
    this.$node.animate({top: "+=300"}, 2000);
    this.$node.animate({top: "-=300"}, 1000);
    this.$node.animate({borderSpacing: 360}, {
    step: this.rotate,
    duration:'slow'
    },'linear');
    this.$node.mouseenter(function() {
    $(this).attr("src", "https://upload.wikimedia.org/wikipedia/it/6/6d/Luigi.png");
    });
    this.$node.mouseleave(function() {
      $(this).attr("src", "http://purepng.com/public/uploads/large/purepng.com-super-mario-luigimariofictional-charactervideo-gamefranchisenintendodesigner-1701528624279pdkrj.png");
    });
  }
  
  rotate(now, fx) {
    $(this).css('-webkit-transform','rotate('+now+'deg)'); 
    $(this).css('-moz-transform','rotate('+now+'deg)');
    $(this).css('transform','rotate('+now+'deg)');
  }
  
}

window.PopDancer = PopDancer;














