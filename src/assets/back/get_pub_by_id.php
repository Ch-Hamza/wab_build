<?php
include "Crud.php";
$crud= new Crud();

$id=$_GET['id'];


$query="SELECT id,date,titre,lien FROM publication where id='$id'";
        $data=$crud->getData($query);

         echo json_encode($data);

?>