
//指令部分

	var sysModule = angular.module("sysModule",[]);
	sysModule.directive('pwCheck', [function () {
	    return {
	        require: 'ngModel',
	        link: function (scope, elem, attrs, ctrl) {
	            var firstPassword = '#' + attrs.pwCheck;
	            ctrl.$setValidity('pwError', true);
	            elem.on('keyup', function () {
	                scope.$apply(function () {
	                    var v = elem.val()==angular.element(firstPassword).val();
	                    ctrl.$setValidity('$valid', v);
	                    ctrl.$setValidity('pwError', v);
	                });
	            });
	            angular.element(firstPassword).on('keyup', function () {
	                scope.$apply(function () {
	                    ctrl.$setValidity('$valid', false);
	                    ctrl.$setValidity('pwError', false);
	                });
	            });
	        }
	    };
	  }]);

	//树形目录

	sysModule.controller('sysTreeController', ['$scope','$state', function($scope,$state){
		
		$scope.my_sys_data = [{
			  label: '个人信息',
			  classes: ["special", "red"],
			},{
				label: '增加用户',
			    classes: ["special", "red"],
		    },{
			label: '管理用户',
		    classes: ["special", "red"],
			}];
		 $scope.my_tree_hander = function(branch){
			 console.log(branch);
	         if(branch.label=="个人信息")
	        	 {
	        	   $state.go('sys.userinfo');
	        	 }
	         else  if(branch.label=="增加用户")
	        	 {
	        	 $state.go('sys.insertuser');
	        	 }
	         else  if(branch.label=="管理用户")
	        	 {
	        	 $state.go('sys.manuser');
	        	 }
		 };
		 height = jQuery("body").height()-162> jQuery("#left_wrapper").height()?jQuery("body").height()-162:jQuery("#left_wrapper").height();
		 
		 $scope.height="height:"+height;
	}]);
	//用户基本信息
	sysModule.controller('userinfoController',['$scope','$http',function($scope,$http){

		function initState()
		{
			$scope.isUsername = true;
			$scope.isPassword =true;
			$scope.isRepassword =true;
			$scope.isRealname=true;
			$scope.isRole =true;
			$scope.isMan =true;
			$scope.isWoman =true;
			$scope.isSubmit =true;
			$scope.isViewstate=true;
			$scope.stateInfo="当前状态为查看状态,点击修改开始修改";
		}
		$scope.user={};
		$scope.isViewstate=true;
		$scope.roles=[{id:0,name:'管理员权限'},{id:1,name:'普通权限'}];
		$scope.copy={};
		
		initState();
		$scope.modifyInfo1="修";
		$scope.modifyInfo2="改";
		$scope.changeState = function (){
			
			console.log("state:"+$scope.isViewstate);
			if($scope.isViewstate)
		    {
				//从视图模式装换为编辑模式    备份
	 		   $scope.copy.username=$scope.user.username;
			   $scope.copy.password=$scope.user.password;
			   $scope.copy.repassword=$scope.user.repassword;
			   $scope.copy.sex=$scope.user.sex;
			   $scope.copy.realname=$scope.user.realname;
			   $scope.copy.role=$scope.user.role;
			   
		    }
			else
			{
	 		   $scope.user.username=$scope.copy.username;
			   $scope.user.password=$scope.copy.password;
			   $scope.user.repassword=$scope.copy.repassword;
			   $scope.user.sex=$scope.copy.sex;
			   $scope.user.realname=$scope.copy.realname;
			   $scope.user.role=$scope.copy.role;
			}
			
			
			$scope.isPassword =!$scope.isPassword;
			$scope.isRepassword =!$scope.isRepassword;
			$scope.isRealname=!$scope.isRealname;
			$scope.isMan =!$scope.isMan;
			$scope.isWoman =!$scope.isWoman;
			$scope.isSubmit =!$scope.isSubmit;
			

			
			$scope.isViewstate=!$scope.isViewstate;
			
			
			$scope.isViewstate?$scope.stateInfo="当前状态为查看状态,点击修改开始修改":$scope.stateInfo="当前状态为编辑状态,点击保存修改提交";
			$scope.isViewstate?$scope.modifyInfo1="修":$scope.modifyInfo1="取";
			$scope.isViewstate?$scope.modifyInfo2="改":$scope.modifyInfo2="消";
		};
		
		  $scope.submitForm =function(valid){
			  if(valid)
				  {
					$http({
					      url:'/project290/sys/updateCurrentUserCtrl',
					      method:'POST',
					      responseType:'json',
					      params:{username:$scope.user.username,
					    	      password: $scope.user.password,
					    	      sex:parseInt($scope.user.sex),
					    	      realname:$scope.user.realname}
				       })
				       .success(function(data,status,headers,config) 
				       {
				    	   console.log("上传的名字：" + $scope.user.username);
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
		      url:'/project290/sys/getCurrentUserCtrl',
		      method:'POST',
		      responseType:'json',
		      params:{}
	       })
	       .success(function(data,status,headers,config) 
	       {
	    	   if(data!=null)
	    	   {
	    		   console.log("用户的基本信息 ： ");
	    		   console.log(data.user_name + data.password + data.sex + data.realname +data.role);
	    		   console.log("*************");
	    		   $scope.user.username=data.user_name;
	    		   $scope.user.password=data.password;
	    		   $scope.user.repassword=data.password;
	    		   $scope.user.sex=data.sex;
	    		   $scope.user.realname=data.realname;
	    		   $scope.user.role=data.role;
	    	   }
	       })
	       .error(function(error){
	    	    console.log(url);
	    	    console.log($scope.user.username);
	    		console.log("userinfoController请求http请求失败");
	       });

	}]);
	//添加用户信息
	sysModule.controller('insertUserController',['$scope','$http',function($scope,$http){
		$scope.user={};
		$scope.user.sex=0;
		$scope.roles=[{id:0,name:'管理员权限'},{id:1,name:'普通权限'}];
		$scope.resetForm =function()
		{
		   $scope.user.username="";
		   $scope.user.password="";
		   $scope.user.repassword="";
		   $scope.user.sex=null;
		   $scope.user.realname="";
		   $scope.user.role=null;
		   
		   //console.log("dirty:"+$scope.myForm.username.$dirty);
		   
		   $scope.myForm.username.$dirty=false;
		   $scope.myForm.password.$dirty=false;
		   $scope.myForm.repassword.$dirty=false;
		   $scope.myForm.sex.$dirty=false;
		   $scope.myForm.realname.$dirty=false;
		   $scope.myForm.role.$dirty=false;
		   
		   $scope.formInfo="";
		};
		
		$scope.submitForm =function(valid){
			  if(valid)
				  {
					$http({
					      url:'/project290/sys/insertNewUserCtrl',
					      method:'POST',
					      responseType:'json',
					      params:{username:$scope.user.username,
					    	      password: $scope.user.password,
					    	      sex:parseInt($scope.user.sex),
					    	      realname:$scope.user.realname,
					    	      role:parseInt($scope.user.role)}
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
				    		 $scope.formInfo="用户名已存在,更新失败";
				    	   }
				       })
				       .error(function(error){
				    		console.log("insertNewUserCtrl请求http请求失败");
				       });
				  }
		  };
	}]);
	//管理用户

	sysModule.controller('manuserController',['$scope','$http',function($scope,$http){
		console.log("jQuery:" + jQuery);
	    console.log("locales:" + jQuery.fn.bootstrapTable.locales);
	    $scope.removeItem = function()
	    {
	    	var usernames = jQuery.map(jQuery("#manuserTable").bootstrapTable('getSelections'), function (row) {
                return row.username;
            });
	    	//console.log(usernames);
	    	
	    	
			$http({
			      url:'/project290/sys/deleteUsersCtrl',
			      method:'POST',
			      responseType:'json',
			      params:{usernames:usernames}
		       })
		       .success(function(data,status,headers,config) 
		       {
		    	   console.log(data);
		    	   if(data.status=="ok")
		    	   {
                     console.log("删除用户成功:"+usernames);
                     jQuery("#manuserTable").bootstrapTable('remove', {
                         field: 'username',
                         values: usernames
                     });
		    	   }
		    	   else
		    	   {
		    		   console.log("删除用户失败:"+usernames);
		    	   }
		       })
		       .error(function(error){
		    		console.log("deleteUsersCtrl请求http请求失败");
		       });
	    	
	    };
	    
	    
		jQuery("#manuserTable").bootstrapTable();
		
		$http({
		      url:'/project290/sys/getOtherUsersCtrl',
		      method:'POST',
		      responseType:'json',
		      params:{}
	       })
	       .success(function(data,status,headers,config) 
	       {
	    	   console.log("所有用户 ： " + data);
	    	   jQuery("#manuserTable").bootstrapTable('load',data);
	       })
	       .error(function(error){
	    		console.log("insertNewUserCtrl请求http请求失败");
	       });
		
		
	}]);

