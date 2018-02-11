$(function(){
				/*左菜单下拉*/
			var menuas = $('.left_menu [id]');
			for (var i = 0; i < 6; i++) {
				left_menu(i);
			}
			function left_menu(i){
					menuas.eq(i).bind('click',function(){
						var button = $('.list-item').eq(i).css('display');
						if(button == 'none'){
							$('.list-item').eq(i).css('display','block');
							$(this).css('background','#11b6b6');
						}	
						if(button == 'block'){
							$('.list-item').eq(i).css('display','none');
							$(this).css('background','none');
						}
					});
				
			}
});
						/*练习*/
/*$('#menua_userInformation').bind('click',function(){
		var button = $('.list-item').eq(0).css('display');
		if(button=='none'){
			$('.list-item').eq(0).css('display','block');
			$('#menua_userInformation').css('background','#11b6b6');
		}
		else{
			$('.list-item').eq(0).css('display','none');
			$('#menua_userInformation').css('background','none');
		}
	});
	$('#menua_orginzation').bind('click',function(){
		$('.list-item').eq(1).css('display','block');
		$('#menua_orginzation').css('background','#11b6b6');
	});
	$('#menua_project').bind('click',function(){
		$('.list-item').eq(2).css('display','block');
		$('#menua_project').css('background','#11b6b6');
	});
	$('#menua_sendInformation').bind('click',function(){
		$('.list-item').eq(3).css('display','block');
		$('#menua_sendInformation').css('background','#11b6b6');
	});
	$('#menua_Attendance').bind('click',function(){
		$('.list-item').eq(4).css('display','block');
		$('#menua_Attendance').css('background','#11b6b6');
	});
	$('#menua_personnelManagement').bind('click',function(){
		$('.list-item').eq(5).css('display','block');
		$('#menua_personnelManagement').css('background','#11b6b6');
	});*/

