/* --------------------------------------------------------------------------
 * File        : theme-masonry-setting.js
 * Version     : 1.0
 * Author      : IMediapixel
 * Author URI  : https://themeforest.net/user/imediapixel
 *
 * IMediapixel Copyright 2017 All Rights Reserved.
 * -------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------
 * javascript handle initialization
      1. To top Jquery
      2. Media Element
      3. Dropdown Menu
 *
 * -------------------------------------------------------------------------- */

(function($){

	"use strict";
	
	var themeApp = {
		
		//----------- 1. To top Jquery ----------- 
		theme_toTop:function() {
		   
		   	var screenWidth = $(window).width();
			if( screenWidth >= 768 ){
				$(window).scroll(function(){
		            if ($(this).scrollTop() > 100) {
		                $('.to-top').fadeIn();
		            } else {
		                $('.to-top').fadeOut('fast');
		            }
		        }); 
		 
		        $('.to-top').click(function(){
		            $("html, body").animate({ scrollTop: 0 }, 800);
		            return false;
		        });
	    	}
		},

		//----------- 2. Media Element ----------- 
		theme_mediaelement:function() {
			$('audio, video').mediaelementplayer();
		},

		//---------- 3. Dropdown Menu -----------
		theme_menu_dropdown:function() {
			$('ul.nav li.dropdown').hover(function() {
		  		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
			}, function() {
		  		$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
			});
        },

        //---------- 3. Counter -----------
		theme_sticky_sidebar:function() {
			var screenWidth = $(window).width();
			if( screenWidth >= 768 ){
				if( $('.impx-sidebar.sticky').length ){
				    $('.impx-sidebar.sticky').stick_in_parent({
						parent: $('.impx-content')
					});
					$(window).bind("load", function() {
					   	$(document.body).trigger("sticky_kit:recalc");
					});
				}

			}
        },
		
		theme_init:function(){
			themeApp.theme_toTop();
			themeApp.theme_mediaelement();
			themeApp.theme_menu_dropdown();
			themeApp.theme_sticky_sidebar();
		}
		
	}//end themeApp
	

	jQuery(document).ready(function($){
		themeApp.theme_init();
    });
	
})(jQuery);
