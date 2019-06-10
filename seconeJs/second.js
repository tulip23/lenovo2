window.onload = function(){
			var oBtn = document.getElementsByClassName('seclist');
			var oInf = document.getElementsByClassName('clickPic');			
			console.log(oBtn)
			for (var i =0;i < oBtn.length;i++) {
				bind(i)
			}
			console.log(i)
			
			function bind(index){
				oBtn[i].onclick = function(){
//					alert(index)
					//对应的索引值对应的盒子
					if(oInf[index].style.display == 'block'){
						oInf[index].style.display = 'none';
//						oInf.style.transition = 'height .2s';
					}else{
						oInf[index].style.display = 'block';
					}
				}
			}
//------------------吸顶	-----------------
	var Nav = document.getElementById("header");
	var Naver = document.getElementById("head");				
	document.onscroll = function(){
		var oTop = document.documentElement.scrollTop
		console.log(document.documentElement.scrollTop)
//		距离顶部的距离为138.38px
		if(oTop >= 31.2){
			Nav.style.display = 'none';
			Naver.style.display = 'block';
		    Naver.style.top = 0;
		    Naver.style.position = 'fixed';
		   }else{
			Naver.style.display = 'none';
			Nav.style.display = 'block';
//		    Nav.style.position = 'static';
		   }
	}
			
			
			
}