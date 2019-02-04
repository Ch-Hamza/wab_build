<?php
    include "Crud.php";
    $crud= new Crud();
     $i=$_GET['i'];
        $query2="SELECT COUNT(id) FROM publication";
        $data2=$crud->getData($query2);
        $n= $data2[0]['COUNT(id)'];
        if($n<8*$i){
        $d=0;
        $f=$n-($i-1)*8;}
        else{
        $f=8;
         $d=$n-8*$i;}

        $query="SELECT id,date,titre,lien FROM publication LIMIT $d,$f";
        $data=$crud->getData($query);
         echo json_encode($data);
    

?>