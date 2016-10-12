/**
 * @author jaco
 * 水情信息展示
 */
var jq=jQuery.noConflict();
var inputCodeOfStadia;//测站编码
var beginTime;
var endTime;
var chart;
jQuery(document).ready(function(){
	//设置时区
	Highcharts.setOptions({       		
	     global: {                                                               
	            useUTC: false                                                       
	      },   
	
   });
	//初始化树，并监听节点
	treeInit();
	//获取所有站点实时信息
	fetchAllStadiaInfos();
	//监听查询按钮
	queryStadiaInfoByTime();
});

//初始化树，并监听节点
function treeInit(){
	canalTreeData = [{"text":"渠首总干渠","codeOfStadia":"10510001"},
	                 {"text":"节制闸1","codeOfStadia":"10510008"},
	                 {"text":"节制闸2","codeOfStadia":"10510009"},
	                 {"text":"一分干","codeOfStadia":"","nodes":[{"text":"一分干渠首","codeOfStadia":"10510010"},{"text":"1-1 支渠","codeOfStadia":"10510013"},{"text":"1-2 支渠","codeOfStadia":"10510014"},{"text":"1-3 支渠","codeOfStadia":"10510015"},{"text":"1-4 支渠","codeOfStadia":"10510016"},{"text":"1-5 支渠","codeOfStadia":"10510017"},{"text":"1-6 支渠","codeOfStadia":"10510018"},{"text":"1-7 支渠","codeOfStadia":"10510019"},{"text":"1-8 支渠","codeOfStadia":"10510020"},{"text":"1-8 (加)支渠","codeOfStadia":"10510021"},{"text":"1-9 支渠","codeOfStadia":"10510022"},{"text":"1-10 支渠","codeOfStadia":"10510023"},{"text":"1-11 支渠","codeOfStadia":"10510024"},{"text":"1-12 支渠","codeOfStadia":"10510025"},{"text":"1-13 支渠","codeOfStadia":"10510026"},{"text":"1-14 支渠","codeOfStadia":"10510027"},{"text":"1-15 支渠","codeOfStadia":"10510028"}]},
	                 {"text":"二分干","codeOfStadia":"","nodes":[{"text":"二分干渠首","codeOfStadia":"10510011"},{"text":"二干节制闸l","codeOfStadia":"10510029"},{"text":"2-10 支渠","codeOfStadia":"10510030"},{"text":"2-13 支渠","codeOfStadia":"10510031"},{"text":"2-15 支渠","codeOfStadia":"10510032"}]},
	                 {"text":"三分干","codeOfStadia":"","nodes":[{"text":"三分干渠首","codeOfStadia":"10510012"},{"text":"3-3 支渠","codeOfStadia":"10510033"},{"text":"3-8 支渠","codeOfStadia":"10510034"}]},
	                 {"text":"一支渠","codeOfStadia":"10510002"},
	                 {"text":"二支渠","codeOfStadia":"","nodes":[{"text":"二支渠渠首","codeOfStadia":"10510003"},{"text":"二支渠渠尾","codeOfStadia":"10510004"}]},
	                 {"text":"三支渠","codeOfStadia":"10510005"},
	                 {"text":"四支渠","codeOfStadia":"","nodes":[{"text":"四支渠渠首","codeOfStadia":"10510006"},{"text":"四支渠渠尾","codeOfStadia":"10510007"}]}];
	console.log("Json：" + JSON.stringify(canalTreeData));
	jq('#StadiaName').treeview({
			data: canalTreeData,
			animated: '1',
			//persist:'location',//页面刷新不保留折叠状态
			showTags: true,
			levels: 1,
			//state: closed,  
			backColor: 'transparent',
			//backColor: /project290/images/modules/index/main_left.jpg,
			onNodeSelected: function(event, data) {
//			console.log(data["text"]);
//			console.log(data["codeOfStadia"]);
//			console.log(data.codeOfStadia);
			if(data.codeOfStadia == '' || data.codeOfStadia == null)
			{
//				jq('#damNoData').show();
//				jq('#damData').hide();
//				jq('#NoDataInfo').html("请继续选择……");
			}
			else
			{
				showQuery();
		    	deliverStadiaCode(data.codeOfStadia);
			}
		}
		});
	jq('#treeTest').treeview({
			data:[{"text":"1","codeOfStadia":"2","nodes":[{"text":"测试"}]},{"text":"1","codeOfStadia":"2"},{"text":"3","codeOfStadia":"3"}],
			showTags: true
	});
}
//获取所有站点的实时信息
function fetchAllStadiaInfos(){
	jq.ajax({
		url:'/project290/WaterInfoController/getNewestWaterInfo',
		type:'POST',
		data:"{}",
		dataType:'json',
		success:function (data) {
			//alert("加载成功！！");
			if(data == null || data == "")
			{
				//alert("没有最近一个小时的数据！！");
			}
			console.log("获取的测站信息data ： " + data);
			console.log(data["0"]);
			jq('#allStadiasInfoTable').bootstrapTable('load',data);
		},
		error:function(){
			console.log("获取失败");
		}

	});	
	
}
function queryStadiaInfoByTime(){	
	jq('#stadiaInqueryBotton').click(function(){
		// alert("hello1");
		beginTime=jq("#inputBeginTime").val();
		endTime=jq("#inputEndTime").val();
//		console.log("起始时间 ：" + beginTime);
//		console.log("结束时间：" + endTime);
		var distanceTime=Date.parse(beginTime)-Date.parse(endTime);
		var todayData=new Date();
		var todayFormat;
		if(todayData.getMonth()+1<10)
			todayFormat=todayData.getFullYear()+"-0"+(todayData.getMonth()+1)+"-"+todayData.getDate();
		else
			todayFormat=todayData.getFullYear()+"-"+(todayData.getMonth()+1)+"-"+todayData.getDate();
//		console.log("今天 ： " + todayFormat);
		var distanceBeginToToday = Date.parse(beginTime) - Date.parse(todayFormat);
		var distanceEndToToday= Date.parse(endTime) - Date.parse(todayFormat);
		if(distanceBeginToToday > 0 || distanceEndToToday > 0){
			alert("起始时间或者结束时加大于当前时间，请重新输入！");
			return;
		}
		if(beginTime==null||beginTime.trim()==""){			
			alert("起始时间为空，请输入！！");
			return;
		}else if(endTime==null||endTime.trim()==""){
			alert("结束时间为空，请输入！！");
			return;
		}else if(distanceTime>0){
			alert("起始时间大于结束时间，请重新输入！！");
			return;
			
		}
					
		showHistoryTable(inputCodeOfStadia);
	});
}


function showQuery(){

	jq("#stadiaInfoQuery").show();
	jq("#allStadiaInfos").hide();
	document.getElementById('stadiasRealInfo').className="active";
	document.getElementById('stadiaInfoQuery').className="chart tab-pane active";
	
	document.getElementById('allStadiasRealInfo').className="";
	document.getElementById('allStadiaInfos').className="chart tab-pane ";

}
function showAll(){
	//alert("显示实时信息");
	jq("#stadiaInfoQuery").hide();
	jq("#allStadiaInfos").show();
	document.getElementById('stadiasRealInfo').className="";
	document.getElementById('stadiaInfoQuery').className="chart tab-pane ";
	
	document.getElementById('allStadiasRealInfo').className="active";
	document.getElementById('allStadiaInfos').className="chart tab-pane active";
	//点击 实时信息 按钮，获取所有站点信息
	fetchAllStadiaInfos();
}


function deliverStadiaCode(codeOfStadia){
	inputCodeOfStadia=codeOfStadia;
	
	showRealtimeTable(inputCodeOfStadia);

}

function showRealtimeTable(codeOfStadia){
	var waterDesign;
	console.log("传递给后台的数据是 ： " + codeOfStadia);
	jq.ajax({
		url:'/project290/WaterInfoController/getWaterInfoByStadiaCode?StadiaCode=' + codeOfStadia, //参数 ： codeOfStadia
		type:'POST',
		data:"{}",
		dataType:'json',
		success:function (data) {
			//alert(JSON.stringify(data[0]));
			 if(jq.isEmptyObject(data)){
				 jq('#damNoData').show();
				 jq('#damData').hide();
				 showDamNumber(0);
				 //console.log("为空");
				 //alert("空");
				 waterDesign=0;
				}else{
					 jq('#damNoData').hide();
					 jq('#damData').show();

				 showDamNumber(3);
				 var nameString=data["0"].stadianame;
				jq('#stadiaNameShow').html(nameString);
				jq('#date').html(" 今日 ");
				if(data["0"].waterLevelDesign==null)
					waterDesign=0;
				else
					waterDesign=data["0"].waterLevelDesign;
								 
			 }	
			
			 jq('#WaterReportInfo').bootstrapTable('load',data);
			 //alert("data:"+data);

				var timeData=[];
				var heightUpData = [];
				var heightDownData=[];
				var fluxGateData = [];	
				
				jq.each(data,function(index,content){
					//alert("hello");
					var formatTime=Date.parse(content.meatime);							
					heightUpData.push([formatTime,content.heightup]);
					heightDownData.push([formatTime,content.heightdown]);
					fluxGateData.push([formatTime,content.fluxgate]);				

				});
				showLineChart(heightUpData,heightDownData,fluxGateData,0,waterDesign);
		}
//		error:function(){
//			 jq('#NoDataInfo').html("当前所选时间段没有数据，请重新选择时间……");
//		}
	});	

}	
function showHistoryTable(codeOfStadia){
	// alert("codeOfStadia:"+codeOfStadia);
	var waterDesign;
		jq.ajax({
			url:'/project290/WaterInfoController/getHistoryWaterInfo?StadiaCode=' + codeOfStadia + '&beginTime=' + beginTime + '&endTime=' + endTime,//codeOfStadia + beginTime + endTime,
			type:'POST',
			data:"{}",
			dataType:"JSON",
			success:function(data){
				jq('#WaterReportInfo').bootstrapTable('load',data);
				 if(jq.isEmptyObject(data)){
					 //console.log("为空");
					 //alert("空");
					 waterDesign=0;
					 jq('#damNoData').show();
					 jq('#damData').hide();
					}else{
						 jq('#damNoData').hide();
						 jq('#damData').show();
						 jq('#NoDataInfo').html("当前所选时间段没有数据，请重新选择时间……");
						if(data[0].waterLevelDesign==null)
							waterDesign=0;
						else
							waterDesign=data[0].waterLevelDesign;
						
						var nameString=data["0"].stadianame;
						jq('#stadiaNameShow').html(nameString);
						jq('#date').html(" 历史 ");
						
						var timeData=[];
						var heightUpData = [];
						var heightDownData=[];
						var fluxGateData = [];	

						jq.each(data,function(index,content){
							//alert("hello");
							//timeData.push(content.meaTime);
							//console.log("循环 ：heightDown = " + content.heightdown);
							var formatTime=Date.parse(content.meatime);							
							heightUpData.push([formatTime,content.heightup]);
							heightDownData.push([formatTime,content.heightdown]);
							fluxGateData.push([formatTime,content.fluxgate]);
						});
									 
				 }	 

					//alert("heightUpData:"+heightUpData);
					showLineChart(heightUpData,heightDownData,fluxGateData,1,waterDesign);
					//showWaterBarCharts(heightUpData,heightDownData,fluxGateData,1);
				
			}
//			error:function(){
//				 jq('#NoDataInfo').html("当前所选时间段没有数据，请重新选择时间……");
//			}
			
		});


	
}
function showLineChart(heightUp,heightDown,fluxGate,flag,waterLeverDesign)/*timeData,*/{
	console.log("闸上水位 ： " + heightUp);
	console.log("闸下水位 ： " + heightDown);
	new Highcharts.Chart(
			{
				chart:
				{ 
					 type: 'column',
	                 renderTo:"damsRealWaterInfoChart",//这里是div的id
			        animation: Highcharts.svg, 
			        events:{
			        	
			        	load:function(){
			        		
			        		dynamicLoadStyle(flag);
			        	 }
			        }
			        
				},
				title:
				{
					text: '闸站水位流量折线图'
				},
				tooltip: 
				{
					xDateFormat: '%Y-%m-%d %H:%M:%S',
					 shared: true
				},
				xAxis:
				{
					title: {
		                text: '采集时间'
		            },
		            type: 'datetime',  
		           showFirstLabel: true,
		           /*
		            *以下两个参数：true表示 多现实前后一天
		            *false表示直接从原点显示 
		            */
		           startOnTick: false,
		           endOnTick: false,
				},
				yAxis: 
				[{ // Primary yAxis
				   plotLines: 
				   [{   //一条延伸到整个绘图区的线，标志着轴中一个特定值。
	                    color: '#000',
	                    dashStyle: 'Dash', //Dash,Dot,Solid,默认Solid
	                    width: 1.5,
	                    value: waterLeverDesign,  //y轴显示位置
	                    zIndex: 5,
	                    label: 
	                    {                   	
	                        text: waterLeverDesign +'m',
	                        align: 'right',
	                        x: -10, 
	                     }
	               }],
		           labels: 
		           {
		                formatter: function() {
		                    return this.value +'m';
		                },
		                style: {
		                    color: '#4572A7'
		                }
		            },
		           title: 
		           {
		                text: '闸站水位',
		                style: {
		                    color: '#4572A7'
		                }
		            },
		            opposite:false

		         }, 
		         { // Secondary yAxis
		            gridLineWidth: 0,
		            title: {
		                text: '流量',
		                style: {
		                    color: '#AA4643'
		                }
		            },
		            labels: {
		                formatter: function() {
		                    return this.value +'m³/s';
		                },
		                style: {
		                    color: '#AA4643'
		                }
		            },
		            opposite: true
		         }],
		        plotOptions: 
		        {
		            series: 
		            {
		            	 marker: 
		            	 {
		                     enabled: true
		            	 },
		            },
		        },
				series: [{  
					name: '闸上水位',
		            color: '#4572A7',
		            type: 'line',
		            yAxis: 0,
		            tooltip: {
		                valueSuffix: ' m'
		            },
		            data: heightUp, 
		            selected: true
		        }, {
		            name: '闸下水位',
		            type: 'line',
		            color: '#89A54E',
		            yAxis: 0,
		            data: heightDown,   
		           
		            tooltip: {
		                valueSuffix: ' m'
		            },
		            selected: true

		        }, {
		            name: '流量',
		            color: '#AA4643',
		            type: 'line',
		            yAxis: 1,
		            data: fluxGate, 
		            dashStyle: 'shortdot',//  shortdot longdashdot
		          tooltip: {
		                valueSuffix: ' m³/s'
		            },
		            selected: true
		             }]
				
			},
			function(chartObj)
			{
				chart = chartObj;
			}
	);
//	jq("#damsRealWaterInfoChart").highcharts(
//			{
//				chart:
//				{ 
//			        animation: Highcharts.svg, 
//			        events:{
//			        	
//			        	load:function(){
//			        		
//			        		dynamicLoadStyle(flag);
//			        	 }
//			        }
//			        
//				},
//				title:
//				{
//					text: '闸站水位流量折线图'
//				},
//				tooltip: 
//				{
//					xDateFormat: '%Y-%m-%d %H:%M:%S',
//					 shared: true
//				},
//				xAxis:
//				{
//					title: {
//		                text: '采集时间'
//		            },
//		            type: 'datetime',  
//		           showFirstLabel: true,
//		            startOnTick: true,
//		           endOnTick: true,
//				},
//				yAxis: 
//				[{ // Primary yAxis
//				   plotLines: 
//				   [{   //一条延伸到整个绘图区的线，标志着轴中一个特定值。
//	                    color: '#000',
//	                    dashStyle: 'Dash', //Dash,Dot,Solid,默认Solid
//	                    width: 1.5,
//	                    value: waterLeverDesign,  //y轴显示位置
//	                    zIndex: 5,
//	                    label: 
//	                    {                   	
//	                        text: waterLeverDesign +'m',
//	                        align: 'right',
//	                        x: -10, 
//	                     }
//	               }],
//		           labels: 
//		           {
//		                formatter: function() {
//		                    return this.value +'m';
//		                },
//		                style: {
//		                    color: '#4572A7'
//		                }
//		            },
//		           title: 
//		           {
//		                text: '闸站水位',
//		                style: {
//		                    color: '#4572A7'
//		                }
//		            },
//		            opposite:false
//
//		         }, 
//		         { // Secondary yAxis
//		            gridLineWidth: 0,
//		            title: {
//		                text: '流量',
//		                style: {
//		                    color: '#AA4643'
//		                }
//		            },
//		            labels: {
//		                formatter: function() {
//		                    return this.value +'m³/s';
//		                },
//		                style: {
//		                    color: '#AA4643'
//		                }
//		            },
//		            opposite: true
//		         }],
//		        plotOptions: 
//		        {
//		            series: 
//		            {
//		            	 marker: 
//		            	 {
//		                     enabled: true
//		            	 },
//		            },
//		        },
//				series: [{  
//					name: '闸上水位',
//		            color: '#4572A7',
//		            type: 'line',
//		            yAxis: 0,
//		            tooltip: {
//		                valueSuffix: ' m'
//		            },
//		            data: heightUp, 
//		            selected: true
//		        }, {
//		            name: '闸下水位',
//		            type: 'line',
//		            color: '#89A54E',
//		            yAxis: 0,
//		            data: heightDown,   
//		           
//		            tooltip: {
//		                valueSuffix: ' m'
//		            },
//		            selected: true
//
//		        }, {
//		            name: '流量',
//		            color: '#AA4643',
//		            type: 'line',
//		            yAxis: 1,
//		            data: fluxGate, 
//		            dashStyle: 'shortdot',//  shortdot longdashdot
//		          tooltip: {
//		                valueSuffix: ' m³/s'
//		            },
//		            selected: true
//		             }]
//				
//			},
//			function(chartObj)
//			{
//				chart = chartObj;
//			});
}	


function dynamicLoadStyle(flagStyle){
	if(flagStyle==0)
	{
		chart.xAxis[0].update({
			labels: {    
                formatter: function () {      
                	return Highcharts.dateFormat('%H:%M', this.value); 
                },  
		rotation:-30,//倾斜30度，防止数量过多显示不全  
            } , 
          
            minTickInterval: 1 * 3600 * 1000,//间隔值
            });
	}
	else 
	{
		chart.xAxis[0].update({
			labels: {    
            formatter: function () {      
            	return Highcharts.dateFormat('%Y-%m-%d', this.value); 
            	},
            	 rotation:-30,//倾斜30度，防止数量过多显示不全  
			} , 
			
			minTickInterval: 24 * 3600 * 1000,//间隔值
        	});
	}

	
}

function showDamNumber(gateOpenCount){
		 //alert("000000"+data[0].gateOpenCount);
		 
		 if(gateOpenCount==0){
			 jq('#WaterReportInfo').bootstrapTable('hideColumn', 'openDegree1');
			 jq('#WaterReportInfo').bootstrapTable('hideColumn', 'openDegree2');
			 jq('#WaterReportInfo').bootstrapTable('hideColumn', 'openDegree3');
		 }
		 else if(gateOpenCount==1){
			 jq('#WaterReportInfo').bootstrapTable('showColumn', 'openDegree1');
			 jq('#WaterReportInfo').bootstrapTable('hideColumn', 'openDegree2');
			 jq('#WaterReportInfo').bootstrapTable('hideColumn', 'openDegree3');
			 
		 }else if(gateOpenCount==2){
			 jq('#WaterReportInfo').bootstrapTable('showColumn', 'openDegree1');
			 jq('#WaterReportInfo').bootstrapTable('showColumn', 'openDegree2');
			 jq('#WaterReportInfo').bootstrapTable('hideColumn', 'openDegree3');
			 
		 }else if(gateOpenCount==3){
			 jq('#WaterReportInfo').bootstrapTable('showColumn', 'openDegree1');
			 jq('#WaterReportInfo').bootstrapTable('showColumn', 'openDegree2');
			 jq('#WaterReportInfo').bootstrapTable('showColumn', 'openDegree3');
			 
		 }
		 

}