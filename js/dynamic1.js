	//--------------------动态创建---------------------
var srr = [{
			"src": "img/dynamic/floor1.jpg",
			"name": "YOGA &nbsp;920&nbsp;13.9英寸触控笔记本晨曦金",
			"price": "￥8999.00"
		},
		{
			"src": "img/dynamic/floor2.jpg",
			"name": "扬天V130(110升级版)15.6英寸商用笔记本集显灰色",
			"price": "￥2299.00"
		},
		{
			"src": "img/dynamic/floor3.jpg",
			"name": "联想Z5舒曼黑6GB——64GB",
			"price": "￥1098.00"
		},
		{
			"src": "img/dynamic/floor4.jpg",
			"name": "联想(ThinkVision)X2323英寸IPS硬屏显示器",
			"price": "￥999.00"
		}]

var sro= [{
			"src1": "img/dynamic/floor22.jpg",
			"name1": "小新Air13&nbsp;13.3英寸",
			"inf1": "￥8999.00",
			"price1": "￥999.00"
		},
		{
			"src1": "img/dynamic/floor22.jpg",
			"name1": "小新Air13&nbsp;13.3英寸",
			"inf1": "￥8999.00",
			"price1": "￥999.00"
		},
		{
			"src1": "img/dynamic/floor23.jpg",
			"name1": "小新Air13&nbsp;13.3英寸",
			"inf1": "￥8999.00",
			"price1": "￥999.00"
		},
		{
			"src1": "img/dynamic/floor24.jpg",
			"name1": "小新Air13&nbsp;13.3英寸",
			"inf1": "￥8999.00",
			"price1": "￥999.00"
		}
		,
		{
			"src1": "img/dynamic/floor26.jpg",
			"name1": "小新Air13&nbsp;13.3英寸",
			"inf1": "￥8999.00",
			"price1": "￥999.00"
		},
		{
			"src1": "img/dynamic/floor27.jpg",
			"name1": "小新Air13&nbsp;13.3英寸",
			"inf1": "￥8999.00",
			"price1": "￥999.00"
		},
		{
			"src1": "img/dynamic/floor28.jpg",
			"name1": "小新Air13&nbsp;13.3英寸",
			"inf1": "￥8999.00",
			"price1": "￥999.00"
		},
		{
			"src1": "img/dynamic/floor28.jpg",
			"name1": "小新Air13&nbsp;13.3英寸",
			"inf1": "￥8999.00",
			"price1": "￥999.00"
		}
]
var srt= [{
			"src2": "img/dynamic/floor31.jpg",
			"name2": "小新Air13&nbsp;13.3英寸",
			"inf2": "￥8999.00",
			"price2": "￥999.00"
		},
		{
			"src2": "img/dynamic/floor32.jpg",
			"name2": "小新Air13&nbsp;13.3英寸",
			"inf2": "￥8999.00",
			"price2": "￥999.00"
		},
		{
			"src2": "img/dynamic/floor33.jpg",
			"name2": "小新Air13&nbsp;13.3英寸",
			"inf2": "￥8999.00",
			"price2": "￥999.00"
		},
		{
			"src2": "img/dynamic/floor34.jpg",
			"name2": "小新Air13&nbsp;13.3英寸",
			"inf2": "￥8999.00",
			"price2": "￥999.00"
		}
		,
		{
			"src2": "img/dynamic/floor35.jpg",
			"name2": "小新Air13&nbsp;13.3英寸",
			"inf2": "￥8999.00",
			"price2": "￥999.00"
		},
		{
			"src2": "img/dynamic/floor36.jpg",
			"name2": "小新Air13&nbsp;13.3英寸",
			"inf2": "￥8999.00",
			"price2": "￥999.00"
		},
		{
			"src2": "img/dynamic/floor37.jpg",
			"name2": "小新Air13&nbsp;13.3英寸",
			"inf2": "￥8999.00",
			"price2": "￥999.00"
		},
		{
			"src2": "img/dynamic/floor38.jpg",
			"name2": "小新Air13&nbsp;13.3英寸",
			"inf2": "￥8999.00",
			"price2": "￥999.00"
		}
]
var srtr= [{
			"src3": "img/dynamic/floor41.jpg",
			"name3": "小新Air13&nbsp;13.3英寸",
			"inf3": "￥8999.00",
			"price3": "￥999.00"
		},
		{
			"src3": "img/dynamic/floor42.jpg",
			"name3": "小新Air13&nbsp;13.3英寸",
			"inf3": "￥8999.00",
			"price3": "￥999.00"
		},
		{
			"src3": "img/dynamic/floor43.jpg",
			"name3": "小新Air13&nbsp;13.3英寸",
			"inf3": "￥8999.00",
			"price3": "￥999.00"
		},
		{
			"src3": "img/dynamic/floor44.jpg",
			"name3": "小新Air13&nbsp;13.3英寸",
			"inf3": "￥8999.00",
			"price3": "￥999.00"
		}
		,
		{
			"src3": "img/dynamic/floor45.jpg",
			"name3": "小新Air13&nbsp;13.3英寸",
			"inf3": "￥8999.00",
			"price3": "￥999.00"
		},
		{
			"src3": "img/dynamic/floor46.jpg",
			"name3": "小新Air13&nbsp;13.3英寸",
			"inf3": "￥8999.00",
			"price3": "￥999.00"
		},
		{
			"src3": "img/dynamic/floor47.jpg",
			"name3": "小新Air13&nbsp;13.3英寸",
			"inf3": "￥8999.00",
			"price3": "￥999.00"
		},
		{
			"src3": "img/dynamic/floor48.jpg",
			"name3": "小新Air13&nbsp;13.3英寸",
			"inf3": "￥8999.00",
			"price3": "￥999.00"
		}
]
window.onload = function(){	
			var oBox = document.getElementById('dynamic');
			var str ='';
			
			for(var i=0;i<srr.length;i++){
				var path = srr[i].src;
				var gname = srr[i].name;
				var price = srr[i].price;
				
		 	str += `<div id="fbox">
			<div id="picb">
				<img src=${path} />
			</div>
			<div id="descb">
				<div id="bigti">
					<h4>${gname}</h4>
				</div>
				<div id="price_box">
					<div id="price_left">
						${price}
					</div>
					<div id="price_right">
						立即抢购
					</div>
				</div>
			</div>
			</div>`;
	  	console.log( str )
	  	oBox.innerHTML = str;
	  	document.getElementById('dynamic').innerHTML = str;	
	}
	console.log(oBox);
	
	//-------------------第二个动态创建----------------
		var oBoxone = document.getElementById('floorone');
		var str1 ='';
		
		for(var i=0;i<sro.length;i++){
			var path1 = sro[i].src1;
			var gname1 = sro[i].name1;
			var ginf1 = sro[i].inf1;
			var price1 = sro[i].price1;
			
	 	str1 += `<div id="flobox">
			<div id="picbo">
				<img src=${path1} id="ppc"/>
			</div>
			<div id="descbo">
				<p id="up">${gname1}</p>
				<p id="center">${ginf1}</p>
				<p id="down">${price1}</p>
			</div>
		</div>`;
	  	console.log( str1 )
	  	oBoxone.innerHTML = str1;
	  	document.getElementById('floorone').innerHTML = str1;	
	}
console.log(oBoxone);	

	//-------------------第三个动态创建----------------
		var oBoxtwo= document.getElementById('floortwo');
		var str2 ='';
		
		for(var i=0;i<srt.length;i++){
			var path2 = srt[i].src2;
			var gname2 = srt[i].name2;
			var ginf2 = srt[i].inf2;
			var price2 = srt[i].price2;
			
	 	str2 += `<div id="floboxt">
			<div id="picbot">
				<img src=${path2} id="ppc"/>
			</div>
			<div id="descbot">
				<p id="upt">${gname2}</p>
				<p id="centert">${ginf2}</p>
				<p id="downt">${price2}</p>
			</div>
		</div>`;
	  	console.log( str2 )
	  	oBoxtwo.innerHTML = str2;
	  	document.getElementById('floortwo').innerHTML = str2;	
	}
console.log(oBoxtwo);

	//-------------------第四个动态创建----------------
		var oBoxthree= document.getElementById('floorthree');
		var str3 ='';
		
		for(var i=0;i<srtr.length;i++){
			var path3 = srtr[i].src3;
			var gname3 = srtr[i].name3;
			var ginf3 = srtr[i].inf3;
			var price3 = srtr[i].price3;
			
	 	str3 += `<div id="flobox3">
			<div id="picbo3">
				<img src=${path3} id="ppc"/>
			</div>
			<div id="descbo3">
				<p id="up3">${gname3}</p>
				<p id="center3">${ginf3}</p>
				<p id="down3">${price3}</p>
			</div>
		</div>`;
	  	console.log(str3)
	  	oBoxthree.innerHTML = str3;
	  	document.getElementById('floorthree').innerHTML = str3;	
	}
console.log(oBoxthree);	

//---------------------------吸顶------------------------
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
		var rTop = document.getElementById('fix07');
	rTop.onclick = function(){
		document.documentElement.scrollTop = 0;
	}

}
//	$('#picbo').onmouseover(function() {
//		$('#ppc').animate({
//		 left: 10
//		}, "slow")
//		});
//
//	$('#picbo').onmouseout(function()  {
//	  $('#ppc').animate({
//	    left: 0
//	  }, "slow")
//		})