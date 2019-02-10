<?php
 include "Crud.php"; 
  $crud= new Crud();
 $_POST = json_decode(file_get_contents('php://input'));
$sql = "INSERT INTO actualite ( titre, contenu, datee)
VALUES ('$_POST->titre', '$_POST->contenu', '$_POST->datee')";
if($_POST->titre){
$data=$crud->execute($sql);
}
?>