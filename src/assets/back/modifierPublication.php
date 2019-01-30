<?php
 include "Crud.php"; 
  $crud= new Crud();
 $_POST = json_decode(file_get_contents('php://input'));
$sql = "UPDATE  publication SET  titre ='$_POST->titre',  lien ='$_POST->lien', date ='$_POST->date' WHERE id = '$_POST->id' ";
$data=$crud->execute($sql);
?>