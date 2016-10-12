<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/commons/include/taglibs.jsp"%>
<%@ include file="/commons/include/sysmanuser.jsp"%>
<style type="text/css">
#userinfoWrapper{
   padding-top:100px;
   width:850px;
   margin: 0px auto;
}
div.fixed-table-body{
   height:auto;
}
</style>
<div id="userinfoWrapper" ng-controller="manuserController">

	<h1 align='center' style="margin:-20px 0px -20px 0px;color:#000;font-weight:bold">
		<font>用户管理表</font>
	</h1>
	<div class="table-responsive">
		<!-- data-show-toggle="true" data-show-columns="true" -->   
		<div id="toolbar">
            <button id="button" class="btn btn-default btn-info" ng-click="removeItem()" style="float:left; margin: 10px 0px" >删除</button>
        </div>         
		<table
		 	style="white-space: nowrap; text-align:center"
			data-toggle="table"
			class="table table-hover table-striped table-bordered table-condensed"
			id="manuserTable" 
			data-cache="false" 
			data-search="true"
			data-select-item-name="toolbar1" 
			data-pagination="true"
			data-page-list="[5,10,20,50]" 
			data-show-export="true">

			<thead>
				<tr>
				    <th data-field="state" data-checkbox="true"></th>
					<th data-field="username" data-sortable="true" data-align="center">用户名</th>
					<th data-field="realname" data-sortable="true" data-align="center">真实姓名</th>
					<!-- <th data-field="password" data-sortable="true" data-align="center">密码</th>  -->
					<th data-field="roletext" data-sortable="true" data-align="center">权限</th>
					<th data-field="sextext" data-sortable="true" data-align="center">性别</th>
				</tr>
			</thead>
		</table>
     </div>
 </div>

