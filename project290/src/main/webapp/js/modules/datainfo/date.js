var jq=jQuery.noConflict();
jq('.form_datetime').datetimepicker({
    language:  'zh-CN',
    weekStart: 0,
    todayBtn:  1,
	autoclose: 1,
	todayHighlight: 1,
	startView: 2,
	forceParse: 0,
    showMeridian: 1,
    format:'yyyy-mm-dd '
});
jq('.form_date').datetimepicker({
    language:  'zh-CN',
    weekStart: 0,
     todayBtn:  1,
	autoclose: 1,
	todayHighlight: 1,
	startView: 2,
	minView: 2,
	forceParse: 0,
	format:'yyyy-mm-dd'
});