//02.吸顶	
//得到导航栏的位置
var Nav = document.getElementById("header");				
document.onscroll = function(){
	var oTop = document.documentElement.scrollTop
//					console.log(document.documentElement.scrollTop)
//					距离顶部的距离为53px
	if(oTop >= 0){
	      Nav.style.top = 0;
	      Nav.style.position = 'fixed';
	   }else if(oTop < 53)
	      Nav.style.position = 'static';
}