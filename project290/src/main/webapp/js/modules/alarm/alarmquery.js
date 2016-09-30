/**
 * @author lyx 
 * @date 2016.09.28
 * alarm query module
 */
var jq = jQuery.noConflict();
var inputCodeOfStadia;
var beginTime;
var endTime;
jQuery(document).ready(function() {
	// init the left tree
	treeInit();
	//show all alarm infos
	showAllAlarmInfos();
	getAlarmInfosByTwoTime();
});

//add listeners
function treeInit() {
	canalTreeData = [ {
		"text" : "渠首总干渠",
		"codeOfStadia" : "10510001"
	}, {
		"text" : "节制闸1",
		"codeOfStadia" : "10510008"
	}, {
		"text" : "节制闸2",
		"codeOfStadia" : "10510009"
	}, {
		"text" : "一分干",
		"codeOfStadia" : "",
		"nodes" : [ {
			"text" : "一分干渠首",
			"codeOfStadia" : "10510010"
		}, {
			"text" : "1-1 支渠",
			"codeOfStadia" : "10510013"
		}, {
			"text" : "1-2 支渠",
			"codeOfStadia" : "10510014"
		}, {
			"text" : "1-3 支渠",
			"codeOfStadia" : "10510015"
		}, {
			"text" : "1-4 支渠",
			"codeOfStadia" : "10510016"
		}, {
			"text" : "1-5 支渠",
			"codeOfStadia" : "10510017"
		}, {
			"text" : "1-6 支渠",
			"codeOfStadia" : "10510018"
		}, {
			"text" : "1-7 支渠",
			"codeOfStadia" : "10510019"
		}, {
			"text" : "1-8 支渠",
			"codeOfStadia" : "10510020"
		}, {
			"text" : "1-8 (加)支渠",
			"codeOfStadia" : "10510021"
		}, {
			"text" : "1-9 支渠",
			"codeOfStadia" : "10510022"
		}, {
			"text" : "1-10 支渠",
			"codeOfStadia" : "10510023"
		}, {
			"text" : "1-11 支渠",
			"codeOfStadia" : "10510024"
		}, {
			"text" : "1-12 支渠",
			"codeOfStadia" : "10510025"
		}, {
			"text" : "1-13 支渠",
			"codeOfStadia" : "10510026"
		}, {
			"text" : "1-14 支渠",
			"codeOfStadia" : "10510027"
		}, {
			"text" : "1-15 支渠",
			"codeOfStadia" : "10510028"
		} ]
	}, {
		"text" : "二分干",
		"codeOfStadia" : "",
		"nodes" : [ {
			"text" : "二分干渠首",
			"codeOfStadia" : "10510011"
		}, {
			"text" : "二干节制闸l",
			"codeOfStadia" : "10510029"
		}, {
			"text" : "2-10 支渠",
			"codeOfStadia" : "10510030"
		}, {
			"text" : "2-13 支渠",
			"codeOfStadia" : "10510031"
		}, {
			"text" : "2-15 支渠",
			"codeOfStadia" : "10510032"
		} ]
	}, {
		"text" : "三分干",
		"codeOfStadia" : "",
		"nodes" : [ {
			"text" : "三分干渠首",
			"codeOfStadia" : "10510012"
		}, {
			"text" : "3-3 支渠",
			"codeOfStadia" : "10510033"
		}, {
			"text" : "3-8 支渠",
			"codeOfStadia" : "10510034"
		} ]
	}, {
		"text" : "一支渠",
		"codeOfStadia" : "10510002"
	}, {
		"text" : "二支渠",
		"codeOfStadia" : "",
		"nodes" : [ {
			"text" : "二支渠渠首",
			"codeOfStadia" : "10510003"
		}, {
			"text" : "二支渠渠尾",
			"codeOfStadia" : "10510004"
		} ]
	}, {
		"text" : "三支渠",
		"codeOfStadia" : "10510005"
	}, {
		"text" : "四支渠",
		"codeOfStadia" : "",
		"nodes" : [ {
			"text" : "四支渠渠首",
			"codeOfStadia" : "10510006"
		}, {
			"text" : "四支渠渠尾",
			"codeOfStadia" : "10510007"
		} ]
	} ];
	jq('#StadiaName').treeview({
		data : canalTreeData,
		showTags : true,
		levels : 1,
		onNodeSelected : function(event, data) {
			inputCodeOfStadia = data.codeOfStadia;
			getAlarmInfosByCode(inputCodeOfStadia);
		}

	});
}


function showAllAlarmInfos() {
	jq.ajax({
		url:'/project290/AlarmInfoController/getAllAlarmInfo',
		type:'POST',
		data:"{}",
		dataType:'json',
		success:function (data) {
			jq('#allAlarmInfoTable').bootstrapTable('load',data);
		},
		error:function(){
			console.log("获取失败");
		}
	});	
}

function getAlarmInfosByTwoTime() {
	jq('#alarmQueryButton').click(function(){
		beginTime=jq("#inputBeginTime").val();
		endTime=jq("#inputEndTime").val();
		if(inputCodeOfStadia == null){
			jq.ajax({
				url:'/project290/AlarmInfoController/getAlarmInfoByOnlyTime?beginTime=' + beginTime
					+ '&endTime=' + endTime,
				type:'POST',
				data:"{}",
				dataType:'json',
				success:function (data) {
					jq('#allAlarmInfoTable').bootstrapTable('load',data);
				},
				error:function(){
					console.log("获取失败");
				}
			});	
		}else{
			jq.ajax({
				url:'/project290/AlarmInfoController/getAlarmInfo?stadiaCode=' + inputCodeOfStadia
					+ '&beginTime=' + beginTime + '&endTime=' + endTime,
				type:'POST',
				data:"{}",
				dataType:'json',
				success:function (data) {
					jq('#allAlarmInfoTable').bootstrapTable('load',data);
				},
				error:function(){
					console.log("获取失败");
				}
			});	
		}
		
	});
}

function getAlarmInfosByCode(stadiaCode){
	jq.ajax({
		url:'/project290/AlarmInfoController/getAlarmInfoByCode?stadiaCode=' + stadiaCode,
		type:'POST',
		data:"{}",
		dataType:'json',
		success:function (data) {
			jq('#allAlarmInfoTable').bootstrapTable('load',data);
		},
		error:function(){
			console.log("获取失败");
		}
	});	
}

