var x, y;
var str = '';
var num = 1;


/* sBox Object
 * Display information box on image
 * <Author> Ng1091 <me@ng1091.com>
 * <Date>	2016-04-11
 *
 *
 * Example:
 * <script>
 *     sBox.dataPoints = 'jbPoints';
 *     sBox.dataName = '江滨总干渠';
 *     sBox.Url = '/url/to/data';
 * </script>
 *
 */
var sBox = {
	display : true,		// Whether showing the sbox
	scale:	false,		// Whether scaling the map to screen size
	debug : false,		// Debug Mode

	img : '#map',		// Default ID of sBox Image
	$img : null,
	mapWidth : 1024,
	mapHeight: 768,
	dataPoints : '',
	dataName:	'',

	interval : 60, 		// Refresh Time
	Url		: '/sBox/data.txt',



	// run : function () {
	// 	this.$img = $(this.img);
	// 	this.$img.attr('onload','sBox.init()');
	// 	console.log(this.$img);
	// },

	init : function() {
		this.$img = $(this.img);
		if(this.scale) this.$img.width($(window).width());
		this.mapWidth = this.$img.width();
		this.mapHeight = this.$img.height();
		
		

		if(!this.dataPoints) {
			alert("dataPoints is empty!");
			return;
		}

		alert("dataPoints : " + this.dataPoints);
		
		this.dataPoints = window[this.dataPoints];
		
		alert("dataPoints : " + this.dataPoints);

		if(this.debug) this.__debug();
		//this.__debug();
		if(this.display) this.show();

		this.dataFunc();
		setInterval('sBox.dataFunc()', this.interval * 1000);
	},


	dataFunc : function () {
		$.get(sBox.Url,
			{},
			function (data, status) {
				if (status == 'success') {
					var obj = data;
					//if((typeof data) == "string") obj = jQuery.parseJSON(data);
					obj = obj[sBox.dataName];
					
					console.log("obj : " + obj);
					for(var id in obj) {
						//console.log(obj[id]);
						sBox.refresh(obj[id]);
					}
				}
			});
	},

	__debug : function() {
		var $btn1 = $('<button onclick="$(\'#pos\').html(str);">Show</button>');
		var $btn2 = $("<button onclick=\"str=''; num=1; $('#pos').html('');\">Clear</button>");
		var $div = $('<div id="pos"></div>');
		$('body').prepend($div, $btn1, $btn2);

		for(var id in this.dataPoints) {
			//alert(jbPoints[id][0] * mapWidth);

			var div = $("<div></div>");
			div.attr('id', id);
			div.addClass('sBox');
			div.css("left", this.dataPoints[id].loc[0] * this.mapWidth);
			div.css("top", this.dataPoints[id].loc[1] * this.mapHeight);
			//div.attr('style', "left:500px; top:600px;");
			// div.html(id + "<br/>" + jbPoints[id].name + "<br/>上水位:22cm<br/>下水位:12cm<br/>流量:5m^3/s ");
			div.html(id + "<br/>上水位:22cm<br/>下水位:12cm<br/>流量:5m³/s ");
			div.prependTo('#sBoxContainer');
		}
	},
	
	show : function() {
		for(var id in this.dataPoints) {
			var div = $("<div></div>");
			div.attr('id', id);
			div.addClass('sBox');
			div.css("left", this.dataPoints[id].loc[0] * this.mapWidth);
			div.css("top", this.dataPoints[id].loc[1] * this.mapHeight);
			div.hide();
			div.prependTo('#sBoxContainer');
		}
	},

	refresh : function (data) {
		console.log("id : " + data.stadiaCode);
		var id = data.stadiaCode;
		var name = data.stadiaName ;
		var flux = data.fluxGate == null ? '无' :  data.fluxGate + 'm³/s';
		var up = data.heightUp == null ? '无' :  data.heightUp + 'm';
		var down = data.heightDown == null ? '无' :  data.heightDown + 'm';
		$('#' + id).html(name + "<br/>闸前水位:" + up + "<br/>闸后水位:" + down + "<br/>流量:" + flux + "<br/>").show();
	}
 
};


function get_location(e) {
	var pointX = e.pageX; 	// 得到鼠标X坐标
	var pointY = e.pageY;   // 得到鼠标Y坐标
	var heartX = $('#map').offset().left; 
	var heartY = $('#map').offset().top;
	x = pointX - heartX;
	y = pointY - heartY; 
}

function mouse_moving(e){
	//get_location(e);
	//$("#pos").html('' + X + ' ' + Y + '</br>' + pointX + ' ' + pointY + '</br>' +  heartX + ' ' + heartY);
	//$("#pos").html('' + x / $('#map').width() + ' ' + y / $('#map').height());
}

function mouse_click(e){
	get_location(e);
	str += 'n' + num + ': {<br/>loc: [' + x / sBox.mapWidth + ',' +  y / sBox.mapHeight + '],<br/>},<br/>';
	$("#pos").html(num);
	num++;
}

$(function() {

});


		
		
		