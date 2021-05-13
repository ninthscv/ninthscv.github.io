$(function(){
		$(window).scroll(function() {
		var top = $(document).scrollTop();
		if (top < 70) 	{$("nav").css({top: '0px', position: 'relative'});
						 $("section").css({top: '0px', position: 'relative'});
						}
		else 	{$("nav").css({top: '0px', position: 'fixed'});
				 $("section").css({top: '40px', position: 'relative'});
				}
		});
		});