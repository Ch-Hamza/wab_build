<?php
    include "Crud.php";
    $crud= new Crud();
    
        $query="SELECT id,titre,datee,urll FROM publication";
        $data=$crud->getData($query);
         echo json_encode($data);
    

?>