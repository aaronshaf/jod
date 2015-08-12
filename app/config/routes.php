<?
//Router::connect('/import/:action', array('controller' => 'import'));

Router::connect('/*', array('controller' => 'discourses', 'action' => 'index'));

/*
Router::connect('/:controller/:id',
	array('action' => 'edit'),
	array('id' => $UUID)
);
*/