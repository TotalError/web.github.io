$(function(){
	$(' :input[name=UserName]').blur(checkUserName);
	$(' :input[name=Password]').blur(checkPassword);
});


function checkUserName(){
	var name = $(' :input[name=UserName]').val();
	if(name == null || name == ""){
		//提示错误
		$('#user_alert').html("用户名不能为空");
		$('#user_alert').css('color','red');
		return false;
	}
	var reg = /^\w{3,10}$/;
	if(!reg.test(name)){
		$('#user_alert').html("输入3-10个字母或数字或下划线");
		$('#user_alert').css('color','red');
		return false;
	}
	$('#user_alert').empty();	//移除警告
	return true;
}



function checkPassword(){
	var password = $(' :input[name=Password]').val();
	if(password == null || password == ""){
		//提示错误
		$('#password_alert').html("密码不能为空");
		$('#password_alert').css('color','red');
		return false;
	}
	var reg = /^\w{3,10}$/;
	if(!reg.test(password)){
		$('#password_alert').html("输入3-10个字母或数字或下划线");
		$('#password_alert').css('color','red');
		return false;
	}
	$('#password_alert').empty();
	return true;
}