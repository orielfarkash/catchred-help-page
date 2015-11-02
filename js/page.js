
// class constructor
function Page (game,container,pageId) {
	var self=this;
	self.id=pageId;
	self.game=game;
	var html_content=document.querySelector('#'+pageId).innerHTML;
	self.container=container;
	self.el=document.createElement('div');
	self.el.innerHTML=html_content; 

// after show method for page objects
self.after_show=function(){
	var self=this;
	self.game.stopTimer();
};
}
// show method that append the page html to the div container
Page.prototype.show=function(){
	var self=this;
	self.container.innerHTML='';
	self.container.appendChild(self.el);
	
	self.after_show();
};

// return true if the id argument is the same as the current page id
Page.prototype.match=function(id){
	var self=this;
	return (self.id===id);
};
// 'home page' class that inherits from page class 
function homePage(game,container,pageId){
	var self=this;
	Page.call(self,game, container, pageId);
	

// after show method for 'home page' objects
  self.after_show=function(){
	
	self.game.setupEvents();
	
	
};
}
homePage.prototype = Object.create(Page.prototype);
