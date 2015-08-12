<?
class DiscoursesController extends AppController {	
	var $helpers = array('Javascript');

	function index() {
		if(!empty($this->params['pass'][0]) && !empty($this->params['pass'][1])) {
			$this->discourse();
			return true;
		}
		
		if(!empty($this->params['pass'][0])) {
			$this->volume();			
			return true;
		}

		$this->redirect('/1');
		exit;
	}
	
	function volume() {
		$volume = (int) $this->params['pass'][0];
		if($volume > 26) {
			$volume = 26;
			$this->redirect('/' . $volume);
		}
		if($volume < 1) {
			$volume = 1;
			$this->redirect('/' . $volume);
		}
		$this->set('current_volume',$volume);
		
		$this->data = $this->Discourse->find('all',array(
			'conditions' => array(
				'volume' => $volume
			),
			'contain' => false,
			'fields' => array('start_page','end_page','title','speaker','date'),
			'order' => 'start_page ASC'
		));
		
		$this->set('title','Journal of Discourses, vol. ' . $volume);
		
		$this->render('volume');
	}
	
	function discourse() {
		$volume = $this->params['pass'][0];
		if($volume > 26) {
			$volume = 26;
			$this->redirect('/' . $volume . '/' . $this->params['pass'][1]);
		}
		if($volume < 1) {
			$volume = 1;
			$this->redirect('/' . $volume. '/' . $this->params['pass'][1]);
		}
		$this->set('current_volume',$volume);
		
		$page = $this->params['pass'][1];

		$last_end_page = $this->Discourse->field('end_page',array(
				'volume' => $volume
			),
			'end_page DESC'
		);
		if($page > (int) $last_end_page) {
			$this->redirect('/' . $volume. '/' . $last_end_page);
		}

		$closest_start_page = $this->Discourse->find('first',array(
			'conditions' => array(
				'volume' => $volume,
				'start_page <=' => $page
			),
			'order' => 'start_page DESC',
			'fields' => 'start_page'
		));
		$closest_start_page = $closest_start_page['Discourse']['start_page'];

		if($closest_start_page !== $page) {
			$this->redirect('/' . $volume . '/' . $closest_start_page . '#' . $page);
			exit;
		}
		
		$this->data = $this->Discourse->find('first',array(
			'conditions' => array(
				'volume' => $volume,
				'start_page' => $page
			)
		));
		
		if($page == 1 && $volume == 1) {
			$previous_discourse = null;
		} else if ($page == 1){
			$previous_discourse = $this->Discourse->find('first',array(
				'conditions' => array(
					'volume' => (int) $volume - 1
				),
				'order' => 'end_page DESC',
				'fields' => array(
					'volume',
					'start_page',
					'end_page',
					'page_header',
					'speaker'
				)
			));
		} else {
			$previous_discourse = $this->Discourse->find('first',array(
				'conditions' => array(
					'volume' => $volume,
					'end_page <= ' => $page,
				),
				'order' => 'end_page DESC',
				'fields' => array(
					'volume',
					'start_page',
					'end_page',
					'page_header',
					'speaker'
				)
			));
		}
		$this->set('previous_discourse',$previous_discourse);
		
		if($page == 369 && $volume = 26) {
			$next_discourse = null;
		} else {
			$next_discourse = $this->Discourse->find('first',array(
				'conditions' => array(
					'volume' => (int) $volume,
					'start_page >' => $this->data['Discourse']['start_page']
				),
				'order' => 'start_page ASC',
				'fields' => array(
					'volume',
					'start_page',
					'end_page',
					'page_header',
					'speaker'
				)
			));
			if(empty($next_discourse)) {
				$next_discourse = $this->Discourse->find('first',array(
					'conditions' => array(
						'volume' => (int) $volume + 1,
						'start_page' => 1
					),
					'fields' => array(
						'volume',
						'start_page',
						'end_page',
						'page_header',
						'speaker'
					)
				));			
			}
		}
		$this->set('next_discourse',$next_discourse);
	
		$this->set('title',$this->data['Discourse']['page_header'] . ', by ' . $this->data['Discourse']['speaker'] . ' (Journal of Discourses, vol. ' . $volume . ', pp. ' . $this->data['Discourse']['start_page'] . '-' . $this->data['Discourse']['end_page'] . ')');
		
		$this->render('discourse');
	}
}