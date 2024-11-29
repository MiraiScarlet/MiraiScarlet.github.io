var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

var adFlg = 'gg';
var divAuFlg = false;

var url = 'http://' + document.domain+location.pathname;
var ref = document.referrer;

divAu();

function divAu() {

	if (divAuFlg) { return; }
	divAuFlg=true;

	if (!checkDisplayAd()) { return; }

	writeGgAd();

}

function checkDisplayAd() {

	if (isFrameset()) { return false; }

	if (parent.frames.length != 0) {
		if(!checkFrame()) { return false; }
	}

	return true;

}

function isFrameset() {

	var numFr = 0;
	numFr = frames.length;
	numFr = numFr - document.getElementsByTagName("iframe").length;
	isFr = (numFr > 0) ? true : false;

	return isFr;

}

function checkFrame() {

	var x = 0;
	var y = 0;

	if (document.body) { x = document.body.clientWidth; }
	if (document.body) { y = document.body.clientHeight; }

	return (x > 400 && y > 300) ? true : false;

}

// gg

function writeGgAd() {

        document.write("<div id=y_gc_div_adcntr class=y_gcss_ovrtr_au><iframe src=\"https://bc-geocities.yahoo.co.jp/bc/gg?i=" + jps + "&u=" + encodeURIComponent(url) + "&ref=" + encodeURIComponent(ref) + "\" width=740 height=103 border=0 marginwidth=0 marginheight=0 hspace=0 vspace=0 frameborder=0 scrolling=no>no iframe</iframe></div>");
	document.getElementById('y_gc_div_adcntr').style.visibility = "visible";
	document.getElementById('y_gc_div_adcntr').style.position = "relative";
	document.getElementById('y_gc_div_adcntr').style.zIndex = 2147483647;

}


}
/*
     FILE ARCHIVED ON 02:40:51 Feb 26, 2019 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 16:37:51 Nov 29, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.63
  exclusion.robots: 0.026
  exclusion.robots.policy: 0.011
  esindex: 0.01
  cdx.remote: 11.137
  LoadShardBlock: 516.734 (6)
  PetaboxLoader3.datanode: 477.529 (8)
  PetaboxLoader3.resolve: 300.49 (3)
  load_resource: 432.915 (2)
*/