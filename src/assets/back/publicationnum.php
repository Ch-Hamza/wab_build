<?php
    include "Crud.php";
    $crud= new Crud();
    
        $query="SELECT  COUNT(id) FROM publication";
        $data=$crud->getData($query);
         echo json_encode($data);
    

?>