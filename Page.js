function Page (container,pageId) {
	var self=this;
	self.id=pageId;
	var html_content=document.querySelector('#'+pageId).innerHTML;
	self.container=container;
	self.el=document.createElement('div');
	self.el.innerHTML=html_content; 


self.after_show=function(){};
}
Page.prototype.Show=function(){
	var self=this;
	self.container.innerHTML='';
	self.container.appendChild(self.el);
	
	self.after_show();
};

// check if the id belongs to this page
Page.prototype.Idchecking=function(id){
	var self=this;
	return (self.id===id);
};

function homePage(container,pageId){
	var self=this;
	Page.call(self, container, pageId);
	


  self.after_show=function(){
  	//// cached DOM elements
	var el = {
 	sqr: document.querySelectorAll('.square'),
  	score: document.querySelector('.score input')
	};
	setupEvents(el);
};
}
homePage.prototype = Object.create(Page.prototype);
