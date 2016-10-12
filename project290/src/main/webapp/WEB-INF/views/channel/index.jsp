<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/commons/include/taglibs.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
	<meta charset="UTF-8" />
	
	<link rel="stylesheet" type="text/css" href="/project290/gis/css/sbox-1.0.css">
	<link href="/project290/css/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
	<script src="/project290/gis/js/jquery-1.11.0.js"></script>
	<script src="/project290/gis/js/sbox-data-1.0.js"></script>
	<script src="/project290/gis/js/sbox-1.0.js"></script>
	<script src="/project290/gis/js/widthAdapt.js"></script> 
	<script>
		sBox.dataPoints = 'msPoints';
		sBox.dataName = '江山总干渠';
		sBox.Url = '/project290/gis/data.txt';
		sBox.interval = 60*60; // 60秒刷新一次
		
	</script>
</head>
<body id="gisBody">
 <div style="margin-top:5px"><a href="#"  onclick="hideGoto()">
  <div style="width:100%;height:10px;background:url(/project290/gis/img/top.gif) repeat-x;text-align:center;"> <img src="/project290/gis/img/up.gif"  id="hideBotton" style="height:8px; z-index:0;position:absolute"/>
</div>
 <!-- <span id="hideBotton" class="glyphicon glyphicon-open"></span>收起 --></a></div> 
	<div id="sBoxContainer" onmousemove="mouse_moving(event)" onclick="mouse_click(event)"  style="width: 100%">
		<img id="map"  onload="sBox.init()" src="/project290/gis/290map.png"  style="width: 100%"/>
	</div>
</body>
</html>
