var makeGhostDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('ghostDancer');
  this.$node.attr("src", "https://upload.wikimedia.org/wikipedia/en/thumb/d/d1/Toad_3D_Land.png/220px-Toad_3D_Land.png")
};

makeGhostDancer.prototype = Object.create(makeDancer.prototype);
makeGhostDancer.prototype.constructor = makeGhostDancer;
makeGhostDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
  // this.setPosition($("body").height() * Math.random(), $("body").width() * Math.random());
    this.$node.animate({borderSpacing: 90}, {
    step: function(now, fx) {
      $(this).css('-webkit-transform','rotate('+now+'deg)'); 
      $(this).css('-moz-transform','rotate('+now+'deg)');
      $(this).css('transform','rotate('+now+'deg)');
    },
    duration:'slow'
  },'linear');
};