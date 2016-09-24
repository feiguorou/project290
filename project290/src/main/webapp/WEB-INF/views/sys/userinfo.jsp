<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/commons/include/taglibs.jsp"%>
<style type="text/css">
#userinfoWrapper {
   padding-top:80px;
    width:40em;
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
<div id="userinfoWrapper" ng-controller="userinfoController">
	<form role="form" name="myForm" ng-submit="submitForm(myForm.$valid)" class="form-horizontal" novalidate>
        <h1 class="text-center" style="color:#000;font-weight:bold;">用户基本信息</h1>
        <h3 class="text-center" style="margin-bottom:1.5em;color:#a22;"><span ng-bind="stateInfo"></span></h3>
		<div class="form-group  form-group-lg has-feedback">
			<div class="col-md-3">
				<label for="username" class="control-label">用户名<em class="text-warning">(*)</em>:</label>
			</div>
			<div class="col-md-7">
				<input class="form-control " id="username" name="username" type="text"
					ng-model='user.username' ng-disabled="isUsername"/>
			</div>
		</div>
		<div class="form-group  form-group-lg has-feedback">
			<div class="col-md-3">
				<label for="name" class="control-label">用户密码<em class="text-warning">(*)</em>:</label>
			</div>
			<div class="col-md-7">
				<input class="form-control " id="password" name="password" type="password"
					required  ng-minLength="3" ng-model='user.password' ng-disabled="isPassword" /> <span
					class="glyphicon glyphicon-ok form-control-feedback success-info"
					ng-show="myForm.password.$dirty && myForm.password.$valid"></span>
			</div>
		     <div class="help-block" class="col-md-2" ng-messages="myForm.password.$error">
				<p ng-message="required" class="my-alert-info">密码不能为空</p>
				<p ng-message="minlength" class="my-alert-info">密码最少为三位</p>
            </div>
		</div>
		<div class="form-group  form-group-lg has-feedback">
			<div class="col-md-3">
				<label for="name" class="control-label">确认密码<em class="text-warning">(*)</em>:</label>
			</div>
			<div class="col-md-7">
				<input class="form-control " id="repassword" name="repassword" type="password"
					pw-check='password' ng-model='user.repassword' ng-disabled="isRepassword" /> <span
					class="glyphicon glyphicon-ok form-control-feedback success-info"
					ng-show="myForm.repassword.$dirty && myForm.repassword.$valid"></span>
			</div>
			<div class="help-block" class="col-md-2" ng-messages="myForm.repassword.$error">
				<p ng-message="pwError" class="my-alert-info">两次输入密码必须一致</p>
            </div>
		</div>
	   <div class="form-group  form-group-lg has-feedback">
			<div class="col-md-3">
				<label for="name" class="control-label">真实姓名:</label>
			</div>
			<div class="col-md-7">
				<input class="form-control" id="realname" name="realname" type="text"
					required ng-model='user.realname' ng-disabled="isRealname" />
					<span
					class="glyphicon glyphicon-ok form-control-feedback success-info"
					ng-show="myForm.realname.$dirty && myForm.realname.$valid"></span>
			</div>
		    <div class="help-block" class="col-md-2" ng-messages="myForm.realname.$error">
				<p ng-message="required" class="my-alert-info">真实姓名不要为空</p>
            </div>
		</div>
	    <div class="form-group form-group-lg has-feedback">
			<div class="col-md-3">
				<label for="role"  class="control-label">用户权限:</label>
			</div>
			<div class="col-md-7">
                   <select class="form-control" name="role" id="role" ng-model="user.role" class="form-control " ng-options="role.id as role.name for role in roles" ng-disabled="isRole">
				   </select>
			</div>
		</div>
	    <div class="form-group  form-group-lg has-feedback">
			<div class="col-md-3">
				<label for="name" class="control-label">性别:</label>
			</div>
			<div class="col-md-7">
				<label class="radio-inline control-label">
				  <input type="radio" class="" name="sex"  value="0" ng-model="user.sex" ng-disabled="isMan"> 男
				</label>
				<label class="radio-inline control-label">
				  <input type="radio" class="" name="sex" value="1" ng-model="user.sex" ng-disabled="isWoman"> 女
				</label>
			</div>
		</div>
	    <div class="form-group  has-feedback">
			<div class="col-md-7 col-md-offset-3">
                <p><span ng-bind="formInfo" class="my-alert-info"></span></p>
			</div>
		</div>
	    <div class="form-group  form-group-lg has-feedback">
			<div class="col-md-7 col-md-offset-3">
                <button type="button" ng-click="changeState()" class="btn btn-info">&nbsp&nbsp&nbsp&nbsp&nbsp<span ng-bind="modifyInfo1"></span>&nbsp&nbsp&nbsp&nbsp<span ng-bind="modifyInfo2"></span>&nbsp&nbsp&nbsp&nbsp&nbsp</button>
                <button type="submit" ng-disabled="!((!isViewstate)&&myForm.$dirty&&myForm.$valid)" class="btn btn-primary">&nbsp&nbsp&nbsp&nbsp&nbsp保&nbsp&nbsp&nbsp&nbsp存&nbsp&nbsp&nbsp&nbsp&nbsp</button>
			</div>
		</div>
	</form>
</div>

