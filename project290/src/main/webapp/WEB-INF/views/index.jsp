<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/commons/include/taglibs.jsp"%>
<html>
<head>
<title>主页</title>
<meta http-equiv="contentType" content="text/html; charset=UTF-8">
<%@ include file="/commons/include/css.jsp"%>
<link rel="stylesheet" href="${ctx}/css/modules/index/index.css"
	type="text/css"></link>

</head>
<body>
    <div id="main" ng-app="myMain">
   
    <div id="header_all" ng-controller="headerController">

        <div id="header_wrapper">
            <div id="header"></div>
        </div>
        <div id="header_menu_wrapper">
         <div id="header_menu">
            <ul id="logout">
                  <li><a class ="no-border"></a>
				  </li>
			      <li><a class ="no-border" href="${ctx}/logout"  style="padding-bottom: 5px;padding-bottom: 5px; text-decoration:none;">登出</a>
				  </li>
			</ul>
            <ul id="menus">
					<li><a ui-sref="waterinfo" ui-sref-active="current">水情信息</a>
					</li>
					<li><a ui-sref="soli.map" ui-sref-active="current">渠道检测</a>
					</li>
					<li><a ui-sref="control.basicinfo" ui-sref-active="current">报警查询</a>
					</li>
					<li><a ui-sref="datainfo" ui-sref-active="current">数据录入</a>
					</li>
					<li><a ui-sref="sys.userinfo" ui-sref-active="current">系统管理</a>
					</li>
			</ul>
         </div>
        </div>
     </div>
      
    <div id="content_wrapper">
       <div id="content">
        <div ui-view></div> 
       </div> 
    </div>  
     
    
    </div>

     </div>
    <%@ include file="/commons/include/javascript.jsp" %>
    <script type="text/javascript" src="${ctx}/js/modules/index/index.js" ></script>
    <!-- <script type="text/javascript" src="${ctx}/js/modules/waterinfo/waterinfo.js" ></script>  -->
    
    
</body>
</html>
