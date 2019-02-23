<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  require_once("DbConfig.php");
  $dbconfig = new DbConfig();
  $dbconfig->__construct();
  $connection=$dbconfig->connection;
  $connection->set_charset("utf8");
    
        $query="SELECT  COUNT(id) FROM publication";
        $result = $connection->query($query);
        $myArray = array();
        if ($result) {
        
            while($row = $result->fetch_array(MYSQL_ASSOC)) {
                    $myArray[] = $row;
            }
            echo json_encode($myArray);
        }
        
        $result->close();

        
    

?>