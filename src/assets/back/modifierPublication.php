<?php
 include "Crud.php"; 
  $crud= new Crud();
 $_POST = json_decode(file_get_contents('php://input'));
$sql = "UPDATE  publication SET  titre ='$_POST->titre',  urll ='$_POST->urll', datee ='$_POST->datee' WHERE id = '$_POST->id' ";
$data=$crud->execute($sql);
?>