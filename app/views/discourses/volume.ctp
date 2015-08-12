<?
$javascript->link('volume',false);
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

<h1>Volume <?= $current_volume ?></h1>
<table class="tabular hover-rows volume autolink">
	<thead>
		<th>
			Pages
		</th>
		<th>
			Date
		</th>
		<th>
			Speaker
		</th>
		<th>
			Title
		</th>
	</thead>
	<tbody>
		<? foreach($this->data as $discourse): ?>
			<tr>
				<td class="pages">
					<a href="/<?= $current_volume ?>/<?= $discourse['Discourse']['start_page'] ?>">
						<?= $discourse['Discourse']['start_page'] ?> -
						<?= $discourse['Discourse']['end_page'] ?>
					</a>
				</td>
				<td class="date">
					<?
					if(!empty($discourse['Discourse']['date'])) {
						$date_parts = explode('-',$discourse['Discourse']['date']);
						$date_parts[1] = (int) $date_parts[1];
						$date_parts[2] = (int) $date_parts[2];
						if(count($date_parts) == 3 && !empty($date_parts[1]) && !empty($date_parts[2]))
							echo $months[(int) $date_parts[1] - 1] . ' ' . $date_parts[2] . ', ' . $date_parts[0];
						else
							echo $date_parts[0];
					}
					?>
				</td>
				<td class="speaker">
					<?= $discourse['Discourse']['speaker'] ?>
				</td>
				<td class="title">
					<?= $discourse['Discourse']['title'] ?>
				</td>
			</tr>
		<? endforeach; ?>
	</tbody>
</table>