<?php
 include "Crud.php"; 
  $crud= new Crud();
 $_POST = json_decode(file_get_contents('php://input'));
$sql = "UPDATE  contact SET  adresse ='$_POST->adresse',  mail ='$_POST->mail', tel1 ='$_POST->tel1' , tel2 ='$_POST->tel2', fax ='$_POST->fax' , facebook ='$_POST->facebook' , linkedin ='$_POST->linkedin'  , twitter ='$_POST->twitter' WHERE id = '1' ";
$data=$crud->execute($sql);
?>