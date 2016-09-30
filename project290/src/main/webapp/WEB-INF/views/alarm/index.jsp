<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/commons/include/taglibs.jsp"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<title>预警查询</title>
</head>
<link href="/project290/css/bootstrap/css/bootstrap.min.css"
	rel="stylesheet" type="text/css" />
<link href="/project290/commons/bootstraptable/css/bootstrap-table.css"
	rel="stylesheet" />

<!-- font Awesome -->
<link href="/project290/css/bootstrap/fonts/font-awesome.min.css"
	rel="stylesheet" type="text/css" />
<!-- Ionicons -->
<link href="/project290/css/ionicons.min.css" rel="stylesheet"
	type="text/css" />
<link href="/project290/css/AdminLTE-test.css" rel="stylesheet"
	type="text/css" />
<!-- 时间选择 CSS-->
<link href="/project290/css/bootstrap/css/bootstrap-clockpicker.min.css"
	rel="stylesheet" media="screen">
<link
	href="/project290/css/bootstrap/css/bootstrap-datetimepicker.min.css"
	rel="stylesheet" media="screen">
<link href="/project290/css/bootstrap/css/bootstrap-treeview.min.css"
	rel="stylesheet" media="screen">

<script src="/project290/js/jQuery/jquery-2.1.4.min.js"></script>
<script src="/project290/js/bootstrap/bootstrap3.2.js" charset="UTF-8"></script>
<script src="/project290/js/bootstraptable/bootstrap-table.js"></script>
<script src="/project290/js/bootstraptable/bootstrap-table-zh-CN.min.js"></script>

<!-- 导出扩展 -->
<script src="/project290/js/bootstraptable/bootstrap-table-export.js"></script>
<script src="/project290/js/bootstraptable/tableExport.js"></script>
<!-- 时间选择 JS-->
<script src="/project290/js/modules/waterinfo/waterInit.js"></script>
<script src="/project290/js/bootstrap/bootstrap-datetimepicker.min.js"
	charset="UTF-8"></script>
<script src="/project290/js/bootstrap/bootstrap-clockpicker.min.js"></script>
<script src="/project290/js/bootstrap/bootstrap-datetimepicker.zh-CN.js"
	charset="UTF-8"></script>
<script src="/project290/js/modules/datainfo/date.js" charset="UTF-8"></script>
<script src="/project290/js/modules/datainfo/base.js" charset="UTF-8"></script>
<!--测站名称显示  -->

<script type="text/javascript"
	src="/project290/js/bootstrap/bootstrap-treeview.min.js"></script>

<script src="/project290/js/highCharts/highcharts.js"></script>
<script src="/project290/js/highCharts/themes/grid.js"></script>
<script src="/project290/js/highCharts/modules/exporting.src.js"></script>

<script src="/project290/js/modules/alarm/alarmquery.js"></script>

<body>
	<div id="alarminfo" ng-controller="alarminfoController"
		style="height:1000px">
		<div class="wrapper row-offcanvas row-offcanvas-left"
			style="min-width:1300px;">
			<!-- left side -->
			<aside class="left-side sidebar-offcanvas"
				style="width:250px;background:url(/project290/images/modules/index/main_left.jpg)">
				<section class="sidebar" style="background : transparent;">
					<div class="nav-tabs-custom" style="background : transparent;">
						<div class="tab-content no-padding"
							style="background : transparent;">
							<div class="chart tab-pane active" id="sales-chart"
								style="position: relative; background : transparent;">
								<div id="StadiaName"
									style="background:url(/project290/images/modules/index/main_left.jpg)">
								</div>
							</div>
						</div>
					</div>
				</section> 
			</aside>
			<!-- right content -->
			<aside class="right-side" > 
				<section class="content" style="margin-left:30px;">
					<!-- time input row -->
					<div class="row">
						<div class="col-xs-12 connectedSortable">
							<table >
								<tr>
									<td style="padding-left:20px">查询时间：</td>
									<!-- begin time input -->
									<td style="padding-top:15px">
										<div class="form-group">
											<label for="exampleInputName2" class=" control-label sr-only">开始时间：
											</label>
											<%
												java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(
														"yyyy-MM-dd ");
												java.util.Date currentTimeDam = new java.util.Date();//getCurrentDate()
												String str_dateDam = formatter.format(currentTimeDam); //time format
											%>
											<div class="input-group date form_date" id="timeTable"
												style="width:200px" data-date=""
												data-date-format="dd MM yyyy" data-link-field="inputBeginTime"
												data-link-format="yyyy-mm-dd">
												<input class="form-control" size="10" type="text" value="<%=str_dateDam%>"  readonly>
												<span class="input-group-addon"> <span
													class="glyphicon glyphicon-remove"></span> </span> <span
													class="input-group-addon"> <span
													class="glyphicon glyphicon-calendar"></span> </span>
											</div>
											<!-- onchange="inputTimeToCreateTable()" -->
											<input type="hidden" id="inputBeginTime" value="<%=str_dateDam%>" />
										</div>
									</td>
									<td>~</td>
									<!-- end time input -->
									<td style="padding-top:15px">
										<div class="form-group">
											<label for="exampleInputName2" class=" control-label sr-only">结束时间：</label>
											<div class="input-group date form_date" id="endTimeTable"
												style="width:200px" data-date=""
												data-date-format="dd MM yyyy"
												data-link-field="inputEndTime"
												data-link-format="yyyy-mm-dd">
												<input class="form-control" size="10" type="text"
													value="<%=str_dateDam%>" readonly> <span
													class="input-group-addon"> <span
													class="glyphicon glyphicon-remove"></span> </span> <span
													class="input-group-addon"> <span
													class="glyphicon glyphicon-calendar"></span> </span>
											</div>
											<input type="hidden" id="inputEndTime" value="<%=str_dateDam%>" />
										</div>
									</td>
									<td>
										<button id="alarmQueryButton" class="btn btn-default"
											style="margin-left:10px;">查询
										</button>
									</td>
								</tr>
							</table>
						</div>
					</div><!-- end time input row -->
					
					<div class="nav-tabs-custom" style="margin-top:-0.5em;">
						<div class="tab-content no-padding">
							<div class="chart tab-pane active" id="allAlarmInfos" style="position: relative;  padding-bottom:50px">
	                   			<p style="text-align:center;font: bold 30px arial,sans-serif;margin:10px 0 -40px 0">闸站报警信息</p>
	                   			<div class="table-responsive"  >
									<table data-toggle="table" id="allAlarmInfoTable"
										style="text-align:center"
										class="table-striped table-bordered" 
										data-cache="false" data-search="true" data-pagination="true"
										data-page-size="20" data-page-list="[20,30,50,70,ALL]"
										data-select-item-name="toolbar1" data-show-export="true">
										<thead>
											<tr>
											    <th data-field="stadiaName"  data-align="center">闸站名称</th>
											    <th data-field="meaTime"  data-align="center">采集时间</th>
												<th data-field="ctt" data-align="center">报警原因</th>
												<th data-field="status"  data-align="center">闸门状态</th>
											</tr>
										</thead>
									</table>
								</div>				                          
	                  		</div>
						</div>
					</div>
				</section> 
			</aside>
		</div>
	</div>
</body>
</html>
