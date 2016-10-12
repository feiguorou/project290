
	var myMain = angular.module("myMain",['ui.router','oc.lazyLoad','angularBootstrapNavTree','ngMessages']);

	
	myMain.config(function($stateProvider, $urlRouterProvider,$rootScopeProvider) {
	    $stateProvider
	    //渠道监测
	    .state('channel', {
			url : '/channel',
			templateUrl : 'channel/indexCtrl'
		})

	
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
		  .state('alarmquery', {
						url : '/alarmquery',
						templateUrl : 'alarmquery/indexCtrl'
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
     
