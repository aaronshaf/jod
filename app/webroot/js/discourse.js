$(document).ready(function () {	
	function sort_pages() {	
		$('#floating-page-numbers').remove();
	
		//Split paragraphs by page breaks
		$('.unsorted-pages p > .pagebreak').each(function(){
			var new_paragraph = document.createElement('p');
			var p = $(this).parent('p');

			if($(p).hasClass('continued')) {
				$(new_paragraph).addClass('continued');
			}
			$(new_paragraph).append(allPreviousChildren(this));
			$(new_paragraph).insertBefore(p);
			$(p).addClass('continued');
		});

		//Split paragraphs by column breaks		
		$('.unsorted-pages p > .columnbreak').each(function(){
			var new_paragraph = document.createElement('p');
			var p = $(this).parent('p');

			if($(p).hasClass('continued')) {
				$(new_paragraph).addClass('continued');
			}
			$(new_paragraph).append(allPreviousChildren(this));
			$(new_paragraph).insertBefore(p);
			$(p).addClass('continued');
		});
		
		//Sort paragraphs by column and page breaks
		$('.unsorted-pages .pagebreak,.unsorted-pages .columnbreak').each(function() {			
			var _break = this;			
			var div = document.createElement('div');
			$(div).addClass('column');

			if(this.parentNode.tagName.toLowerCase() == 'p') {
				_break = this.parentNode;
			}

			$(div).append(allPreviousChildren(_break))			
			$('.sorted-pages').append(div);
		});
		
		//Sort any remaining unsorted paragraphs
		if($('.unsorted-pages p').length) {
			var column = document.createElement('div')
			$(column).addClass('column');
			$('.unsorted-pages p').appendTo(column);			
			$(column).appendTo($('.sorted-pages'));
		}

		//Sort columns in to pages
		var columns = 0;
		$('.sorted-pages > .column').each(function(){
			columns++;
			var page;

			if(columns % 2 == 1) {
				page = document.createElement('div');
				$(page).addClass('page');
				$('.sorted-pages').append(page);
			} else {
				page = $('.sorted-pages > .page:last');
			}
			$(page).append(this);
		});
		
		//Mark left columns
		$('.sorted-pages > .page > .column:first-child').each(function() {
			$(this).addClass('left');
		});
		
		//Insert discourse metadata into first page
		$('.sorted-pages > .page:first').each(function(){
			var separator1 = document.createElement('div');
			$(separator1).addClass('separator');
			
			var separator2 = document.createElement('div');
			$(separator2).addClass('separator');
		});
		
		$('.sorted-pages > .page').each(function(){
			var page = parseInt($('.columnbreak a[name],.pagebreak a[name]',this).attr('name'));
			$(this).attr('id',page);

			var header;
			if(page % 2) {
				header = $('.jod-content > .page-header').html();
			} else {
				header = 'Journal of Discourses';
			}
			
			var html = '<table><tr><td class="left-page-number"></td><td class="page-header">' + header + '</td><td class="right-page-number"></td></table>';
			$(this).prepend(html)

			var a = document.createElement('a');
			$(a).attr('href','/' + $('.volume').html() + '/' + page);
			$(a).html(page);
			if(page % 2) {
				$('.right-page-number',this).append(a);
			} else {
				$('.left-page-number',this).append(a);				
			}
			
			var pdf_image = $('a.pdf-image',this).attr('href');
			var pdf_html = ' <a href="' + pdf_image + '"><img src="//media.mrm.org/pdf.icon.png"/></a>';
			if(page % 2) {
				$('.right-page-number',this).append(pdf_html);
			} else {
				$('.left-page-number',this).append(pdf_html);				
			}			
		});
	}
	
	$('#toggle-pagination-button').click(function() {
		if($('.discourse').hasClass('paginated')) {
			$.cookie('pagination','false',{
				path: '/'
			});
			self.location.reload();
		} else {
			$.cookie('pagination','true',{
				path: '/'
			});
			$('.discourse').removeClass('continuous').addClass('paginated');
			sort_pages();
			$('#toggle-pagination-button').attr('title','Switch to continous view');
			$('#toggle-pagination-button img').attr('src','//media.mrm.org/toggle-continuous.png');
		}
		
		return false;
	});
	
		//alert( $.cookie('pagination'));
	if($.cookie('pagination') == 'true' || $.cookie('pagination') == null) {
		$('.discourse').removeClass('continuous').addClass('paginated');
		sort_pages();	
		$.cookie('pagination','true',{
			path: '/'
		});
	} else {
		var pages = [];
		
		$('.discourse .columnbreak a[name],.discourse .pagebreak a[name]').each(function(){
			var page = parseInt($(this).attr('name'));
			var div,page_link,a,img,offset;
			if(!pages[page]) {
				div = document.createElement('div');
				$(div).addClass('page-number');
				page_link = document.createElement('a');
				$(page_link).attr('href','/' + $('.volume').html() + '/' + page);
				$(page_link).html(page);
				$(div).append(page_link);
				$(div).append(' ');
				$(div).attr('id',page);
				a = document.createElement('a');
				$(a).attr('href',$(this).parent().find('a.pdf-image').attr('href'));
				img = document.createElement('img');
				$(img).attr('src','//media.mrm.org/pdf.icon.png');
				$(a).append(img);
				$(div).append(a);
				$('#floating-page-numbers').append(div);
				positionContinuousPageNumbers();
			}
			pages[page] = true;
		});
		positionContinuousPageNumbers();
		$('#toggle-pagination-button').attr('title','Switch to paginated view');
		$('#toggle-pagination-button img').attr('src','//media.mrm.org/toggle-pagination.png');
	}
	
	$('#reference-button').click(function(){
		if($('#reference').hasClass('hidden')) {
			$('#reference').removeClass('hidden');
		} else {
			$('#reference').addClass('hidden');		
		}
		
		return false;
	});
	
	//Something has to be done about the click-and-no-go bug
	$('.jod-menu li.volume-number').click(function(){
		//self.location.href = $(this).find('a').attr('href');
	});
	
	$(window).resize(function(){
		if($.cookie('pagination') != 'true') {
			positionContinuousPageNumbers();			
		}
	});
	
	if(self.location.href.indexOf('#') != -1) {
		var href_parts = self.location.href.split('#');
		if(href_parts[1]) {
			var offset = $('#' + href_parts[1]).offset();
			window.scroll(0,offset.top);			
		}
	}
});

function positionContinuousPageNumbers() {
	var first_page = parseInt($('.discourse .columnbreak a[name]:first,.discourse .pagebreak a[name]:first').attr('name'));
	$('#floating-page-numbers div.page-number').each(function(){
		var page = $(this).attr('id');
		if(first_page == page) {
			offset = $('.discourse p:first').offset();
		} else {
			var offset = $('.discourse a[name="' + page + 'a' + '"]:first,.discourse a[name="' + page + 'b' + '"]:first').offset();
		}
		$(this).css({top: offset.top});
	});
}

function allPreviousChildren(node) { //including text nodes
	var previousChildren = [];
	do {
		previousChildren.unshift(node);
	} while(node = node.previousSibling);
	return previousChildren;
}