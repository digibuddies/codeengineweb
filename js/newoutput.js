function myfun()
{
	document.getElementById('disp').innerHTML="";
	document.getElementById('code').innerHTML="";
	var q=document.getElementById('query').value;
	var txt = q;
	var ind = txt.indexOf("table");
	var number=1;
	var ran=10;
	var x=10;
	var send ="";
	var ran2=0;
	if(ind!=-1){
		var x1 = txt.indexOf("upto");
		var x2 = txt.indexOf("from");
		var x3 = txt.indexOf("to");
		var x4 = txt.indexOf("till");
		var n = (x1!=-1)?x1:(x2!=-1)?x2:(x3!=-1)?x3:(x4!=-1)?x4:0;
		var j=n;
		if(x1!=-1||x2!=-1||x3!=-1||x4!=-1){
			range=1;
			while(!(parseInt(txt[j])>=0&&parseInt(txt[j])<=9)){
				j++;
			}
			ran = parseInt(txt[j]);
			
			j++;
			while(parseInt(txt[j])>=0&&parseInt(txt[j])<=9)
			{ran = (ran*x)+parseInt(txt[j]);
				j++;
		}
		if(x2!=-1){
			while(!(parseInt(txt[j])>=0&&parseInt(txt[j])<=9)){
				j++;
			}
			ran2 = parseInt(txt[j]);
			j++;
			while(parseInt(txt[j])>=0&&parseInt(txt[j])<=9)
			{ran2 = (ran2*x)+parseInt(txt[j]);
				j++;
		}
		}
		}
		
		var i=ind+9;		    
		number = parseInt(txt[i]);
		i++;
		while(parseInt(txt[i])>=0&&parseInt(txt[i])<=9){
			number = (number*x)+parseInt(txt[i]);
			i++;
		}
		if(ran2){
			if(ran2<ran){
				send = "Oops! The range is incorrect...";
				document.getElementById('disp').innerHTML=send;
			}
			else
			printTable(number,ran,ran2);
		}
		else printTable(number,1,ran);

		
		
	}
	else
	{send = "Oops! Only print table operation is supported yet...";
	document.getElementById('disp').innerHTML=send;}
}


function printTable(num,start,end){
		for(var i=start; i<=end; i++){
			var pTag= document.getElementById('disp');
			pTag.innerHTML +=num+"x"+i+"="+(num*i) + "<br/>" 
		}
		pTag.innerHTML +="<br/>" 
		document.getElementById('disp').innerHTML="import java.util.Scanner;<br/>public class Multiplication_Table <br/>{<br/>public static void main(String[] args) <br/>{<br/>Scanner s = new Scanner(System.in);<br/>System.out.print("+"Enter number:"+");<br/>int n=s.nextInt();<br/>for(int i=1; i <= 10; i++)<br/>{<br/>System.out.println(n+"+"x"+"+i+" +"="+ "+n*i);<br/>}<br/>}}<br/>"
	}