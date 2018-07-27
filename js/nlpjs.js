
var framex=document.getElementById("code");  
		var btn=document.getElementById("btn");
		btn.addEventListener("click", function()
		{ 
		var ourRequest= new XMLHttpRequest();
		ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
		ourRequest.onload=function()
		{
		  var ourData =JSON.parse(ourRequest.responseText);
		  renderHTML(ourData);
		};
		  ourRequest.send();
		});
		function renderHTML(data)
		{
			var htmlString="";
			for(i=0; i<data.length; i++){
				htmlString += "<p>" + data[i].name +" is a "+ data[i].species+".</p>"
			}
         		framex.insertAdjacentHTML('beforeend', htmlString);
		}
		/*function myfun()
		{
			var x=10;
			var y=20;
			document.getElementById("right-top").innerHTML=" get a life!! ";
		}*/
		function toggle_div(id)
		{
			var divel=document.getElementById(id);
			if(divel.style.display=='none')
				divel.style.display='block';
			else
				divel.style.display='none';
		}