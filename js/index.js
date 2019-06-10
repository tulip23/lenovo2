window.onload = function(){
	
	$('header').load("commonHtml/demo_index.html");
	
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
		var movell = -(iNow)*1519;
		console.log(movell)
		//拼接 800和px
		oPicsBox.style.left = movell + 'px';
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


//底部水平轮播
	var olist = document.getElementById('list');
	var oPic = document.getElementsByClassName('across');
	var oforward = document.getElementById('forward');
	var oback = document.getElementById('back');	
//	movebox1();
	
	//定义一个全局变量iNow
	var iNoww = 0;	
	//整个ul向左移动800像素
	function moveleft(){			
		var movel = -(iNoww)*399.75;
		console.log(movel)
		//拼接 800和px
		olist.style.left = movel + 'px';
	}
	
	//向前
	oforward.onclick = function(){
//		clearInterval(timer);
		iNoww -- ;
		if(iNoww<=0){
			iNoww = oPic.length-7;
		}
		console.log('前'+iNoww);
		moveleft();
		olist.style.transition = 'left .3s';
	}
	//向后
	oback.onclick = function(){
//		clearInterval(timer);
		iNoww ++ ;
		if(iNoww>oPic.length-1){
			iNoww = 0;
		}
		console.log('后'+iNoww);
		moveleft();
		olist.style.transition = 'left .3s';
	}
	
//-------------------------企业轮播---------------------	
		var oPicBtn = document.getElementsByClassName('picBtn');
		var oBigPic = document.getElementsByClassName('bigPic');	
		slider()
		function slider(){
			
			inter ( );
			
			var iNow = 0;
			var timer;
			
			for(var i = 0;i<oPicBtn.length;i++){
				console.log(i)
				bind(i)
			}
			
			function bind(index){
				oPicBtn[index].onmouseover= function(){
					clearInterval(timer);
					iNow = index;
					console.log('dianji'+index )
					changePic( index )
					inter()
				}
			}
			
			function changePic ( index ){						
				for(var j = 0;j<oBigPic.length;j++){
					oBigPic[j].style.opacity = 0;
					if (j==index) {
						oBigPic[index].style.opacity = 1;
					}
				}
			}
			//定时器 
			function inter ( ){						
				timer = setInterval(function(){
					iNow++;
					console.log('zidong'+iNow)
					if( iNow>3 ){
						iNow = 0
					}
					changePic ( iNow )
				},2000)
			}
			//向前
//			oBefore.onmouseover = function(){
//				clearInterval(timer);
//				iNow -- ;
//				if(iNow<0){
//					iNow = oBigPic.length-1;
//				}
//				console.log('前'+iNow);
//				changePic( iNow );
//				inter();
//			}
//			//向后
//			oNext.onmouseover = function(){
//				clearInterval(timer);
//				iNow ++ ;
//				if(iNow>oBigPic.length-1){
//					iNow = 0;
//				}
//				console.log('后'+iNow);
//				changePic( iNow );
//				inter();
//			}					
		}	
	
	
}


