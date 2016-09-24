<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'activeTest.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
    <div class="nav-tabs-custom">
                       <!-- Tabs within a box -->
                          <ul class="nav nav-tabs pull-right">                      
                          	<li  id="stadiasRealInfo" class=""><a href="#stadiaInfoQuery" data-toggle="tab">测站水情</a></li> 
                         	<li class="active" id="allStadiasRealInfo"><a href="#allStadiaInfos" data-toggle="tab" >实时信息</a></li>                                                         
                          </ul>
                          <div class="tab-content no-padding"  style="background:rgb(99, 178, 234)">
                          	<div id="allStadiaInfos">选择实时信息的结果</div>
                          	<div id="stadiaInfoQuery">选择测站水情的结果</div>
                          </div>
  </body>
</html>
