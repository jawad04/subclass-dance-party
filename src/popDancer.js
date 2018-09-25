var makePopDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('popDancer');
  this.$node.attr("src", "http://purepng.com/public/uploads/large/purepng.com-super-mario-luigimariofictional-charactervideo-gamefranchisenintendodesigner-1701528624279pdkrj.png");
};

makePopDancer.prototype = Object.create(makeDancer.prototype);
makePopDancer.prototype.constructor = makePopDancer;
makePopDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
  this.$node.animate({borderSpacing: -90}, {
    step: function(now, fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
  },'linear');
  this.$node.animate({borderSpacing: 90}, {
    step: function(now, fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
  },'linear');
  this.$node.animate({top: "+=300"}, 2000);
  this.$node.animate({borderSpacing: 360}, {
    step: function(now, fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
  },'linear');
  this.$node.animate({top: "-=300"}, 1000)
};