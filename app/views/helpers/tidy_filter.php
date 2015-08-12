<?php 
class TidyFilterHelper extends AppHelper {
    function __construct2()
    {
        ob_start();
    }
    
    function __destruct2()
    {
        $output = ob_get_clean();
        $config = array(
			'indent' => true,
			'output-xhtml' => false,
			'wrap' => false,
			'hide-comments' => true,
			'logical-emphasis' => true
		);
        $output = tidy_repair_string($output, $config, 'utf8');
        
        ob_start();
        echo $output;
    }
} 