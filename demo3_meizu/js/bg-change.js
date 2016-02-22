//Òþ²Ø²ã
	$("#top .l2").hover(function(){
		$("#hid").stop(true,false).animate({height:"150px"},400);
		$("#hid").attr("style","background-color:#fff;");
		$("#top").attr("style","background:#fff;color:#000;");
		$("#top a").attr("style","color:#000");
		$("#top .a2").attr("style","color:#31A5E9;");
		$("#top .t-logo").attr("style","background:url(img/logo-b.png);");
	},function(){
			$("#hid").stop(true,false).animate({height:"0px"},400,function(){
				$("#top").removeAttr("style");
				$("#top a").removeAttr("style");
				$("#top .a2").removeAttr("style");
				$("#top .t-logo").removeAttr("style");
				$("#hid").removeAttr("style");
			});
		}
	)


//±³¾°ÇÐ»»
	var i = 1;
	var Play = null;
	$("#but .b-left").click(function(){
		$(this).addClass("b-cli");
		$("#but .b-right").removeClass("b-cli");
		$("#bg1").fadeIn();
		$("#bg2").fadeOut();
		i = 1;
		clearInterval(Play);
		auto();
	});
	$("#but .b-right").click(function(){
		$(this).addClass("b-cli");
		$("#but .b-left").removeClass("b-cli");
		$("#bg1").fadeOut();
		$("#bg2").fadeIn();
		i = 0;
		clearInterval(Play);
		auto();
	});
	function auto(){
		Play=setInterval(function(){
			if(i == 1){
				$("#but li").eq(i).addClass("b-cli").siblings().removeClass("b-cli");
				$("#bg1").fadeOut(2000);
				$("#bg2").fadeIn(2000);
				i = 0;
			}else{
				$("#but li").eq(i).addClass("b-cli").siblings().removeClass("b-cli");
				$("#bg1").fadeIn(2000);
				$("#bg2").fadeOut(2000);
				i = 1;
			}
		},6000)
	};
	auto();