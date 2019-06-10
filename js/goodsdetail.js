		$('#spic').mousemove(function(event){
		//				console.log(event.clientX,event.clientY);
		//				console.log($('#spic').offset().left,$('#spic').offset().top);
			var nowleft = Math.floor(event.clientX - $('#spic').offset().left)-50;
			var nowtop = event.clientY-$('#spic').offset().top-50;
			console.log(nowleft,nowtop)
			if(nowleft<0){
				nowleft = 0;
			}
			if(nowleft>150){
				nowleft = 150;
			}
			if(nowtop<0){
				nowtop = 0;
			}
			if(nowtop>150){
				nowtop = 150;
			}

		$('#square').css({
			'top':nowtop,
			'left':nowleft
		})
		
		$('#b').css({
			'top':-nowtop*2,
			'left':-nowleft*2
			})
		})					