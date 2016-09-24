/**
 * @author zt
 * 对一些插件进行初始化操作
 */
var jq=jQuery.noConflict();
jQuery(document).ready(function()
{
	  
jq('.form_date').datetimepicker({
			
	        language:  'zh-CN',
	        weekStart: 0,
	        todayBtn:  1,
			autoclose: 1,
			todayHighlight: 1,
			startView: 2,
			minView: 2,
			forceParse: 0,
			format: 'yyyy-mm-dd',
	    });	


Highcharts.setOptions({       		
	                                                                 
	  	
		lang:  {
	        downloadJPEG: "另存为JPEG 图片" , 
	        downloadPDF: "另存为PDF文档"  ,
	        downloadPNG: "另存为PNG 图片"  ,
	        downloadSVG: "另存为SVG 矢量图" , 
	        exportButtonTitle: "导出图片", 
	        printChart:"打印",
	        resetZoom:"重置",
	        loading:"加载……",
	        months:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"],
	        weekdays:['星期日',  '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
        	shortMonths:["01","02","03","04","05","06","07","08","09","10","11","12"]
			//shortMonths:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
        },                                                                     
    });
});

