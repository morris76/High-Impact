/****************** Query hashchange ***************/
/*
 * jQuery hashchange event, v1.4, 2013-11-29
 * https://github.com/georgekosmidis/jquery-hashchange
 */
(function(e,t,n){"$:nomunge";function f(e){e=e||location.href;return"#"+e.replace(/^[^#]*#?(.*)$/,"$1")}var r="hashchange",i=document,s,o=e.event.special,u=i.documentMode,a="on"+r in t&&(u===n||u>7);e.fn[r]=function(e){return e?this.bind(r,e):this.trigger(r)};e.fn[r].delay=50;o[r]=e.extend(o[r],{setup:function(){if(a){return false}e(s.start)},teardown:function(){if(a){return false}e(s.stop)}});s=function(){function p(){var n=f(),i=h(u);if(n!==u){c(u=n,i);e(t).trigger(r)}else if(i!==u){location.href=location.href.replace(/#.*/,"")+i}o=setTimeout(p,e.fn[r].delay)}var s={},o,u=f(),l=function(e){return e},c=l,h=l;s.start=function(){o||p()};s.stop=function(){o&&clearTimeout(o);o=n};var d=function(){var e,t=3,n=document.createElement("div"),r=n.getElementsByTagName("i");while(n.innerHTML="<!--[if gt IE "+ ++t+"]><i></i><![endif]-->",r[0]);return t>4?t:e}();d&&!a&&function(){var t,n;s.start=function(){if(!t){n=e.fn[r].src;n=n&&n+f();t=e('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){n||c(f());p()}).attr("src",n||"javascript:0").insertAfter("body")[0].contentWindow;i.onpropertychange=function(){try{if(event.propertyName==="title"){t.document.title=i.title}}catch(e){}}}};s.stop=l;h=function(){return f(t.location.href)};c=function(n,s){var o=t.document,u=e.fn[r].domain;if(n!==s){o.title=i.title;o.open();u&&o.write('<script>document.domain="'+u+'"</script>');o.close();t.location.hash=n}}}();return s}()})(jQuery,this)




/****************** Scroll Depth ***************/
/*!
 * @preserve
 * jquery.scrolldepth.js | v0.4.1
 * Copyright (c) 2014 Rob Flaherty (@robflaherty)
 * Licensed under the MIT and GPL licenses.
 */
!function(a,b,c){"use strict";var e={elements:[],minHeight:0,percentage:!0,testing:!1},f=a(b),g=[];a.scrollDepth=function(d){function i(b,c,e){d.testing?a("#console").html(b+": "+c):"undefined"!=typeof dataLayer&&"function"==typeof dataLayer.push?(dataLayer.push({event:"ScrollDistance",eventCategory:"Scroll Depth",eventAction:b,eventLabel:c,eventValue:1,eventNonInteraction:!0}),arguments.length>2&&dataLayer.push({event:"ScrollTiming",eventCategory:"Scroll Depth",eventAction:b,eventLabel:c,eventTiming:e})):("function"==typeof ga&&(ga("send","event","Scroll Depth",b,c,1,{nonInteraction:1}),arguments.length>2&&ga("send","timing","Scroll Depth",b,e,c)),"undefined"!=typeof _gaq&&"function"==typeof _gaq.push&&(_gaq.push(["_trackEvent","Scroll Depth",b,c,1,!0]),arguments.length>2&&_gaq.push(["_trackTiming","Scroll Depth",b,e,c,100])))}function j(a){return{"25%":parseInt(.25*a,10),"50%":parseInt(.5*a,10),"75%":parseInt(.75*a,10),"100%":a-1}}function k(b,c,d){a.each(b,function(b,e){-1===a.inArray(b,g)&&c>=e&&(i("Percentage",b,d),g.push(b))})}function l(b,c,d){a.each(b,function(b,e){-1===a.inArray(e,g)&&a(e).length&&c>=a(e).offset().top&&(i("Elements",e,d),g.push(e))})}function m(a,b){var c,d,e,f=null,g=0,h=function(){g=new Date,f=null,e=a.apply(c,d)};return function(){var i=new Date;g||(g=i);var j=b-(i-g);return c=this,d=arguments,0>=j?(clearTimeout(f),f=null,g=i,e=a.apply(c,d)):f||(f=setTimeout(h,j)),e}}var h=+new Date;d=a.extend({},e,d),a(c).height()<d.minHeight||(i("Percentage","Baseline"),f.on("scroll.scrollDepth",m(function(){var e=a(c).height(),i=b.innerHeight?b.innerHeight:f.height(),m=f.scrollTop()+i,n=j(e),o=+new Date-h;return g.length>=4+d.elements.length?(f.off("scroll.scrollDepth"),void 0):(d.elements&&l(d.elements,m,o),d.percentage&&k(n,m,o),void 0)},500)))}}(jQuery,window,document);




jQuery(document).ready(function($){


    if (typeof _gaq === 'object') {
      
      // listen to clicks
      $('a[href]').click(function(){
        if (this.href.indexOf('mailto:') === 0) {
//_gaq.push(['_trackPageview', '/mailtos/' + $(this).attr("href")]);
_gaq.push(['_trackEvent', 'mailto', 'click', $(this).attr('href')]);
        }
        else if (this.href.match(/\.(pdf|doc|zip|ppt|jpg|gif|exe|xls|docx)$/)) {
//_gaq.push(['_trackPageview', '/downloads/' + $(this).attr("href")]);
_gaq.push(['_trackEvent', 'downloads', 'click', $(this).attr('href')]);
        }
        else if (this.href.match(/\.(pdf)/)) {
//_gaq.push(['_trackPageview', '/downloads/' + $(this).attr("href")]);
_gaq.push(['_trackEvent', 'downloads', 'click', $(this).attr('href')]);
        }
        else if (!this.href.match(document.domain)) {
//_gaq.push(['_trackPageview', '/external/' + $(this).attr("href")]);
_gaq.push(['_trackEvent', 'external', 'click', $(this).attr('href')]);
        }
      });
		
		$('#nav-button').mousedown(function(e){
_gaq.push(['_trackEvent', 'Mobile-Menu-Icon', 'click', $(this).attr('href')]);
		});	
	
		
    }



/****************** Track Hash Clicks ***************/	

$(window).hashchange( function(){
	//console.log(location.hash);
    _gaq.push(['_trackPageview',location.pathname + location.search  + location.hash]);
})



/****************** Scroll to Hash ***************/
var hashTagActive = "";
$(".scrollto").click(function (event) {
	event.preventDefault();
	var dest = 0;
	if ($(this.hash).offset().top > $(document).height() -
$(window).height()) {
		dest = $(document).height() - $(window).height();
	} else {
		dest = $(this.hash).offset().top;
	}
	$('html,body').animate({
		scrollTop: dest
	}, 1000, 'swing');
	hashTagActive = this.hash;
//}
});

/****************** Sticky Navigation ***************/
$(window).scroll(function() {
	var scroll = $(window).scrollTop();
	if (scroll >= 1)  {
		$(".banner").addClass("fixed");} 
	else {
		$(".banner").removeClass("fixed");}
		});


/****************** Scroll Depth ***************/
$.scrollDepth();



/****************** Responsive Navigation ***************/
$("#nav-button").on("click",function(event){
	$(".nav-main").toggleClass("active");
	$("#nav-button").toggleClass("active"); 
	$("#body-wrapper").toggleClass("active");   
	event.stopPropagation();


	$("#nav-wrap > li > a").on("click",function(event){
            $('.nav-main').removeClass('active');
            $('#nav-button').removeClass('active');
			$("#body-wrapper").removeClass("active");  
	})

	$(document).on('click', function(e){
        if($('.nav-main').has(e.target).length === 0){
            $('.nav-main').removeClass('active');
            $('#nav-button').removeClass('active');
			$("#body-wrapper").removeClass("active");   
        }
	})
});



$(document).on('click', function(event) {
	if (!$(event.target).closest('#nav-wrap').length) {
	}
});




});