var container=document.querySelector('.page-container');
var Pages={};
var Games={};
Games.game1=new game();

Pages.gamepage=new homePage(Games.game1,container,'game-page');
Pages.helppage=new Page(Games.game1,container,'help-page');
window.location.hash='game-page';

Pages.gamepage.show();

window.addEventListener('hashchange',function(ev){
	var next_page_id=ev.target.location.hash;
	next_page_id=next_page_id.substring(1);
	for (prop in Pages) {
   		 if (!Pages.hasOwnProperty(prop)) {
       
     		   continue;
 	     }
         if (Pages[prop].match(next_page_id)){
         	Pages[prop].show();
         }
}
});



	




 
 
 
 

