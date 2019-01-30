<?php
include "Crud.php";
$crud= new Crud();

$id=$_GET['id'];


$query="SELECT id,titre,datee,urll FROM publication where id='$id'";
        $data=$crud->getData($query);

         echo json_encode($data);

?>