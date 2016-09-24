<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@ include file="/commons/include/taglibs.jsp"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>数据信息</title>
  </head>
<!-- datetime -->
<script type="text/javascript" src="/project290/js/modules/datainfo/bootstrap-datetimepicker.js" charset="UTF-8"></script>
<script type="text/javascript" src="/project290/js/modules/datainfo/bootstrap-datetimepicker.zh-CN.js" charset="UTF-8"></script>
<script type="text/javascript" src="/project290/js/modules/datainfo/date.js" charset="UTF-8"></script>
<script type="text/javascript" src="/project290/js/modules/datainfo/base.js" charset="UTF-8"></script>

<script type="text/javascript" src="/project290/js/jQuery/jquery-1.8.3.min.js" charset="UTF-8"></script>

<!-- datetime -->
<link href="/project290/css/bootstrap/css/timeCSS/bootstrap-clockpicker.min.css" rel="stylesheet" media="screen">
<link href="/project290/css/bootstrap/css/timeCSS/bootstrap-datetimepicker.min.css" rel="stylesheet" media="screen">


	<style type="text/css">
	#datainfo {
	   padding-top:40px;
	    width:70em;
		margin: 0px auto;
	}
	.success-info
	{
	  color:#2e2;
	}
	.my-alert-info
	{
	  color:#b22;
	}
	</style>
<body>
<div id="datainfo" ng-controller="datainfoController" ><!-- style="height:2000px" -->
	<form role="form" name="myForm" ng-submit="submitForm(myForm.$valid)" class="form-horizontal" novalidate>
        <h1 class="text-center" style="color:#000;font-weight:bold;">测站信息录入与修改</h1>
        <h3 class="text-center" style="margin-bottom:1.5em;color:#a22;"><em class="text-warning"><font color="red">*</font></em>为必须填写的内容&nbsp&nbsp<em class="text-warning">*</em>只能填写数字</h3>
        <h3 class="text-center" style="margin-bottom:1.5em;color:#a22;"><span ng-bind="stateInfo"></span></h3>
		<div class="form-group  form-group-lg has-feedback">
			<div class="col-md-2">
				<label for="czmc" class="control-label">测站名称:</label>
			</div>
			<div class="col-md-4">
				<input class="form-control " id="czmc" name="czmc" type="text"
					ng-model='station.czmc' ng-disabled="isCzmc"/>
			</div>
			<div class="col-md-2">
				<label for="czlx" class="control-label">&nbsp&nbsp&nbsp测站类型:</label>
			</div>
			<div class="col-md-4">
				<select class="form-control " id="czlx"  name="czlx" ng-options="key for (key,value) in czlxs" ng-model="station.czlx" ng-disabled="isCzlx">
	                <option value=""  selected style='display:none;'>--请选择--</option>
                </select>
			</div>
		</div>
		
		<div class="form-group  form-group-lg has-feedback">
			<div class="col-md-2">
				<label for="wz" class="control-label">位置<em class="text-warning"><font color="red">*</font></em>:</label>
			</div>
			<div class="col-md-4">
				<select class="form-control " id="wz" name="wz" ng-options="key for (key,value) in wzs" ng-model='station.wz' ng-disabled="isWz">
					<option value="" selected style='display:none;'>--请选择--</option>
				</select>
			</div>
			<div class="col-md-2">
				<label for="czab" class="control-label">&nbsp&nbsp&nbsp测站岸别:</label>
			</div>
			<div class="col-md-4">
				<input class="form-control " id="czab" name="czab" type="text"
					ng-model='station.czab' ng-disabled="isCzab"/>
			</div>
		</div>
		
				<div class="form-group  form-group-lg has-feedback">
			<div class="col-md-2">
				<label for="sllx" class="control-label">水流流向:</label>
			</div>
			<div class="col-md-4">
				<input class="form-control " id="sllx" name="sllx" type="text"
					ng-model='station.sllx' ng-disabled="isSllx"/>
			</div>
			<div class="col-md-2">
				<label for="jmlx" class="control-label">&nbsp&nbsp&nbsp基面类型:</label>
			</div>
			<div class="col-md-4">
				<select class="form-control " id="jmlx" name="jmlx" ng-options="key for (key,value) in jmlxs" ng-model="station.jmlx" ng-disabled="isJmlx">
                  <option value="" style='display:none;' selected>--请选择--</option>
              </select>
			</div>
		</div>
		
		<div class="form-group  form-group-lg has-feedback">
			<div class="col-md-2">
				<label for="jmgc" class="control-label" style="text-align:left">基面高程(m)<em class="text-warning">*</em>:</label>
			</div>
			<div class="col-md-4">
			    <div>
				<input class="form-control " id="jmgc" name="jmgc" type="text"
					ng-model='station.jmgc' ng-disabled="isJmgc"/>
				</div>
			</div>
			<div class="col-md-2">
				<label for="xzjz" class="control-label" style="text-align:left">&nbsp&nbsp&nbsp修正基值(m)<em class="text-warning">*</em>:</label>
			</div>
			<div class="col-md-4">
				<input class="form-control " id="xzjz" name="xzjz" type="text"
					ng-model='station.xzjz' ng-disabled="isXzjz"/>
			</div>
		</div>
		
		<div class="form-group  form-group-lg has-feedback">
			<div class="col-md-2">
				<label for="xzcs" class="control-label">修正参数<em class="text-warning">*</em>:</label>
			</div>
			<div class="col-md-4">
				<input class="form-control " id="xzcs" name="xzcs" type="text"
					ng-model='station.xzcs' ng-disabled="isXzcs"/>
			</div>
			<div class="col-md-2">
				<label for="szny" class="control-label">&nbsp&nbsp&nbsp设站年月:</label>
			</div>
			<div class="input-group date form_date col-md-4"  id="date" data-date="" data-date-format="dd MM yyyy"
													data-link-field="dtp_input2" data-link-format="yyyy-mm-dd">
                <input class="form-control"  type="label"  id="szny" name="szny" ng-model="station.szny" ng-disabled="isSzny" value="" >
                <span class="input-group-addon"><span class="glyphicon glyphicon-remove"></span></span>
                <span class="input-group-addon"><span class="glyphicon glyphicon-calendar"></span></span>
                <input type="hidden" id="dtp_input2" readonly value="" name="stadia.estStYm" />
			</div>
		</div>
		
		<div class="form-group  form-group-lg has-feedback">
			<div class="col-md-2">
				<label for="yxzk" class="control-label">运行状况:</label>
			</div>
			<div class="col-md-4">
				<!-- <input class="form-control " id="username" name="username" type="text" ng-model='user.username' ng-disabled="isUsername"/> -->
				<select class="form-control " id="yxzk"  name="yxzk" ng-options="key for (key,value) in yxzks" ng-model="station.yxzk" ng-disabled="isYxzk">
                   <option value="" style='display:none;' selected>--请选择--</option>
               	</select>
			</div>
			<div class="col-md-2">
				<label for="gldw" class="control-label">&nbsp&nbsp&nbsp管理单位:</label>
			</div>
			<div class="col-md-4">
				<input class="form-control " id="gldw" name="gldw" type="text"
					ng-model='station.gldw' ng-disabled="isGldw"/>
			</div>
		</div>
		
		<div class="form-group  form-group-lg has-feedback">
			<div class="col-md-2">
				<label for="sjgc" class="control-label" style="text-align:left">设计高程(cm)<em class="text-warning">*</em>:</label>
			</div>
			<div class="col-md-4">
				<input class="form-control " id="sjgc" name="sjgc" type="text"
					ng-model='station.sjgc' ng-disabled="isSjgc"/>
			</div>
			<div class="col-md-2">
				<label for="bz" class="control-label">&nbsp&nbsp&nbsp备注:</label>
			</div>
			<div class="col-md-4">
				<input class="form-control " id="bz" name="bz" type="text"
					ng-model='station.bz' ng-disabled="isBz"/>
			</div>
		</div>
		

		
	    <div class="form-group  form-group-lg has-feedback">
			<div class="col-md-10 col-md-offset-2">
			    <button type="button" ng-click="createOne()" class="btn btn-info">&nbsp&nbsp&nbsp&nbsp&nbsp添&nbsp&nbsp&nbsp&nbsp加&nbsp&nbsp&nbsp&nbsp&nbsp</button>
                &nbsp<button type="button" ng-click="changeState()" class="btn btn-info">&nbsp&nbsp&nbsp&nbsp&nbsp<span ng-bind="modifyInfo1"></span>&nbsp&nbsp&nbsp&nbsp<span ng-bind="modifyInfo2"></span>&nbsp&nbsp&nbsp&nbsp&nbsp</button>
                &nbsp<button type="submit" ng-disabled="!((!isViewstate)&&myForm.$dirty&&myForm.$valid)" class="btn btn-primary">&nbsp&nbsp&nbsp&nbsp&nbsp保&nbsp&nbsp&nbsp&nbsp存&nbsp&nbsp&nbsp&nbsp&nbsp</button>
                &nbsp<button type="button" ng-click="deleteOne()" class="btn btn-info">&nbsp&nbsp&nbsp&nbsp&nbsp删&nbsp&nbsp&nbsp&nbsp除&nbsp&nbsp&nbsp&nbsp&nbsp</button>
                &nbsp<button type="button" ng-click="view()" class="btn btn-info">&nbsp&nbsp&nbsp&nbsp&nbsp<span ng-bind="viewInfo1"></span>&nbsp&nbsp&nbsp&nbsp<span ng-bind="viewInfo2"></span>&nbsp&nbsp&nbsp&nbsp&nbsp</button>
			</div>
		</div>
		
	</form>
			<div>
			 	<div ng-show="viewFlag" class="chart tab-pane" id="sales-chart" width="70em" >
		                    <div id="inquire2" align="center">
		                        <div class="table-responsive" align="center" >
		                        <table style="white-space: nowrap; text-align:center;" data-toggle="table"
		                                   class="table table-hover table-striped table-bordered table-condensed"
		                                   id="deviceTable" data-cache="false"
		                                   data-search="true"
		                                   data-select-item-name="toolbar1"
		                                   data-show-export="true"
		                                   data-click-to-select="true"
		                                   data-select-item-name="radioName"
		                                   data-url="GetAllIrrBRStadia.action"
		                                   data-pagination="true" data-page-size="20" data-page-list="[5,10,20,50,all]"
		                                   data-show-refresh="true"
		                                   data-toolbar="#toolbar">
		                                <thead>                            
		                                <tr>
		                                    <th style="white-space:nowrap;" data-field="stadiaName" data-sortable="true">测站名称</th>
		                                    <th style="white-space:nowrap;" data-field="stadiaType" data-formatter="stadiaTypeToName" data-sortable="true">测站类型</th>
		                                    <th style="white-space:nowrap;" data-field="locCode" data-formatter="locCodeToName" data-sortable="true">所处位置</th>
		                                    <th style="white-space:nowrap;" data-field="stbk" data-sortable="true">测站岸别</th>
		                                    <th style="white-space:nowrap;" data-field="flowDir" data-sortable="true">水流流向</th>
		                                    <th style="white-space:nowrap;" data-field="datTp" data-formatter="datTpToName" data-sortable="true">基面类型</th>
		                                    <th style="white-space:nowrap;" data-field="datElev"  data-formatter="datTpToName" data-sortable="true">基面高程 </th>
		                                    <th style="white-space:nowrap;" data-field="modBasVal" data-sortable="true">修正基值</th>
		                                    <th style="white-space:nowrap;" data-field="modPara" data-sortable="true">修正参数 </th>
		                                    <th style="white-space:nowrap;" data-field="estStYm" data-sortable="true">设站年月 </th>
		                                    <th style="white-space:nowrap;" data-field="runCond" data-formatter="statusToName" data-sortable="true">运行状况</th>
		                                    <th style="white-space:nowrap;" data-field="engManCd" data-sortable="true">管理单位 </th>
		                                    <th style="white-space:nowrap;" data-field="remark" data-sortable="true">备注</th>
		                                </tr>
		                                </thead>
		                                <tbody>
		                                 <tr ng-repeat="x for x in arraylist">
		                                 	<td>1</td>
		                                 	<td>2</td>
		                                 	<td>3</td>
		                                 	<td>4</td>
		                                 </tr>
		                                </tbody>
		                            </table>
		                        </div>
		                    </div>
				</div>
			</div>
			
</div>



  </body>
</html>
