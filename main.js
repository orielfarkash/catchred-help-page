var container=document.querySelector('.page-container');
var Pages={};

Pages.gamepage=new homePage(container,'game-page');
Pages.helppage=new Page(container,'help-page');
window.location.hash='game-page';

Pages.gamepage.Show();

window.addEventListener('hashchange',function(ev){
	var temp=ev.target.location.hash;
	temp=temp.substring(1);
	for (prop in Pages) {
   		 if (!Pages.hasOwnProperty(prop)) {
       
     		   continue;
 	     }
         if (Pages[prop].Idchecking(temp)){
         	Pages[prop].Show();
         }
}
});



	




 
 
 
 

