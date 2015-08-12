<?
$javascript->link('jquery.cookie',false);
$javascript->link('discourse',false);

$months = array(
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
);
?>
<div class="page-header"><?= $this->data['Discourse']['page_header'] ?></div>

<div class="secondary-navigation">
	<table>
		<tr>
			<td class="previous-discourse">
				<? if(!empty($previous_discourse)): ?>
					<a href="/<?= $previous_discourse['Discourse']['volume'] ?>/<?= $previous_discourse['Discourse']['start_page'] ?>" title="<?= $previous_discourse['Discourse']['page_header'] ?>, by <?= $previous_discourse['Discourse']['speaker'] ?>">
						<img src="/img/arrow-left.png" />						
						<span>
							<? if($previous_discourse['Discourse']['volume'] != $current_volume): ?>
								vol. <?= $previous_discourse['Discourse']['volume'] ?>,
							<? endif; ?>	
							<? if($previous_discourse['Discourse']['start_page'] != $previous_discourse['Discourse']['end_page']): ?>
								pp. <?= $previous_discourse['Discourse']['start_page'] ?>-<?= $previous_discourse['Discourse']['end_page'] ?>
							<? else: ?>
								p. <?= $previous_discourse['Discourse']['start_page'] ?>
							<? endif; ?>
						</span>
					</a>
				<? endif; ?>
			</td>
			<td class="options">
				<div>
					<a href="/<?= $this->data['Discourse']['volume'] ?>"><span>vol. <span class="volume"><?= $this->data['Discourse']['volume'] ?></span></span></a>,
					<? if($this->data['Discourse']['start_page'] != $this->data['Discourse']['end_page']): ?>
						pp. <?= $this->data['Discourse']['start_page'] ?>-<?= $this->data['Discourse']['end_page'] ?>
					<? else: ?>
						p. <?= $this->data['Discourse']['start_page'] ?>
					<? endif; ?>
					
					<a id="reference-button" href="#" title="Show reference example"><img src="/img/cite.png" /></a>
					
					<a class="addthis_button" href="http://www.addthis.com/bookmark.php?v=250&amp;pub=mrmdotorg"><img src="/img/share.png" /></a>
					<script type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#pub=mrmdotorg"></script>
					
					<a href="#" id="toggle-pagination-button" title="Switch to continuous view"><img src="/img/toggle-continuous.png" /></a>
				</div>
			</td>
			<td class="next-discourse">
				<? if(!empty($next_discourse)): ?>
					<a href="/<?= $next_discourse['Discourse']['volume'] ?>/<?= $next_discourse['Discourse']['start_page'] ?>" title="<?= $next_discourse['Discourse']['page_header'] ?>, by <?= $next_discourse['Discourse']['speaker'] ?>">
						<span>
							<? if($next_discourse['Discourse']['volume'] != $current_volume): ?>
								vol. <?= $next_discourse['Discourse']['volume'] ?>,
							<? endif; ?>						
							<? if($next_discourse['Discourse']['start_page'] != $next_discourse['Discourse']['end_page']): ?>
								pp. <?= $next_discourse['Discourse']['start_page'] ?>-<?= $next_discourse['Discourse']['end_page'] ?></span>
							<? else: ?>
								p. <?= $next_discourse['Discourse']['start_page'] ?></span>
							<? endif; ?>
						</span>
						<img src="/img/arrow-right.png" />
					</a>
				<? endif; ?>
			</td>
		</tr>
	</table>
</div>

<div id="reference" class="hidden">
	<?= $this->data['Discourse']['speaker'] ?>,
	"<span class="page-header"><?= $this->data['Discourse']['page_header'] ?></span>",
	<em>Journal of Discourses</em>,
	vol. <?= $current_volume ?>,
	<? if($this->data['Discourse']['start_page'] != $this->data['Discourse']['end_page']): ?>
		pp. <?= $this->data['Discourse']['start_page'] ?>-<?= $this->data['Discourse']['end_page'] ?>,
	<? else: ?>
		p. <?= $this->data['Discourse']['start_page'] ?>,
	<? endif; ?>
	<?
	if(!empty($this->data['Discourse']['date'])) {
		$date_parts = explode('-',$this->data['Discourse']['date']);
		$date_parts[1] = (int) $date_parts[1];
		$date_parts[2] = (int) $date_parts[2];
		if(count($date_parts) == 3 && !empty($date_parts[1]) && !empty($date_parts[2]))
			echo $months[(int) $date_parts[1] - 1] . ' ' . $date_parts[2] . ', ' . $date_parts[0];
		else
			echo $date_parts[0];
	}
	?>.
</div>

<div id="floating-page-numbers"></div>

<div class="discourse continuous">
	<div class="meta">
		<h1><?= @$this->data['Discourse']['title'] ?></h1>
		<div class="subtitle"><?= $this->data['Discourse']['subtitle'] ?></div>
		<div class="reporter">Reported by <?= $this->data['Discourse']['reported_by'] ?>.</div>
		<?
		$speaker_mug = str_replace(array(',','.'),'',strtolower($this->data['Discourse']['speaker']));
		$speaker_mug = str_replace(' ','-',$speaker_mug);
		$image_file = WWW_ROOT  . 'img' . DS . 'speakers' . DS . $speaker_mug . '.jpg';
		if(file_exists($image_file)){

			$image_size = getimagesize($image_file);
		?>
			<div class="speaker">
				<img <?= $image_size[3] ?> src="/img/speakers/<?= $speaker_mug ?>.jpg" alt="<?= $this->data['Discourse']['speaker'] ?>" title="<?= $this->data['Discourse']['speaker'] ?>" />
			</div>
		<? } ?>	
	</div>
	<div class="content">
		<div class="sorted-pages"></div>
		<div class="unsorted-pages">
			<?= $this->data['Discourse']['content']; ?>	
		</div>
	</div>
</div>

<div class="footer">
	<a class="public-domain" title="Public domain" alt="Public domain" href="http://en.wikipedia.org/wiki/Public_domain"><img src="/img/public-domain.png" /></a>
</div>