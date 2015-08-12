$(document).ready(function () {
	$('table.tabular.autolink tbody tr').click(function() {
		self.location.href = $('a:first',this).attr('href');
	});
});