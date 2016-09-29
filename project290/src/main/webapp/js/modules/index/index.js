
	var myMain = angular.module("myMain",['ui.router','oc.lazyLoad','angularBootstrapNavTree','ngMessages']);

	
	myMain.config(function($stateProvider, $urlRouterProvider,$rootScopeProvider) {
	    $stateProvider
	      .state('level',{
	      	url: '/level',
	        templateUrl: 'level/indexCtrl',
				resolve: {
					deps: ['$ocLazyLoad',
	               function ($ocLazyLoad) {
							return $ocLazyLoad.load({files:['solid/highcharts/highcharts.src.js','js/modules/level/level.js']});
	             }]
				}
	        })
	      .state('soli',{
	        abstract:true,
	      	url: '/soli',
	        templateUrl: 'soli/indexCtrl',
			resolve: {
					deps: ['$ocLazyLoad',
	               function ($ocLazyLoad) {
							return $ocLazyLoad.load(['js/modules/soil/soil.js']);
	             }]
				}
	        })
//	        .state('soli.map',{
//	        	url: '/map',
//	            templateUrl: 'soli/mapCtrl',
//	            onExit: function($rootScope){
//	            	$rootScope.$broadcast('to-map', {message:"fuck bin bin!"});
//	             }
//	          })
	        .state('soli.detail',{
	        	url: '/detail/:code',
	            templateUrl: 'soli/detailCtrl',
	            controller: function($scope, $stateParams){
	          	  $scope.code=$stateParams.code;
	             }
	         })
	      //机井控制部分
	       .state('control', {
			abstract: true,
			url: '/control',
			templateUrl: 'control/indexCtrl'
		})
		.state('control.basicinfo', {
			url: '/basicinfo',
			templateUrl: 'control/basicinfo',
			resolve: {
				deps: ['$ocLazyLoad',
               function ($ocLazyLoad) {
						return $ocLazyLoad.load(['js/modules/well/controllers/basicinfoController.js']);
             }]
			}
		})
		.state('control.runinfo', {
			url: '/runinfo',
			templateUrl: 'control/runinfo',
			resolve: {
				deps: ['$ocLazyLoad',
               function ($ocLazyLoad) {
						return $ocLazyLoad.load({
							files: [
					 'node_modules/echarts/dist/echarts.js'
					 /* 'node_modules/echarts/theme/macarons.js'*/
                  ]
						}).then(
							function () {
								return $ocLazyLoad.load({
									files: [
									        'js/modules/well/controllers/runinfoController.js'
									       
									       ]
								})
							},
							function () {
								console.log("load error!");
							}
						);
             }]
			}
		})
		.state('control.usrMonitorData', {
			url: '/usrMonitorData',
			templateUrl: 'control/usrMonitorData',
			resolve: {
				deps: ['$ocLazyLoad',
               function ($ocLazyLoad) {
						return $ocLazyLoad.load({
							files: [
                      'node_modules/datatables.net/js/jquery.dataTables.js',
					  'node_modules/datatables.net-dt/css/jquery.dataTables.css',
					  'node_modules/echarts/dist/echarts.js',
					  'node_modules/angular-ui-bootstrap/dist/ui-bootstrap.js',
					  'node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
					  'node_modules/angular-ui-bootstrap/dist/angular-locale_zh-cn.js'

                  ]
						}).then(
							function () {
								return $ocLazyLoad.load({
									files: [
											'node_modules/datatables.net/chinese.json',
									       'js/modules/well/controllers/usrMonitorDataController.js'
									       ]
								})
							},
							function () {
								console.log("load error!");
							}
						);
             }]
			}
		})

	.state('control.switcher', {
			url: '/control',
			templateUrl: 'control/switcher',
			resolve: {
				deps: ['$ocLazyLoad',
               function ($ocLazyLoad) {
						return $ocLazyLoad.load({
							files: [
					  'assets/switcher/css/bootstrap3/bootstrap-switch.css',
  					  'assets/switcher/css/highlight.css',
  					  'assets/switcher/js/highlight.js',
					  'assets/switcher/js/bootstrap-switch.js'
					]
						}).then(
							function () {
								return $ocLazyLoad.load({
									files: [

									       'js/modules/well/controllers/switcherController.js'
									       ]
								})
							},
							function () {
								console.log("load error!");
							}
						);
             }]
			}
		})
		.state('control.sendmessage', {
			url: '/sendmessage',
			templateUrl: 'control/sendmessage',
			resolve: {
				deps: ['$ocLazyLoad',
               function ($ocLazyLoad) {
						return $ocLazyLoad.load({
							files: [
								'assets/autoLine/auto-line-number.js',
					]
						}).then(
							function () {
								return $ocLazyLoad.load({
									files: [

									       'js/modules/well/controllers/sendmessageController.js'
									       ]
								})
							},
							function () {
								console.log("load error!");
							}
						);
             }]
			}
		})

	//机井控制部分结束
		  .state('waterinfo',{
			  url: '/waterinfo',
			  templateUrl: 'waterinfo/indexCtrl'
//			  resolve:{
//				  deps:['$ocLazyLoad',
//				        function($ocLazyLoad){
//					return   $ocLazyLoad.load(['js/modules/waterinfo/waterinfo.js']);
//				  }]
//			  }
		  })
	      .state('datainfo',{
	    	url: '/datainfo',
	        templateUrl: 'datainfo/indexCtrl',
		    resolve: {
					deps: ['$ocLazyLoad',
	               function ($ocLazyLoad) {
							return $ocLazyLoad.load(['js/modules/datainfo/datainfo.js']);
	             }]
				}
	      })
	      .state('sys',{
	        abstract:true,
	    	url: '/sys',
	        templateUrl: 'sys/indexCtrl',
	        resolve: {
	           sysDeps: ['$ocLazyLoad',
               function ($ocLazyLoad) {
						return $ocLazyLoad.load(['js/modules/sys/sys.js'])
						.then(
								function () {
									console.log("load js/modules/sys/sys.js!");
								},
								function () {
									console.log("load error!");
								}
							);
             }]
			}
	      })
	      .state('sys.userinfo',{
	    	url: '/userinfo',
	        templateUrl: 'sys/userinfoCtrl',  //为什么还要跳转到后台？？
	        resolve: {
	        	sysDepsUserInfo: ['sysDeps', function(sysDeps) {
	                    // you can use your service
	                   console.log("get sys sysDepsUserInfo");
	                }]
	      }
	      })
	       .state('sys.insertuser',{
	    	url: '/insertuser',
	        templateUrl: 'sys/insertuserCtrl',
		    resolve: {
		    	sysDepsInsertuser: ['sysDeps', function(sysDeps) {
		                    // you can use your service
		                   console.log("get sys sysDepsInsertuser");
		                }]
		      }
	      })
	      .state('sys.manuser',{
	    	url: '/manuser',
	        templateUrl: 'sys/manuserCtrl',
		    resolve: {
		    	sysDepsManuser: ['sysDeps', function(sysDeps) {
                    // you can use your service
                   console.log("get sys sysDepsManuser");
                }]
           }
	      });
	      $urlRouterProvider.when('/profile', function(){});
	      $urlRouterProvider.when('/home', function(){});
	      $urlRouterProvider.otherwise('/sys/userinfo');
	  });
	
     myMain.controller('headerController',['$scope','$location',function($scope,$location){
    	 
    	 $scope.exit =function()
    	 {
    		 $location.path('/logout').replace();//保证不会退回到修改前的url
    	 }
    	 
     }]);
     
