$(document).ready(function () {



	// hide #back-top first
	$("#back-top").hide();

	$(".admin-header").addClass("admin-sticky");
	$("#new-header").addClass("sticky");


	
	//console.log(mediaItems);
	
	// fade in #back-top
	$(function () {
			$(".admin-added-links").css("cursor","pointer");
		$(".admin-added-links").click(function () {
			var url = $(this).data("href");
			window.location.href = url;
        })
		//$(window).scroll(function () {
		//	if ($(this).scrollTop() > 10) {
		//		$('#back-top').fadeIn();
		//	} else {
		//		$('#back-top').fadeOut();
		//	}

		//	var scroll = $(window).scrollTop();
		//	if (scroll > 200 && $(window).width() > 991) {
		//		$("#new-header").addClass("sticky");
		//	//	$(".admin-header").addClass("admin-sticky");
		//	} else if (scroll > 50) {
		//		$("#new-header").addClass("sticky");
		//		$(".admin-header").addClass("admin-sticky");
		//	} else {
		//		$("#new-header").removeClass("sticky");
		//		//$(".admin-header").removeClass("admin-sticky");
		//	}

		//	var scroll = $(window).scrollTop();
		//	if (scroll > 200 && $(window).width() > 991) {
		//		$(".admin-header").addClass("admin-sticky");
		//	} else if (scroll > 100) {
		//		$(".admin-header").addClass("admin-sticky");
		//	} else {
		//		$(".admin-header").removeClass("admin-sticky");
		//	}

		//});

		// scroll body to 0px on click
		$('#back-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 1500);
			return false;
		});
	});


	$(".sublist-toggle-button").click(function () {
		$(".list").find(".active").addClass("inactive").removeClass('active');
		//$(this).closest('li').find('.sublist').hide();
		$(".list").find(".open").removeClass('open');
		$(this).closest('li').addClass("active");
		$(this).closest('li').find('.sublist').toggle();
		var dim = $(this).closest('li').find('.sublist').is(":visible");
		if (!dim)
			$(this).removeClass('open');
		else
			$(this).addClass('open');
	})
		
	if (window.matchMedia('(max-width: 991px)').matches) {
		$("#navbarNavDropdown").hide();
		$("#navbarToggle").click(function () {
			$("#navbarNavDropdown").slideToggle(1000);
			var parent = $(this).toggleClass("toggle-open");
		});
		$(".desktop-product-attributes-container").remove();
		$("#desktop-top-menu").remove();
		$(".search-desktop").remove();
		$("#desktop-attributes").remove();


		$(".product-box-add-to-cart-button").removeClass('button').addClass('button2');

		$(".block-category-navigation").css("margin-top", "60px");
		
	} else {
		$(".mobile-product-attributes-container").remove();
		$("#mobile-top-menu").remove();
		$(".search-mobile").remove();
		$("#mobile-attributes").remove();
	}

	/*new*/
	$(".search-icon-black").hide();
	$(".mobile-search").click(function () {
		$(".form-inline-block").animate({ width: 'toggle' });
		$(".search-icon-green").hide();
		$(".search-icon-black").show();
	});

	/*new end*/

	$("#mobile-input-search").hide();
		$("#mobile-search-button").click(function(){		
		$(".mobile-search").toggle(1000);
	});

	$("#mobile-search-button").click(function () {
		$(".form-inline-block").animate({ width: 'toggle' });
		$(".collapsed-navbar").addClass("add-top");		
  	});
	  
	//$("#has_submenu_a").click(function () {
	//	$("#sub_menu_a").toggle(1000);
	//	var parent = $(this);
		
	//	var closest = parent.find(".has-submenu");
	//	if($(closest).hasClass("expanded")){
	//		$(closest).removeClass("expanded")
	//	}else{
	//		$(closest).addClass("expanded")
	//	}
 // 	});

	$(".has-submenu").click(function () {
		var ul = $(this).parent('.normal-submenu');
		
		if ($(this).hasClass("expanded")) {
			$(this).removeClass("expanded")
			$($(ul).find('.sub_menu_child')).slideUp(1000);
		} else {
			$(this).addClass("expanded")
			$($(ul).find('.sub_menu_child')).slideDown(1000);
		}

		//if (('.sub_menu_child').is(':visible')) {
		//	$(".sub_menu_child").hide();
		//} else {
		//	$(".sub_menu_child").show();
  //      }

		//debugger;
		////$(ul.find('.sub_menu_child')).toggle(1000);
		//debugger;
		//var parent = $(this);

		//var closest = parent.find(".has-submenu");
		//if ($(closest).hasClass("expanded")) {
		//	$(closest).removeClass("expanded")
		//} else {
		//	$(closest).addClass("expanded")
		//}
	});
	
	$("#has_submenu_b").click(function () {
		$("#sub_menu_b").toggle(1000);
		var parent = $(this);
		
		var closest = parent.find(".has-submenu");
		if($(closest).hasClass("expanded")){
			$(closest).removeClass("expanded")
		}else{
			$(closest).addClass("expanded")
		}
  	});  
	
	$("#has_submenu_a, #has_submenu_b").click(function(e){  
        return false;
	});

	//$(".my-account").hover(function () {
	//	var ul = $(this).parent('.normal-submenu');
	//	var el = $($(ul).find('.sub_menu_child'));
	//	debugger;
	//	el.show();
 //   })
	  
});

$.fn.isInViewport = function () {
	let elementTop = $(this).offset().top;
	let elementBottom = elementTop + $(this).outerHeight();

	let viewportTop = $(window).scrollTop();
	let viewportBottom = viewportTop + $(window).height();

	return elementBottom > viewportTop && elementTop < viewportBottom;
};

function updateStates(e) {
	if (e.value > 0) {
		$.get('/country/GetStatesByCountryId?countryId=' + e.value + '&addSelectStateItem=false', function (d) {
			if (d && d.length > 0 && d[0].name != 'Other') {
				$("#StateProvinceId").show();
				$("#StateProvinceId").html('');
				$("#txtStateText").hide();
				$(d).each(function () {
					var opt = $('<option></option>').val(this.id).text(this.name);
					$("#StateProvinceId").append(opt);
				})
			} else {
				$("#StateProvinceId").hide();
				$("#txtStateText").show();
				var str = localStorage.getItem('shipping-state');
				if(str && str!=null)
					$("#txtStateText").val();
			}
		})
	} else {
		$("#StateProvinceId").hide();
		$("#txtStateText").show();
    }
}

function updatestateLocal(e){
	localStorage.setItem('shipping-state', e.value);
}

