<?php
 include "Crud.php"; 
  $crud= new Crud();
 $_POST = json_decode(file_get_contents('php://input'));
$sql = "INSERT INTO publication ( titre, lien, date)
VALUES ('$_POST->titre', '$_POST->lien', '$_POST->date')";

$data=$crud->execute($sql);
 
?>