window.addEventListener("load",function(){$(window).scroll(function(){$(window).scrollTop()>$("nav").height()?$("nav.navbar").addClass("show-menu"):($("nav.navbar").removeClass("show-menu"),$("nav.navbar .navMenuCollapse").collapse({toggle:!1}),$("nav.navbar .navMenuCollapse").collapse("hide"))}),$(".navbar li a").on("click",function(){$(".collapse.in").collapse("hide")})}),window.addEventListener("load",function(){$("a.smooth").smoothScroll({speed:800})}),window.addEventListener("load",function(){if(!navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|IEMobile/i)){skrollr.init({smoothScrolling:!1,forceHeight:!1,mobileDeceleration:.004})}});