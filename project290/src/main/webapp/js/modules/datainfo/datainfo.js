var sysModule = angular.module("sysModule",[]);

sysModule.controller('datainfoController',['$scope','$http',function($scope,$http){

	$scope.changeStadiaName = function()
	{
		alert("选择 ：" + $scope.station.czmc);
	}
	
	function initState()
	{
		$scope.isCzmc = true;
		$scope.isCzlx =true;
		$scope.isWz =true;
		$scope.isCzab =true;
		$scope.isSllx =true;
		$scope.isJmlx =true;
		$scope.isJmgc =true;
		$scope.isXzjz =true;
		$scope.isXzcs =true;
		$scope.isSzny =true;
		$scope.isYxzk =true;
		$scope.isGldw =true;
		$scope.isSjgc =true;
		$scope.isBz =true;
		$scope.stateInfo="当前状态为查看状态,点击修改开始修改";		
		
		$scope.wzs = { "干渠1" : "1",
				   "支渠1" : "2", 
				   "支渠2" : "3"};
		$scope.czlxs = { "雨情闸门站" : "1",
					     "雨情站" : "2",
					     "闸门站" : "3",
					     "其它" : "4"};
		$scope.jmlxs = {"1985年国家高程基准" : "1",
						"1954年黄海高程系"   : "2",
				        "1956年黄海高程系"   : "3",
				        "榆林"				: "4",
				        "吴淞基面"		: "5",
				        "珠江高程系"    		: "6",
				        "大沽高程系" 		: "7",
				        "大连高程系"			: "8",
				        "波罗地海水淮"		: "9",
				        "渤海高程系"		: "10",
				        "海防高程系"			: "11",
				        "海口秀英港"			: "12",
				        "其他"				: "13"};
		$scope.yxzks = {
                "在用良好" : "1",
                "在用故障" : "2",
                "停用" : "3"
						};
		
	}
	$scope.station={};
	$scope.copy={};
	

	
	$scope.isViewstate=true;//便是当前为视图模式
	$scope.isOperation=true;//true表示修改，false表示增加
	$scope.viewFlag = false;//初始状态表示不可以预览
	
	initState();
	$scope.modifyInfo1="修";
	$scope.modifyInfo2="改";
	$scope.viewInfo1="预";
	$scope.viewInfo2="览";
	$scope.changeState = function (){
		$scope.isOperation = true;
		console.log("state:"+$scope.isViewstate);
		if($scope.isViewstate)
	    {
			//从视图模式装换为编辑模式    备份
 		   	$scope.copy.czmc=$scope.station.czmc;
 		   	$scope.copy.czlx=$scope.station.czlx;
 		   	$scope.copy.wz=$scope.station.wz;
 		  	$scope.copy.czab=$scope.station.czab;
	 		$scope.copy.sllx=$scope.station.sllx;
	 		$scope.copy.jmlx=$scope.station.jmlx;
	 		$scope.copy.jmgc=$scope.station.jmgc;
	 		$scope.copy.xzjz=$scope.station.xzjz;
	 		$scope.copy.xzcs=$scope.station.xzcs;
	 		$scope.copy.szny=$scope.station.szny;
	 		$scope.copy.yxzk=$scope.station.yxzk;
	 		$scope.copy.gldw=$scope.station.gldw;
	 		$scope.copy.sjgc=$scope.station.sjgc;
	 		$scope.copy.bz=$scope.station.bz;
	 		
	 		$scope.isOperation = false;
			$scope.isCzmc = false;
			$scope.isCzlx =false;
			$scope.isWz =false;
			$scope.isCzab =false;
			$scope.isSllx =false;
			$scope.isJmlx =false;
			$scope.isJmgc =false;
			$scope.isXzjz =false;
			$scope.isXzcs =false;
			$scope.isSzny =false;
			$scope.isYxzk =false;
			$scope.isGldw =false;
			$scope.isSjgc =false;
			$scope.isBz =false;
	    }
		else
		{
			$scope.station.czmc=$scope.copy.czmc;
 		   	$scope.station.czlx=$scope.copy.czlx;
 		   	$scope.station.wz=$scope.copy.wz;
 		  	$scope.station.czab=$scope.copy.czab;
	 		$scope.station.sllx=$scope.copy.sllx;
	 		$scope.station.jmlx=$scope.copy.jmlx;
	 		$scope.station.jmgc=$scope.copy.jmgc;
	 		$scope.station.xzjz=$scope.copy.xzjz;
	 		$scope.station.xzcs=$scope.copy.xzcs;
	 		$scope.station.szny=$scope.copy.szny;
	 		$scope.station.yxzk=$scope.copy.yxzk;
	 		$scope.station.gldw=$scope.copy.gldw;
	 		$scope.station.sjgc=$scope.copy.sjgc;
	 		$scope.station.bz=$scope.copy.bz;
	 		
	 		$scope.isCzmc = true;
			$scope.isCzlx =true;
			$scope.isWz =true;
			$scope.isCzab =true;
			$scope.isSllx =true;
			$scope.isJmlx =true;
			$scope.isJmgc =true;
			$scope.isXzjz =true;
			$scope.isXzcs =true;
			$scope.isSzny =true;
			$scope.isYxzk =true;
			$scope.isGldw =true;
			$scope.isSjgc =true;
			$scope.isBz =true;
		}

		$scope.isSubmit =!$scope.isSubmit;
		
		$scope.isViewstate=!$scope.isViewstate;
		
		$scope.isOperation = true;//修改操作
		
		$scope.isViewstate?$scope.stateInfo="当前状态为查看状态,点击修改开始修改":$scope.stateInfo="当前状态为编辑状态,点击保存修改提交";
		$scope.isViewstate?$scope.modifyInfo1="修":$scope.modifyInfo1="取";
		$scope.isViewstate?$scope.modifyInfo2="改":$scope.modifyInfo2="消";
	};
	
	$scope.createOne = function(){		
		
		$scope.station.czmc= "";
	   	$scope.station.czlx= "";
	   	$scope.station.wz= "";
	  	$scope.station.czab= "";
 		$scope.station.sllx= "";
 		$scope.station.jmlx= "";
 		$scope.station.jmgc= "";
 		$scope.station.xzjz= "";
 		$scope.station.xzcs= "";
 		$scope.station.szny= "";
 		$scope.station.yxzk= "";
 		$scope.station.gldw= "";
 		$scope.station.sjgc= "";
 		$scope.station.bz= "";
		
		$scope.isOperation = false;
		$scope.isCzmc = false;
		$scope.isCzlx =false;
		$scope.isWz =false;
		$scope.isCzab =false;
		$scope.isSllx =false;
		$scope.isJmlx =false;
		$scope.isJmgc =false;
		$scope.isXzjz =false;
		$scope.isXzcs =false;
		$scope.isSzny =false;
		$scope.isYxzk =false;
		$scope.isGldw =false;
		$scope.isSjgc =false;
		$scope.isBz =false;
		$scope.stateInfo="当前状态为添加状态,请添加测站信息";
		$scope.isOperation = false;//增加操作状态记录
	}
	$scope.deleteOne = function(){
		alert("如何选中一个条目？然后删除？");
	} 
	$scope.view = function(){
		$scope.viewFlag?$scope.viewInfo1="预":$scope.viewInfo1="取";
		$scope.viewFlag?$scope.viewInfo2="览":$scope.viewInfo2="消";
		$scope.viewFlag = !$scope.viewFlag;
	}
	
	  $scope.submitForm =function(valid){
		  if($scope.isOperation)//表示修改
			  {
			  	$scope.url='';//交给后台修改
			  	//alert("修改操作！！");
			  }
		  else
			  {
			   $scope.url='';//交给后台增加
			   //alert("增加操作！！");
			  }
		  if(valid)
			  {
				$http({
				      url:$scope.url,//此处交给后台更新数据
				      method:'POST',
				      responseType:'json',
				      params:{
				    	  czmc:$scope.station.czmc,
				    	  czlx:$scope.station.czlx,
				    	  wz:$scope.station.wz,
				    	  czab:$scope.station.czab,
				    	  sllx:$scope.station.sllx,
				    	  jmlx:$scope.station.jmlx,
				    	  jmgc:$scope.station.jmgc,
				    	  xzjz:$scope.station.xzjz,
				    	  xzcs:$scope.station.xzcs,
				    	  szny:$scope.station.szny,
				    	  yxzk:$scope.station.yxzk,
				    	  gldw:$scope.station.gldw,
				    	  sjgc:$scope.station.sjgc,
				    	  bz:$scope.station.bz}
			       })
			       .success(function(data,status,headers,config) 
			       {
			    	   console.log(data);
			    	   if(data.status=="ok")
			    	   {
                         $scope.formInfo="更新成功";
			    	   }
			    	   else
			    	   {
			    		 $scope.formInfo="更新失败";
			    	   }
			       })
			       .error(function(error){
			    		console.log("updateCurrentUser请求http请求失败");
			       });
			  }
	  };
	  
	$http({
	      url:'',//获取当前数据
	      method:'POST',
	      responseType:'json',
	      params:{}
       })
       .success(function(data,status,headers,config) 
       {
    	   if(data!=null)
    	   {
    		   	$scope.station.czmc=data.czmc;
	   		   	$scope.station.czlx=data.czlx;
	   		   	$scope.station.wz=data.wz;
	   		  	$scope.station.czab=data.czab;
	   	 		$scope.station.sllx=data.sllx;
	   	 		$scope.station.jmlx=data.jmlx;
	   	 		$scope.station.jmgc=data.jmgc;
	   	 		$scope.station.xzjz=data.xzjz;
	   	 		$scope.station.xzcs=data.xzcs;
	   	 		$scope.station.szny=data.szny;
	   	 		$scope.station.yxzk=data.yxzk;
	   	 		$scope.station.gldw=data.gldw;
	   	 		$scope.station.sjgc=data.sjgc;
	   	 		$scope.station.bz=data.bz;
    	   }
       })
       .error(function(error){
    	    console.log(url);
    	    console.log($scope.user.username);
    		console.log("userinfoController请求http请求失败");
       });

}]);