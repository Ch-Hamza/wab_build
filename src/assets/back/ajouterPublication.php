<?php
 include "Crud.php"; 
  $crud= new Crud();
 $_POST = json_decode(file_get_contents('php://input'));
$sql = "INSERT INTO publication ( titre, urll, datee)
VALUES ('$_POST->titre', '$_POST->urll', '$_POST->datee')";

$data=$crud->execute($sql);
 
?>