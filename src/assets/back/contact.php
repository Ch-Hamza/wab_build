<?php

    include "Crud.php";
    $crud= new Crud();
    $query="SELECT id,tel1,tel2,fax,mail,adresse,facebook,linkedin,twitter FROM contact";
        
        $data=$crud->getData($query);
         echo json_encode($data);
    

?>