<%@ page contentType="text/html; charset=UTF-8"%>
<%@ include file="/commons/include/taglibs.jsp"%>
<style type="text/css">
#left_wrapper.left-menu
{
    background: url(${ctx}/images/modules/index/main_left.jpg); 
   /* background-color:transparent; */
   background-size:100% 100%; 
}
#left_wrapper ul li 
{
   line-height:40px;
}

#left_wrapper ul li a
{
   color:#000;
   font-size:18px;
   padding-left:48px;
}
#sys-content
{
	/*Firefox*/
	width:-moz-calc(100%-162px);
	/*chrome safari*/
	width:-webkit-calc(100%-162px);
	/*Standard */
	width:calc(100%-162px);
}
</style>
<div ng-controller="sysTreeController" id="sys-content" style="height:100%; background:url(${ctx}/images/modules/index/main_content2.jpg);">
	<div id="left_wrapper" class="left-menu" style="width:250px;height:100%;position:absolute;{{height}}">
	  <abn-tree tree-data="my_sys_data"  on-select="my_tree_hander(branch)" icon-leaf ='icon-user  glyphicon glyphicon-user  fa fa-user'></abn-tree>
	</div>
	<div id="right_wrapper" style="padding-left:250px; background-color:transparent;">
	  <div ui-view></div>
	</div>
</div>

