<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
	<?php echo $html->charset(); ?>
	<meta http-equiv="X-UA-Compatible" content="chrome=1">
	<title>
		<?php echo $title_for_layout; ?>
	</title>
	<?php
		//echo $html->meta('icon');
		echo $html->css('styles');
		echo $html->css('button');
		echo $javascript->link('http://ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js');
		//echo $javascript->link('jquery-1.3.2.min.js');
		echo $scripts_for_layout;
	?>
</head>
<body>
	<div class="jod-non-footer">
		<div class="jod-primary-header no-print">
			<div class="jod-header-container">
				<div id="search">
					<form action="http://www.google.com/search" method="get">
						<input type="hidden" name="domains" value="jod.mrm.org"/>
						<input type="hidden" name="sitesearch" value="jod.mrm.org"/>
						<input type="text" name="q" class="query" /><input class="go" type="submit" value="" />
					</form>
				</div>
				<a class="jod-logo" href="/" alt="Journal of Discourses - A 26-volume collection of public sermons by Mormon leaders from 1851 - 1886." title="Journal of Discourses - A 26-volume collection of public sermons by Mormon leaders from 1851 - 1886."></a>
			</div>
		</div>
		
		<div class="jod-secondary-header no-print">
			<div class="jod-header-container">
				<div class="jod-menu">
					<ul class="links primary-links">
						<li class="menu-56 first"><a title="" href="/" class="home button green <? if(empty($current_volume)) echo 'active'; ?>">Home</a></li>
						<? foreach(range(1,26) as $volume_number): ?>
							<li class="menu-739 volume-number">
								<? if($volume_number == 1): ?>
									Vol.
								<? endif; ?>
								<a title="" class="button green <? if(@$current_volume == $volume_number) echo 'active'; ?>" href="/<?= $volume_number ?>"><?= $volume_number ?></a>
							</li>
						<? endforeach; ?>
					</ul>
				</div>
			</div>
		</div>
		
		<div class="header-divider"></div>
		
		<div class="jod-content">
			<?php echo $content_for_layout; ?>			
		</div>

	</div>

<script type="text/javascript">
var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
</script>
<script type="text/javascript">
try {
var pageTracker = _gat._getTracker("UA-77116-18");
pageTracker._trackPageview();
} catch(err) {}</script>

	<?php
	//echo $cakeDebug;
	?>
</body>
</html>