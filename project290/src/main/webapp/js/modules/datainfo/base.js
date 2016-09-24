var jq = jQuery.noConflict();
jq(function(){
	//动态调节弹出窗体的大小
	jq(window).resize(function(){
		var divObj;
		if(jq('.sys-dialog:visible').length > 0){
			var adjust = new IDialog();
			adjust.center(jq('.sys-dialog:visible'));
		}
		else return ;
	});	
})

/**
 * 功能描述：弹出窗口相关类
 * 参数：@param config
 * dClass color opacity zIndex closeFun width
 * ||弹出框相关 
 * divObj title(弹出框标题)
 * ||操作提示框相关：
 * tip(提示框的提示文字html) tipStyle(0:失败，1:成功，2:警告) timer(定时关闭时间（单位:秒）)
 * ||询问框相关
 * yes no cancel btNum(按钮数量：2——确定、取消按钮,3——是、否、取消三个按钮)
 * 创建人：高明
 * 创建时间：2013-8-19
 */
function IDialog(config){
		this.dialogClass = "sys-dialog";
		this.tipDialogClass = "tip-dialog";
		this.tipWidth = 400;
		this.dialogTimer;
		this.config = config;
}
/**
 * 弹出窗口相关方法
 */
IDialog.prototype = {
	/**
	 * 弹出窗口
	 */
	openDialog : function(){
		if(!this.config.divObj === "Object"){
			return false;
		}else{
			this._creatCover(this.config);
			this._openDivDialog(this.config.divObj);
		}
	},
	/**
	 * 成功/失败/警告 提示
	 */
	tipInfo : function(){
		var iconClass = "";
		switch(this.config.tipStyle){
		case 1:iconClass="success";break;
		case 0:iconClass="failed";break;
		case 2:iconClass="warning";break;
		default:break;
		}
		if(this.config.closeFun && typeof(this.config.closeFun) === "function"){
			var closeFun = this.config.closeFun;
		}
		var tipDClass = this.tipDialogClass;
		var tipDialog = jq("<div/>").addClass(tipDClass+" "+this.config.dClass)
		.append(this._creatTipAround(iconClass))
		.append(jq("<p/>").addClass('tip-close clearfix'));
		//定时消失的设置
		if(this.config.timer){
			var time = this.config.timer;
			//倒计时config.timer秒关闭
			var dialog_timer = this.dialogTimer;
			var closeNode = tipDialog.find(".tip-close").attr('close-timer',time);
			dialog_timer = window.setInterval(function(){
				//config.timer秒后自动关闭窗口
				var leftTime = closeNode.attr('close-timer')-1;
				closeNode.attr('close-timer',leftTime);
				if(leftTime <= 0){
					window.clearInterval(dialog_timer);
					//如有回调函数，执行函数
					if(closeFun){
						closeFun(tipDialog);	
					}else{
						closeDialog(tipDialog);
					}
				}
			}, 1000);
		}else{
			var sure = jq("<a/>").addClass("bt smallBlueBt").append("<span>确定</span>");
			sure.click(function(){
				if(closeFun){
					closeFun(jq(this).parents("."+tipDClass));
				}else{
					closeDialog(jq(this).parents("."+tipDClass));
				}
			});
			tipDialog.find(".tip-close").append(sure);
		}
		this.config.divObj = tipDialog;
		this.openDialog();
	},
	/**
	 * 加载中提示框
	 */
	loadding : function(){
		var tipDialog = jq("<div/>").addClass(this.tipDialogClass+" loadding-dialog "+this.config.dClass)
		.append(jq("<img/>").attr("src","../../images/loading.gif").addClass("loadding-img"))
		.append(jq("<p/>").addClass('loadding-tip').text(this.config.tip));
		this.config.divObj = tipDialog;
		this.openDialog();
	},
	/**
	 * 询问弹出框（确定、取消；是、否、取消）
	 */
	confirm : function(){
		var tipDClass = this.tipDialogClass;
		var tipDialog = jq("<div/>").addClass(tipDClass+" "+this.config.dClass)
		.append(this._creatTipAround("question"))
		.append(jq("<p/>").addClass('tip-close clearfix'));
		var config = this.config;
		var yes = jq("<a/>").addClass("bt smallBlueBt yes").append("<span>确定</span>").click(function(){
			config.yes(jq(this).parents("."+tipDClass));
		});
		var cancel = jq("<a/>").addClass("bt smallBlueBt").append("<span>取消</span>").click(function(){
			if(config.cancel){
				config.cancel(jq(this).parents("."+tipDClass));
			}else{
				closeDialog(jq(this).parents("."+tipDClass));
			}
		});
		tipDialog.find(".tip-close").append(yes).append(cancel);
		if(config.btNum == 3){
			tipDialog.find(".yes span").text("是");
			var no = jq("<a/>").addClass("bt smallBlueBt").append("<span>否</span>").click(function(){
				if(config.no){
					config.no(jq(this).parents("."+tipDClass));
				}else{
					closeDialog(jq(this).parents("."+tipDClass));
				}
			});
			tipDialog.find(".yes").after(no);
		}
		this.config.divObj = tipDialog;
		this.openDialog();
	},
	/**
	 * 说明：创建弹出的遮盖层
	 * @param {color为遮盖层的颜色， opacity为IE中的滤镜参数， zIndex为遮盖层的z-index属性 }
	 * @author:高明
	 * @date: 2013-08-19
	 */
	_creatCover : function(config){
		var colorStyle = config.color?config.color:"#000";
		var opacityStyleIE = config.opacity?config.opacity:30;
		var zIndex = config.zIndex?config.zIndex:getMaxZIndex();
		var coverDiv = jq("<div/>").addClass("dialog-overlay").css({
			'position':'fixed',
			'background':colorStyle,
			'left':'0px',
			'top':'0px',
			'width': "100%",
			'height' :"100%",
			'z-index':zIndex
		});
		jq('body').append(coverDiv); // 将遮盖层加入到html页面当中去
		var userAgent = window.navigator.userAgent.toLowerCase(); //判断是否为IE10
        /*
        * */

		//jq.browser.msie10 = jq.browser.msie && /msie 10\.0/i.test(userAgent);
        jq.isIE= /msie/.test(userAgent);
        jq.isIE10=jq.isIE && window.navigator.appVersion.match(/10./i)=='10.';
     
        // 根据不同的浏览器类型设置滤镜
		if(getOs() == "MSIE"&&!jq.isIE10){//IE10时要将滤镜设为0.3
			coverDiv.css("filter","Alpha(Opacity = " + opacityStyleIE + ")");
		}else{
			var opacityStyle = opacityStyleIE / 100; // 将IE的滤镜参数变换为非IE方式
			coverDiv.css("opacity",opacityStyle);
		}
		return coverDiv;
	},
	/**
	 * 弹出的提示框（成功/失败/警告/询问）公共部分(提示图标)
	 */
	_creatTipAround : function(tipStyle){
		var tipContent = jq("<div/>").addClass(this.tipDialogClass+"-content clearfix f14");
		tipContent.append(jq("<span>").addClass("home-icon "+tipStyle))
			.append(jq("<span/>").addClass(this.tipDialogClass+'-text').html(this.config.tip));
		return tipContent;
	},
	/**
	 * 弹出某个div且居中
	 */
	_openDivDialog : function(divObj){
		if(divObj.parent().hasClass(this.dialogClass)){
			var dialogDiv = divObj.parent();
//			if(dialogDiv.css("display") == 'block'){
			if(jq(dialogDiv).is(":visible")){
				return;
			}
			dialogDiv.find(".titleBar-text").text(this.config.title);
			if(this.config.closeFun && typeof(this.config.closeFun) === "function"){
				var closeFun = this.config.closeFun;
				dialogDiv.find(".titleBar-close span").unbind("click").click(function(){
					closeFun();
				})
			}
		}else{
			if(divObj.hasClass(this.tipDialogClass)){
				dialogDiv = divObj;
				dialogDiv.addClass(this.dialogClass);
			}else{
				if(this.config.closeFun && typeof(this.config.closeFun) === "function"){
					var closeFun = this.config.closeFun;
				}
			var title = jq("<a/>").addClass("titleBar-text fl").text(this.config.title);
			var closeSpan = jq("<a/>").addClass("titleBar-close fr")
				.append(jq("<span/>")/*.addClass("home-icon")*/.text("×"))
				.click(function(){
					if(closeFun){
						closeFun();
					}else{
						closeDialog(divObj);
					}
				});
			var dialogDiv = jq("<div/>").addClass(this.dialogClass+" "+this.config.dClass)
				.append(jq("<div/>").addClass("dialog-titleBar").append(title).append(closeSpan))
				.append(divObj.addClass('dialog-content').show());
			}
			dialogDiv.appendTo(jq("body"));
		}
		if( !this.config.zIndex ){
			var zIndex = getMaxZIndex();
		}
		var divWidth = this.config.width;
		//禁用滚动条
		/*jq('body').css({
			 "overflow":"hidden"
		});
		if(getOs() == "MSIE"){
			jq('html').css('overflow','visible');
		}*/
		dialogDiv.css({
			"display":"block",
			"z-index":zIndex+1,
			"width":divWidth
		});
		if(dialogDiv.parents(".long-dialog-container").length > 0){
			dialogDiv.parents(".long-dialog-container").show().css({
				"z-index":zIndex+2
			});
		}
		this.center(dialogDiv);		
	},
	/**
	 * 将弹出框居中
	 */
	center : function(divObj){
		if(divObj){
			var bodySize = getBodySize();
			var divLeft = (bodySize[0] - divObj.width()) / 2 + bodySize[3];
			if(divObj.height() >= bodySize[1]){
				divTop = bodySize[2];
				if(divObj.parent(".long-dialog-container").length <= 0){
					jq("<div/>").addClass("long-dialog-container").
					css("z-index",getMaxZIndex()).append(divObj).appendTo(jq("body"));
				}
				divObj.parent(".long-dialog-container").css("top",'0px');
			}
			else divTop = (bodySize[1] - divObj.height()) / 2 + bodySize[2];
			divObj.addClass("cur-frame");
			divObj.css({
				left: divLeft + "px",
				//top: divTop + "px"
				top: "220px"
			});
		}
		else return;
	}
}

/**
 * 功能：获取当前页面最大z-index值
 * @return 当前页面当中z-index中的最大值
 * 创建人：高明
 * 创建时间：2013-08-19
 */
function getMaxZIndex(){
	var maxZ = Math.max.apply(null,jq.map(jq('body > *:visible,.sys-dialog,.long-dialog-container'), function(e,n){
//		if(jq(e).css('position')=='absolute')
		return parseInt(jq(e).css('z-index'))||1 ;
		})
	);
	return maxZ;
}

/**
 * 获取页面的高度和宽度等数据
 */
function getBodySize(){
	var bodySize = [];
	bodySize[0] = jq(window).width(); // 当前浏览器的宽度
	bodySize[1] = jq(window).height(); // 当前浏览器的高度
	bodySize[2] = jq(window).scrollTop(); // 距离页面滚动顶端的高度
	bodySize[3] = jq(window).scrollLeft(); // 距离页面滚动到左边的宽度
	return bodySize;
}
/**
 * 关闭弹出框
 */
function closeDialog(dialog,coverDiv){
	if(dialog.hasClass("tip-dialog")){
		dialog.remove();
	}
	else{
		dialog.parent(".sys-dialog").hide();
		dialog.parents(".long-dialog-container").hide();
	}
	if(coverDiv){
		coverDiv.remove();
	}
	else{
		jq(".dialog-overlay:last").remove();
	}
	//还原滚动条
	if(jq(".dialog-overlay").length <= 0 ){
		jq("body").css("overflow",'auto');
		if(getOs() == "MSIE"){
			jq('html').css('overflow','visible');
			if(jq.browser.version == 7.0){
				jq('html').css('overflow','auto');
			}
		}
	}
}

/* 功能：此函数用于判断浏览器的类型，并返回浏览器的名称 */
function getOs(){//判断浏览器类型
   if(navigator.userAgent.indexOf("MSIE")>0) {
        return "MSIE";
   }
   if(isFirefox=navigator.userAgent.indexOf("Firefox")>0){
        return "Firefox";
   }
   if(navigator.userAgent.indexOf("Chrome")>0){
       return "Chrome";
   }
   if(isSafari=navigator.userAgent.indexOf("Safari")>0) {
        return "Safari";
   } 
   if(isCamino=navigator.userAgent.indexOf("Camino")>0){
        return "Camino";
   }
   if(isMozilla=navigator.userAgent.indexOf("Gecko/")>0){
        return "Gecko";
   }
   if(isMozilla=navigator.userAgent.indexOf("Opera/")>0){
       return "Opera";
   }
}

var ui = {};
/**
 * 弹出操作框
 * 参数：config ——1表示必填
 * divObj(1) 弹出的对象，title(1) 标题，closeFun 点击关闭按钮的事件，dClass 弹出窗口的class,width 弹出窗口的宽度
 */
ui.openDialog = function(config){
	var dialog = new IDialog(config);
	dialog.openDialog();
}
/**
 * 功能描述：成功提示框
 * 参数：@param tip(1) 提示文字
 * 参数：@param close 关闭时调用的方法
 * 创建人：高明
 * 创建时间：2013-8-20
 */
ui.success = function(tip,close){
	var config = {
			tip:tip,
			tipStyle:1,
			closeFun:close,
			timer:1
	}
	ui._info(config);
}
/**
 * 功能描述：失败提示框
 * 参数：@param tip(1) 提示文字
 * 参数：@param close 关闭时调用的方法
 * 创建人：高明
 * 创建时间：2013-8-20
 */
ui.failed = function(tip,close){
	var config = {
			tip:tip,
			tipStyle:0,
			closeFun:close
	}
	ui._info(config);
}
/**
 * 功能描述：警告提示框
 * 参数：@param tip(1) 提示文字
 * 参数：@param close 关闭时调用的方法
 * 创建人：高明
 * 创建时间：2013-8-20
 */
ui.warning = function(tip,close){
	var config = {
			tip:tip,
			tipStyle:2,
			closeFun:close,
			timer:2
	}
	ui._info(config);
}
/**
 * 功能描述：询问弹出框
 * 参数：@param config 
 * tip btNum(操作按钮数量，默认为2) yes no cancel
 * 创建人：高明
 * 创建时间：2013-8-20
 */
ui.confirm = function(config){
	var dialog = new IDialog(config);
	dialog.confirm();
}
//ui提示的内部调用方法
ui._info = function(config){
	var dialog = new IDialog(config);
	dialog.tipInfo();
}

/**
 * 功能：tab切换公共函数
 * @param config:json格式数据 
 * 		tab:jq(".menuPanel-first li"),
 * 		curTab:"cur",//标志当前tab项的class panel:jq(".menuPanel-second ul"),
 * 		curPanel:"secondMenu-cur",//标志当前显示内容项的class 
 * 		panel:jq('.container-content')//显示内容的jquery对象，所有要切换的面板对象
 * 
 * eg:	ui.tabChange({
			tab:jq(".tab-container-ul li a"),
			curTab:"tab-cur",//标志当前tab项的class 
			curPanel:"cur-list",//标志当前显示内容项的class 
			panel:jq('.list-item')//显示内容的jquery对象，所有要切换的面板对象
		});
 *  创建时间：2013-01-25
 */
ui.tabChange = function(config) {
	config.tab.click(function() {
		jq("." + config.curTab).removeClass(config.curTab);
		jq(this).addClass(config.curTab);
		jq("." + config.curPanel).removeClass(config.curPanel).hide();
		var index = config.tab.index(jq(this));
		config.panel.eq(config.tab.index(jq(this))).addClass(config.curPanel).show();
		//处理分页问题
		initPagination(1);
		if(config.click){
			config.click(config.panel.eq(index),index);
		}
	})
};



/**
 * 功能描述：加载中的提示
 * 参数：@param tip
 * 关闭方法：closeDialog(jq(".loadding-dialog"))
 * 创建人：高明
 * 创建时间：2013-9-11
 */
ui.loadding = function(tip){
	var config = {
			tip:tip
	}
	var dialog = new IDialog(config);
	dialog.loadding();
}

/**
 * 函数名称：ui.setCover
 * 函数描述：打开遮盖层  
 * 创建人：熊小庆  
 * 创建时间：2014-5-13 下午3:42:11  
 * 创建备注：  
 * @version 1.0.0
 *
 */
ui.creatCover = function(){
	var dialog = new IDialog();
	dialog._creatCover({zIndex:101,color:'#fff'});
}

/**
 * 函数名称：ui.closeCover
 * 函数描述： 关闭遮盖层 
 * 创建人：熊小庆  
 * 创建时间：2014-5-13 下午3:47:17  
 * 创建备注：  
 * @version 1.0.0
 *
 */
ui.closeCover = function(coverDiv){
	if(coverDiv){
		coverDiv.remove();
	}
	else{
		jq(".dialog-overlay:last").remove();
	}
}

/**
 * 功能：弹出新页面的公共方法 
 * @param config:json格式数据 
 * 		url:新页面的url,
 * 		width：弹出页面默认宽度,
 * 		height：弹出页面默认高度,
 * 		params：弹出窗体的相关参数（json数据）
 * 		target：新窗体的打开位置（默认为打开一个新窗口）
 * 创建人：高明 
 * 创建时间：2013-08-20
 */
function openWindow(config){
	var windowParam = "toolbar=" + "no," + "location=" + "no," + "status=" + "no,"
	+ "directories=" + "no," + "menubar=" + "no," + "scrollbars="
	+ "yes," + "resizable=" + "yes";
	var url = config.url, 
		width = config.width?config.width:window.screen.width*0.70, 
		height = config.height?config.height:window.screen.height*0.65, 
		//默认宽高为当前用户屏幕分辨率的70%和50%
		params = config.params, 
		target = config.target;
	var left = (screen.availWidth - width) / 2;
	var top = (screen.availHeight - height) / 2;
	if(config.left){//如果传了left值，则在居中的基础上稍加偏移，偏移量为传时的left值
		left = left + config.left;
		top = top + config.top;
	} 

	var paramStr = "";
	if (typeof params == "undefined" || params == null) {
		paramStr = windowParam + ",left=" + left + ", " + "top="
		+ top + ", " + "width=" + width + ", " + "height=" + height;
	} else {
		var toolbar = (typeof params['toolbar'] == "undefined" || params['toolbar'] == "") ? "no"
				: params['toolbar'];
		var locationX = (typeof params['location'] == "undefined" || params['location'] == "") ? "no"
				: params['location'];
		var status = (typeof params['status'] == "undefined" || params['status'] == "") ? "no"
				: params['status'];
		var directories = (typeof params['directories'] == "undefined" || params['directories'] == "") ? "no"
				: params['directories'];
		var menubar = (typeof params['menubar'] == "undefined" || params['menubar'] == "") ? "no"
				: params['menubar'];
		var scrollbars = (typeof params['scrollbars'] == "undefined" || params['scrollbars'] == "") ? "yes"
				: params['scrollbars'];
		var resizable = (typeof params['resizable'] == "undefined" || params['resizable'] == "") ? "yes"
				: params['resizable'];
		paramStr = "toolbar=" + toolbar + "," + "location=" + locationX + ","
				+ "status=" + status + "," + "directories=" + directories + ","
				+ "menubar=" + menubar + "," + "scrollbars=" + scrollbars + ","
				+ "resizable=" + resizable + "," + "left=" + left + ", "
				+ "top=" + top + ", " + "width=" + width + ", " + "height="
				+ height;
	}
	if (typeof target != 'undefined') {
		target = target.replace(new RegExp("[^0-9a-zA-Z\u4e00-\u9fa5]", "gm"),'')
		winObj = window.open(url, target, paramStr);
	} else {
		winObj = window.open(url, "newopen", paramStr);
	}
	winObj.focus();
	return winObj;
}
