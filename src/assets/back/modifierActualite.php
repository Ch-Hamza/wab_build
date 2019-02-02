<?php
 include "Crud.php"; 
  $crud= new Crud();
 $_POST = json_decode(file_get_contents('php://input'));
$sql = "UPDATE  actualite SET  titre ='$_POST->titre',  contenu ='$_POST->contenu', datee ='$_POST->datee' WHERE id = '$_POST->id' ";
$data=$crud->execute($sql);
?>