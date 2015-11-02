var WINNER = "winner";
var SECONDS = 1000;
var TIMEOUT= 1 * SECONDS;
var FIRST_TIME=true;

function game(){
	
}

/*
* Sets up click event handlers on the divs and cached DOM elements
*/
game.prototype.setupEvents=function() {
	var self=this;
	self.el = {
 	sqr: document.querySelectorAll('.square'),
  	score: document.querySelector('.score input'),
  	currentWinner : document.querySelector('.winner')
	};
  if(FIRST_TIME){		
  for(var i=0;i<self.el.sqr.length;i++){
    self.el.sqr[i].addEventListener('click',self.checking.bind(self));
  }
  FIRST_TIME=false;}
};


/** 
 * Check if the item that generated the event
 * is a winning item and modify score accordingly.
 */
game.prototype.checking=function(ev) {
var self=this;
  if ( self.isWinner(ev.target) ) {
    self.addScore(5);
  }else{
    self.addScore(-5);
  }
  
  self.shuffle();
  self.restartTimer();
 };


/*
 * Randomize a new winner
 */
game.prototype.shuffle=function(){
  var self=this;
  self.el.currentWinner=document.querySelector('.winner');
  var nextWinner = _.sample(self.el.sqr);

  self.el.currentWinner.classList.remove(WINNER);
  nextWinner.classList.add(WINNER);
};

/*
 * Starts a new timer that will reduce score by 2
 */
var _timer_id;
game.prototype.restartTimer=function(){
	var self=this;
  clearTimeout(_timer_id);
  
  _timer_id = setTimeout(function() {
	self.shuffle();
    self.addScore(-2);
    self.restartTimer();
  }, TIMEOUT);
  
};
// Stop the time 
game.prototype.stopTimer=function(){
clearTimeout(_timer_id);	
};

/**
 * Check if el is a winner item
 */
game.prototype.isWinner=function(div) {
  return div.classList.contains(WINNER);
};

/*
* Modify score value on the page by adding delta
* to current value
*/
game.prototype.addScore=function(delta) {
  var self=this;
  var newValue = Number(self.el.score.value) + delta;
  self.el.score.value = newValue;
};


	

