//var $=jQuery.noConflict();
var iframeTime;
jQuery(document).ready(function()
{	
	//alert($("#expansion").height()+"qqqq");   

});

/*function iFrameWidth() {   
	var ifm= document.getElementById("GISIframe");   
	var subWeb = document.frames ? document.frames["GISIframe"].document : ifm.contentDocument;   
	if(ifm != null && subWeb != null) {
	  
	   ifm.width = subWeb.body.scrollWidth;
	}   
	}   
function iFrameHeight(){  
	//alert("hello");
	var iframe = document.getElementById("GISIframe");  
	try{  
	    var bHeight = iframe.contentWindow.document.body.scrollHeight;  
	    var dHeight = iframe.contentWindow.document.documentElement.scrollHeight;  
        var height = Math.max(bHeight, dHeight);  
	    iframe.height = height;  
	}catch (ex){}  
	}  
*/

function hideGoto(){
	
	//measureHight=$("#expansion").height();
	//alert(measureHight);
	if($("#hideBotton").attr("src")=="img/up.gif"){
		//alert("helloqqq");
		
		//alert(measureHight);
		var measureHight;
		parent.document.getElementById("expansion").style.display="none";
		//measureHight=parent.document.getElementById("expansion").style.height;
		//alert("measureHight"+measureHight);
		//$('#expansion', window.parent.document).style.display="none";
		//alert($('#expansion', window.parent.document).style.display);
		/*document.getElementById("expansion").style.display="none";*/
		document.getElementById("hideBotton").src="img/button.gif";
		 
		document.getElementById("gisBody").style.marginTop="8px";
		
		 gisHeight=window.screen.height-95;
		 //alert(gisHeight);
		 parent.document.getElementById('waterIframe').setAttribute('height', gisHeight);
		
	}else{
		//alert("hello1");
		parent.document.getElementById("expansion").style.display="block";
		//$('#expansion', window.parent.document).style.display="block";
		//alert($('#expansion', window.parent.document).style.display);
		/*document.getElementById("expansion").style.display="block";*/
		document.getElementById("hideBotton").src="img/up.gif";
		document.getElementById("gisBody").style.marginTop="0px";
		 gisHeight=window.screen.height-245;
		 //alert(gisHeight);
		 parent.document.getElementById('waterIframe').setAttribute('height', gisHeight);
		 //alert(measureHight+"ooooo");
		
	}
	
	
	
	
}
