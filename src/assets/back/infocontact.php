 <?php
    include "Crud.php";
    $crud= new Crud();
    
        $query="SELECT id,adresse,mail,telephone,fax FROM infocontact where id='1'";
        $data=$crud->getData($query);
         echo json_encode($data);
    

?>