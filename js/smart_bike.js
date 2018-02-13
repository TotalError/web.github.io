var txt=new Array();
		txt[0]=document.getElementById("content—ele");
		txt[1]=document.getElementById("NFC");
		txt[2]=document.getElementById("part_ele");
	function show(i,u,w){
		txt[i].style.display="block";
		txt[u].style.display="none";
		txt[w].style.display="none";
		}
	var i=0;
	function arrow_r(){
		if(i==0)show(1,2,0)
		if(i==1)show(2,1,0)
		if(i==2)show(0,1,2)
		i++;
		if(i>=3)i=0;
	}
	var j=i;
	function arrow_l(){
		if(j==0)show(2,1,0);
		if(j==1)show(0,1,2);
		if(j==2)show(1,0,2);
		j--;
		if(j<0)j=2;
	}
//指标指向(triangle)
	function triangle(id){
		var triangle=document.getElementById("triangle");
		triangle.style.left=id+"px";
		}