function myfun()
{
	var q=document.getElementById('query').value;
	document.getElementById('output').innerHTML="Loading";
  $.ajax({
      type:'POST',
      url:'http://127.0.0.1:5000/receiver',
      data: {que:q},
	  dataType: 'html',
	  context: document.body,
	  global: false,
	  async:true,
	  success: function(data2) {
       data2["code"] = data2["code"].replace(/\n/g, "<br />");  
		data2["code"] = data2["code"].replace(/\t/g, "&nbsp;&nbsp;&nbsp;&nbsp;");  
   		document.getElementById('output').innerHTML=data2["output"];
		document.getElementById('code').innerHTML=data2["code"];
      },
      error: function(request, status, error) {
        document.getElementById('output').innerHTML="error"+error;
      }
   });	
}