$(function(){
				/*左菜单下拉*/
		
		$(document).ready(function(){
			
				for (var i = 0; i < 6; i++) {
					slide(i);
				}
				function slide(i){
					$('.left_menu [id]').eq(i).click(function(){
	
						var button = $(".list-item").eq(i).css('display');
						if(button == "none"){
							$('.left_menu [id]').eq(i).css('background','#11b6b6')
						}
						if(button == "block"){
							$('.left_menu [id]').eq(i).css('background','none')
						}
						$(".list-item").eq(i).slideToggle();
					});	
				}
				
			});
		
});

