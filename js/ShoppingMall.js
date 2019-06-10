window.onload = function(){
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
//-------------------轮播--------------------

	var oPicsBox = document.getElementById('picsbox');
	var oPic = document.getElementsByClassName('pic');
	var oBefore = document.getElementById('before');
	var oNext = document.getElementById('next');	
	movebox();
	
	//定义一个全局变量iNow
	var iNow = 0;

	//定时器 						
	function movebox(){
		timer = setInterval(function(){
			iNow++;
			console.log('zidong'+iNow);
			
			if(iNow>oPic.length-1){
				iNow = 0;
				move();
				oPicsBox.style.transition = '';
			}else{
				oPicsBox.style.transition = 'left .2s';
				move();
			}
		},3000)	
	}
	
	//整个ul向左移动800像素
	function move(){			
		var movel = -(iNow)*1519;
		console.log(movel)
		//拼接 800和px
		oPicsBox.style.left = movel + 'px';
	}
	
	//向前
	oBefore.onclick = function(){
		clearInterval(timer);
		iNow -- ;
		if(iNow<0){
			iNow = oPic.length-1;
		}
		console.log('前'+iNow);
		move();
		movebox();
	}
	//向后
	oNext.onclick = function(){
		clearInterval(timer);
		iNow ++ ;
		if(iNow>oPic.length-1){
			iNow = 0;
		}
		console.log('后'+iNow);
		move();
		movebox();
	}

}
