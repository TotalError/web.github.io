/*创建菜单*/
window.onload = function(){

		if (window != top) top.location.href = location.href;
			self.resizeTo(800,600);//调整当前窗口的尺寸
		var table = document.getElementById('tab_body');
		for(var i=0;i<8;i++){
			var tr = document.createElement('tr');
			for(var j=0;j<8;j++){
			var td = document.createElement('td');
			td.className += "td";
			tr.appendChild(td);	
		}
			table.appendChild(tr);
		}
		

}
		function startTime()
		{ 
		var today=new Date()
		var y=today.getYear()+1900
		var month=today.getMonth()+1
		var h=today.getHours()
		var m=today.getMinutes()
		var s=today.getSeconds()
		// add a zero in front of numbers<10
		m=checkTime(m)
		s=checkTime(s)
		document.getElementById('date').innerHTML=y+"年"+month+"月"+h+":"+m+":"+s
		t=setTimeout('startTime()',500)
		}
	
		function checkTime(i)
		{
		if (i<10) 
		  {i="0" + i}
		  return i
		}	






