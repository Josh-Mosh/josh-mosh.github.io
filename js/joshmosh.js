$(document).ready(function() {

	// portfolio tabs
	$(function() {
		$("#tabs").tabs();
	});

	$('#ruby_tab').click(function() {
		$('#unchained_div a').click();
	});

	$('#php_tab').click(function() {
		$('#teachers_div a').click();
	});

	$('#js_tab').click(function() {
		$('#balls_div a').click();
	});

	// portfolio preview list
	$('.preview_list_item a').click(function() {
		$(this).parent().siblings().removeClass('selected');
		$(this).parent().addClass('selected');
		$('.project_frame').hide();

		var title = $(this).siblings('.project_info').attr('title'),
				description = $(this).siblings('.project_info').attr('description'),
				github = $(this).siblings('.project_info').attr('github');

		$('.project_top').html('<h3>' + title + '</h3><p>' + description + '</p>');

		if ($(this).siblings('.project_info').attr('firstsrc')) {
			var firstsrc = $(this).siblings('.project_info').attr('firstsrc');
			console.log('firstsrc ', firstsrc);
			$('.project_images').html("<img class='col-md-4 project_img' src=" + firstsrc + ">");
			$('.carousel-indicators').html("<li data-target='#myCarousel' data-slide-to='0' class='active'></li>");
			$('.carousel-inner').html("<div class='active item'><img src=" + firstsrc + "></div>");
		}
		if ($(this).siblings('.project_info').attr('secondsrc')) {
			var secondsrc = $(this).siblings('.project_info').attr('secondsrc');
			$('.project_images').append("<img class='col-md-4 project_img' src=" + secondsrc + ">");
			 $('.carousel-indicators').append("<li data-target='#myCarousel' data-slide-to='1'></li>");
			$('.carousel-inner').append("<div class='item'><img src=" + secondsrc + "></div>");
		}
		if ($(this).siblings('.project_info').attr('thirdsrc')) {
			var thirdsrc = $(this).siblings('.project_info').attr('thirdsrc');
			$('.project_images').append("<img class='col-md-4 project_img' src=" + thirdsrc + ">");
			$('.carousel-indicators').append("<li data-target='#myCarousel' data-slide-to='2'></li>");
			$('.carousel-inner').append("<div class='item'><img src=" + thirdsrc + "></div>");
		}
		if ($(this).siblings('.project_info').attr('iframe')) {
			var framesrc = $(this).siblings('.project_info').attr('iframe');
			$('.project_images img').hide();
			$('.project_frame').show();
			$('.project_frame').html("<iframe src='" + framesrc + "''></iframe>");
		}
		$('.github_link a').attr('href', github);

		return false;
	});

	// Modal Portfolio Images
	$(document).ready(function() {
		$(document).on('click', '.project_img', function() {
			$('#myModal').modal();
			return false;
		});
	});

});
