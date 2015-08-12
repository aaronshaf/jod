<?
die;

class ImportController extends AppController {	
	var $uses = array();
	var $helpers = array('Javascript');
	
	function index() {
	}
	
	function clean_volume($volume) {
		$this->Discourse =& ClassRegistry::init('Discourse');
		$discourses = $this->Discourse->find('all',array(
			'conditions' => array(
				'volume' => $volume
			)
		));	
		foreach($discourses as $discourse) {
			$this->clean_discourse($discourse);	
		}
		
		$this->data = $volume;
	}
	
	private function clean_discourse($discourse) {
		App::import('Vendor', 'simple_html_dom');
		
		$html = str_get_html($discourse['Discourse']['content']);

		foreach($html->find('div.pagebreak') as $pagebreak) {
			$anchor_name = $pagebreak->find('a[name]',0)->name;
			$pdf_text = $pagebreak->find('a[target="_pdfwin"]',0)->href;
			$pdf_image = $pagebreak->find('a[target="_pdfwin2"]',0)->href;
			$pagebreak->innertext = '<a name="' . $anchor_name . '"></a><a class="pdf-image" href="' . $pdf_image . '"></a>';
			$pagebreak->tag = 'span';
		}
		foreach($html->find('div.columnbreak') as $columnbreak) {
			$anchor_name = $columnbreak->find('a[name]',0)->name;
			$pdf_text = $columnbreak->find('a[target="_pdfwin"]',0)->href;
			$pdf_image = $columnbreak->find('a[target="_pdfwin2"]',0)->href;
			$columnbreak->innertext = '<a name="' . $anchor_name . '"></a><a class="pdf-image" href="' . $pdf_image . '"></a>';
			$columnbreak->tag = 'span';
		}
		foreach($html->find('div.paragraph') as $paragraph) {
			$paragraph->tag = "p";
			$paragraph->class = null;
		}
		foreach($html->find('div.hyphen') as $hyphen) {
			$hyphen->tag = "span";
		}
		
		$this->Discourse->id = $discourse['Discourse']['id'];
		$this->Discourse->saveField('content',$html);
	}
	
	private function volume($volume) {
		$discourse = 1;
		while($this->discourse($volume,$discourse++)) {
		}
		//$this->redirect('http://jod.localhost/discourses/import_volume/' . ((int) $volume) + 1);
		$this->data = $volume;
	}
	
	private function discourse($volume,$discourse) {
		$this->Discourse =& ClassRegistry::init('Discourse');
		
		$volume = str_pad((int) $volume, 2, "0", STR_PAD_LEFT);
		$discourse = str_pad($discourse, 2, "0", STR_PAD_LEFT);
		
		App::import('Core', array('Xml', 'HttpSocket'));
		$this->Http =& new HttpSocket();
		
		$url = "http://scriptures.byu.edu/gettalk.php?vol=$volume&disc=$discourse";
		$html = $this->Http->get($url);
		if(strpos($html,'file_get_contents') !== false) {
			return false;
		}
		
		$dom = new DOMDocument();
		@$dom->loadHTML($html);
		$xpath = new DOMXPath($dom);
		
		$start_page = (int) $xpath->evaluate('//a[@name][1]')->item(0)->getAttribute('name');

		$column_anchors = $xpath->evaluate('//a[@name]');
		$end_page = (int) $column_anchors->item($column_anchors->length - 1)->getAttribute('name');
		
		$title = clean_string(find_content($xpath,'//div[@class="title"]'));
		$subtitle = find_content($xpath,'//div[@class="subtitle"]');
		$reported_by = clean_string(find_content($xpath,'//div[@class="reportedBy"]'));
		$page_header = clean_string(find_content($xpath,'//div[@class="pageHeader"]'));
		$speaker = clean_string(find_content($xpath,'//div[@class="speaker"]'));
		$date = prepare_date(find_content($xpath,'//div[@class="date"]'));
		$content = find_content($xpath,'//div[@class="discourseBody"]');
		
		$this->Discourse->create();
		$this->Discourse->save(array(
			'volume' => $volume,	
			'start_page' => $start_page,
			'end_page' => $end_page,			
			'title' => $title,
			'subtitle' => $subtitle,
			'reported_by' => $reported_by,
			'page_header' => $page_header,
			'speaker' => $speaker,
			'date' => $date,
			'subtitle' => $subtitle,
			'content' => $content
		));
		
		return true;
	}
}

function prepare_date($date) {
	$date = trim($date);
	$date = trim($date,'Date: ');
	$date_parts = explode('/',$date);
	if(sizeof($date_parts) != 3) {
		return null;
	}
	$month = str_pad((int) $date_parts[0], 2, "0", STR_PAD_LEFT);
	$day = str_pad((int) $date_parts[1], 2, "0", STR_PAD_LEFT);
	$year = $date_parts[2];
	return $year . '-' . $month . '-' . $day;
}

function clean_string($title) {
	$length = strlen($title);
	$title = trim($title);
	$title = trim($title,'.');
	$title = str_replace('Reported By: ','',$title);
	$title = str_replace('Page Header: ','',$title);
	$title = str_replace('Speaker: ','',$title);
	
	if(strlen($title) - strpos($title,'Etc') == 3) {
		$title .= '.';
	}
	
	if(strlen($title) - strpos($title,'Jr') == 3) {
		$title .= '.';
	}
	
	return $title;
}

function find_content($xpath,$query) {
	$results = $xpath->evaluate($query);
	$result = $results->item(0);
	return dom_to_html($result);
}

function dom_to_html($element) {
	$innerHTML = '';		
	$children = $element->childNodes;
	foreach ($children as $child) {
	    $tmp_doc = new DOMDocument();
	    $tmp_doc->appendChild($tmp_doc->importNode($child,true));		
	    $innerHTML .= $tmp_doc->saveHTML();
	}
	
	return $innerHTML;
}