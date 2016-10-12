<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/commons/include/taglibs.jsp"%>
<%@ include file="/commons/include/waterinfojs.jsp" %>
<%@ include file="/commons/include/waterinfocss.jsp" %>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>水情信息</title>
    <script src="/project290/js/modules/waterinfo/waterinfo.js"></script> 
  </head>
	<!-- 设置 树 的透明 -->
	<style>
	 #StadiaName ul li
	 {
	 	background-color:transparent;
	 }
	</style>

<body>
<!-- <div id="waterinfo" ng-controller="waterinfoController" style="">  -->
<div style="background:url(/project290/images/modules/index/main_content3.jpg); background-size:100% 100%; "><!--style="background:url(/project290/images/modules/index/main_content2.jpg); background-size:100% 100%; "  -->
	<div class="wrapper row-offcanvas row-offcanvas-left" style="min-width:1500px;overflow-x:hidden;background-color:transparent;" >
    	<!-- Left side column. contains the logo and sidebar -->
        <aside class="left-side sidebar-offcanvas"  style="background-color:transparent;"><!-- style="background:url(/project290/images/modules/index/main_left.jpg)" --> 
        <!-- sidebar: style can be found in sidebar.less --> 
        	<SECTION class="sidebar" style="background-color:transparent;"><%-- style="background:url(../img/left_03.jpg)" --%>
            	<!-- Sidebar user panel -->
           	    <div class="nav-tabs-custom"  style="background-color : transparent;"><%--style="background:url(../img/left_03.jpg)" --%><!-- Tabs within a box -->
			  		<!-- <ul class="nav nav-tabs pull-center">
                           <li class="active"><a href="#sales-chart" data-toggle="tab" onclick="showAllJSInfo()" style="font-size:30px; ">渠首总干渠</a></li>
                          </ul>
                    -->
	                <div class="tab-content no-padding" style="background-color:transparent;"><!-- style="background:rgb(99, 178, 234)" -->
	                	<!-- Morris chart - Sales -->
	                	<div class="chart tab-pane active" id="sales-chart" style="position: relative; background-color : transparent;"><!-- height:1000px; background-color:pink; -->
	                    	<!-- sidebar menu: : style can be found in sidebar.less -->
	                   		<div id="StadiaName" style="background-color:transparent;"><!--  style="background:url(/project290/images/modules/index/main_left.jpg)" -->
							</div>           
							<!-- <div id="treeTest"></div>  -->
	                 	</div>
	                </div>
                </div><!-- /.nav-tabs-custom -->
		 	</section>
        </aside> 
        <aside class="right-side" style="background-color:transparent;">
        	<section class="content"  style="margin-left:30px;background-color:transparent;"><!-- class="content" style="padding:-100px -10px 0 0 " style="overflow: hidden;" -->
				<!-- 所有站点水情预览或者实时查询 --> 
           	    <div class="nav-tabs-custom" style="margin-top:-0.5em;background-color:transparent;"><!--  -->
                	<!-- Tabs within a box -->
                    <ul class="nav nav-tabs pull-right">                      
                    	<li  id="stadiasRealInfo" class=""><a  data-toggle="tab" onclick="showQuery()">测站水情</a></li><!-- href="#stadiaInfoQuery" --> 
                        <li class="active" id="allStadiasRealInfo"><a  data-toggle="tab" onclick="showAll()">实时信息</a></li><!-- href="#allStadiaInfos" --> 
                    </ul>
                    <div class="tab-content no-padding" style="background-color:transparent;"><!-- style="background:rgb(99, 178, 234)" -->
                    
                                            	<!-- Morris chart - Sales -->
                          	<div class="chart tab-pane  active" id="allStadiaInfos" style="position: relative;  padding-bottom:50px;background-color:transparent;"><!-- height: 300px; padding-bottom:200px -->
                              <!-- sidebar menu: : style can be found in sidebar.less --> 
								<!-- class="row" -->
                   				 <p style="text-align:center;font: bold 30px arial,sans-serif;margin:10px 0 -40px 0">实时信息</p>
                   				 	<div class="table-responsive"  style="background-color:transparent;">
									<!-- data-show-toggle="true" data-show-columns="true" -->
									<table data-toggle="table" id="allStadiasInfoTable"
										style=" text-align:center; background-color:transparent;"
										class=" table-bordered" id="allStadiasTable"
										data-cache="false" data-search="true" data-pagination="true"
										 data-page-size="20"  data-page-list="[20,30,50,70,ALL]"
										data-select-item-name="toolbar1" data-show-export="true">
										<thead><!-- class="table-striped" -->
											<tr>
												<!-- <th data-field="stadiaCode" data-sortable="true" data-align="center">测站编号</th> -->
											    <th data-field="stadianame"  data-align="center">闸站名称</th><%--data-sortable="true"--%>
											    <th data-field="meatime"  data-align="center">采集时间</th>
												<th data-field="heightup" data-align="center">闸前水位 (m)</th>
												<th data-field="heightdown"  data-align="center">闸后水位 (m)</th>
												<th data-field="floodNumber" data-align="center">淹没板数</th>
												<th data-field="stackNum" data-align="center">护板总数</th>
												<th data-field="fluxgate"  data-align="center">过闸流量 (m<sup>3</sup>/s)</th>
												<th data-field="opendegree1"  data-align="center">闸孔(一)开度(m)</th>
												<th data-field="opendegree2"  data-align="center">闸孔(二)开度(m)</th>
												<th data-field="opendegree3"  data-align="center">闸孔(三)开度(m)</th> 
											</tr>
										</thead>
									</table>
								</div>				                          
                  			</div>
                  			<!--测站实时查询 -->
                   			<div class="chart tab-pane " id="stadiaInfoQuery" style="position: relative; padding-bottom:50px; background-color:transparent;">
                   				<div id="stadiaQuery" style="background-color:transparent;">
					                <!-- Main content -->  
					                <div class="content"  id="showQueryInfo" style="background-color:transparent;">     <!--   style="display:none" -->                
					            
					                    <div class="row" style="background-color:transparent;">
					
										<div class="col-xs-12 connectedSortable" style="background-color:transparent;">
											<table style="background-color:transparent;">
												<tr>
													<td style="padding-left:20px">查询时间：</td>
													<td style="padding-top:15px">
														<div class="form-group">
															<label for="exampleInputName2" class=" control-label sr-only">开始时间：
															</label>
															<%
																java.text.SimpleDateFormat formatter = new java.text.SimpleDateFormat(
																		"yyyy-MM-dd ");
																java.util.Date currentTimeDam = new java.util.Date();//得到当前系统时间
																String str_dateDam = formatter.format(currentTimeDam); //将日期时间格式化 
																//out.println(str_date1);
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
					
														</div></td>
													<td>~</td>
													<!-- 新增闸坝结束时间输入 -->
													<td style="padding-top:15px">
														<div class="form-group">
															<label for="exampleInputName2" class=" control-label sr-only">结束时间：
															</label>
					
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
															<!-- onchange="inputTimeToCreateTable()" -->
					
															<input type="hidden" id="inputEndTime"
																value="<%=str_dateDam%>" />
					
														</div></td>
													<td><button id="stadiaInqueryBotton" class="btn btn-default"
															style="margin-left:10px;">查询</button>
													</td>
					
												</tr>
											</table>
					
										</div>
										<!-- /.col -->
									</div><!-- /.row 时间输入框-->
							 <div id="damData" style="background-color:transparent;"><!-- 表格模块  class="row" -->
								<h3 align='center' style="margin:0px 0px -30px 0px">
									<font><span id="stadiaNameShow" ></span><span id="date"></span>闸站水位流量</font>
								</h3>  
								<div  style="background-color:transparent;"><!-- 表格大小问题还未解决 style="padding-bottom:10px;margin-bottom:10px;border:2px solid black;" -->
								<div style="background-color:transparent;"> <!-- class="table-responsive" style="border:1px solid blue;" style="height:600px;" -->
									<!-- data-show-toggle="true" data-show-columns="true" -->
									<table data-toggle="table" 
										style=" text-align:center;background-color:transparent;"
										class=" table-bordered" id="WaterReportInfo"
										data-cache="false" data-search="true" data-pagination="true"
										data-page-size="5"  data-page-list="[5,10,20,50]"
										data-select-item-name="toolbar1" data-show-export="true">
										<thead><!-- class="table-striped" -->
											<tr>
												<!-- <th data-field="stadiaCode" data-sortable="true" data-align="center">测站编号</th> -->
											    <th data-field="stadianame" data-sortable="true" data-align="center">测站名称</th>
												<th data-field="meatime" data-sortable="true" data-align="center">采集时间</th>
												<th data-field="heightup" data-sortable="true" data-align="center">闸前水位 (m)</th>
												<th data-field="heightdown" data-sortable="true" data-align="center">闸后水位 (m)</th>
												<th data-field="floodNumber" data-align="center">淹没板数</th>
												<th data-field="stackNum" data-align="center">护板总数</th>
												<th data-field="fluxgate" data-sortable="true" data-align="center">过闸流量 (m<sup>3</sup>/s)</th>
												<th data-field="opendegree1" data-sortable="true" data-align="center">闸孔（一）开度(m)</th>
												<th data-field="opendegree2" data-sortable="true" data-align="center">闸孔（二）开度(m)</th>
												<th data-field="opendegree3" data-sortable="true" data-align="center">闸孔（三）开度(m)</th> 
											</tr>
										</thead>
									</table>

								</div>
								</div>
								
							
							<%--<h3 style="text-align:center;margin-top:-23px"><span id="stadiaNameShow"></span> 水情信息曲线图</h3>
							--%>
							  
							<div id="damsRealWaterInfoChart" style="width:100%;height:400px;background-color:transparent;">							
							</div>  <!--   静态水位流量曲线显示模块 -->
							<%--<div id="damsWaterBarChart" style="margin:10px 0px 0 0px;width:100%;height:400px;">							
							</div><!--   静态水位流量曲线显示模块 -->
							
							--%></div>
						 
							
							<div  id="damNoData" style="display:none">
							<h2 align="center" id="NoDataInfo">当前所选时间段没有数据，请重新选择时间……</h2>							
							</div>
							</div>
							          
                   			</div>
                    		</div>
                    
                    </div>
                </div><!-- /.nav-tabs-custom -->
                <!-- 所有站点水情预览或者实时查询 -->
            </section><!-- /.content -->         
       </aside>
	</div>
	</div>
	 
</body>
</html>
