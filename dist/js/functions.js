function posts(a){var b,c=postsTop-winHeight/8;b=c>a?Math.min(.005*Math.pow(a-c,2),winHeight):0,$(".post-1").css({transform:"translate("+-b+"px, "+.2*b+"px)"}),$(".post-3").css({transform:"translate("+b+"px, "+.2*b+"px)"})}var postsTop,winHeight;$(document).ready(function(){postsTop=$(".blog-posts").offset().top,winHeight=$(window).height()}),$(window).scroll(function(){var a=$(this).scrollTop();if($(".logo").css({transform:"translate(0px, "+a/2+"%)"}),$(".back-bird").css({transform:"translate(0px, "+a/4+"%)"}),$(".fore-bird").css({transform:"translate(0px, -"+a/40+"%)"}),a>$(".clothes-pics").offset().top-$(window).height()/1.2&&$(".clothes-pics figure").each(function(a){setTimeout(function(){$(".clothes-pics figure").eq(a).addClass("is-showing")},150*(a+1))}),a>$(".large-window").offset().top-$(window).height()){$(".large-window").css({"background-position":"center "+(a-$(".large-window").offset().top)+"px"});var b=(a-$(".large-window").offset().top+400)/(a/5);$(".window-tint").css({opacity:b})}posts(a)});