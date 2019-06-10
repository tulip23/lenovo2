window.onload = function(){
	//------------------吸顶	-----------------
	var Nav = document.getElementById("header");
	var Naver = document.getElementById("head");
	document.onscroll = function(){
		var oTop = document.documentElement.scrollTop;
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
	
//   //----------------tab切换--------------
	var oBtn = document.getElementsByClassName('btn');
	var oBox = document.getElementsByClassName('beaupic')[0];
	console.log(oBtn);
	for (var i =0;i < oBtn.length;i++) {
		console.log(oBtn[i]);
		bind(i)
	}
	console.log(i)
	
	function bind(index){
		oBtn[index].onclick = function(){
			var im = index+1;
			var path = 'img/tab/2'+im+'.jpg';
			console.log(im,path);
			oBox.setAttribute('src',path);
		}
	}	 
		
		
	//----------------求和---------------------	
	var oNum = document.getElementById('num');
	var oPrice = document.getElementById('price');
	var oreduce = document.getElementsByClassName('redbuy')[0];
	var oadd = document.getElementsByClassName('addbuy')[0];
	
	oadd.onclick = function(){
		oNum.value = parseInt(oNum.value) + 1;
		oPrice.value = parseInt(oPrice.value) + 1198.00;
	}
	oreduce.onclick = function(){
		if(oNum.value<=0){
			oNum.value.value = 0;
		}else{
			oNum.value = parseInt(oNum.value) - 1;
		}
	}
		if(oPrice.value <= 1198.00)
		{
			oPrice.value = 1198.00;
		}
		else{
			oPrice.value = parseInt(oPrice.value) - 1198.00;
			console.log(oPrice.value);
		}
		
		var rTop = document.getElementById('fix07');
		rTop.onclick = function(){
			document.documentElement.scrollTop = 0;
		}
		
		//----------------------onmouseon onmouseout-----------------------
		var display1 = document.getElementById('fix01');
		var block1 = document.getElementById('fix11');
		display1.onmouseover = function(){
			block1.style.display = 'block';
		}
		display1.onmouseout = function(){
			block1.style.display = 'none';
		}
		
		var display2 = document.getElementById('fix02');
		var block2 = document.getElementById('fix12');
		display2.onmouseover = function(){
			block2.style.display = 'block';
		}
		display2.onmouseout = function(){
			block2.style.display = 'none';
		}
		
		var display3 = document.getElementById('fix05');
		var block3 = document.getElementById('fix13');
		display3.onmouseover = function(){
			block3.style.display = 'block';
		}
		display3.onmouseout = function(){
			block3.style.display = 'none';
		}
		
		var display4 = document.getElementById('fix06');
		var block4 = document.getElementById('fix14');
		display4.onmouseover = function(){
			block4.style.display = 'block';
		}
		display4.onmouseout = function(){
			block4.style.display = 'none';
		}
		
   }
   