$(window).scroll(function(){var a=$(this).scrollTop();if($(".logo").css({transform:"translate(0px, "+a/2+"%)"}),$(".back-bird").css({transform:"translate(0px, "+a/4+"%)"}),$(".fore-bird").css({transform:"translate(0px, -"+a/40+"%)"}),a>$(".clothes-pics").offset().top-$(window).height()/1.2&&$(".clothes-pics figure").each(function(a){setTimeout(function(){$(".clothes-pics figure").eq(a).addClass("is-showing")},150*(a+1))}),a>$(".large-window").offset().top-$(window).height()){$(".large-window").css({"background-position":"center "+(a-$(".large-window").offset().top)+"px"});var b=(a-$(".large-window").offset().top+400)/(a/5);$(".window-tint").css({opacity:b})}});