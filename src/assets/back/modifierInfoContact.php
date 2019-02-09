 <?php
 include "Crud.php"; 
  $crud= new Crud();
 $_POST = json_decode(file_get_contents('php://input'));
$sql = "UPDATE  infocontact SET  adresse ='$_POST->adresse',  mail ='$_POST->mail', telephone ='$_POST->telephone' , fax ='$_POST->fax'  WHERE id = '$_POST->id' ";
$data=$crud->execute($sql);
?>