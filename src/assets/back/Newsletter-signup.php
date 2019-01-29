
<?php 
$user = "root";  
$password = "";  
$host = "localhost";  
$dbase = "db";  
$table = "newsletter_form";  
 

$email= $_POST['email']; 
  
  
// Connection to DBase  
$dbc= mysqli_connect($host,$user,$password, $dbase)  
or die("Unable to select database"); 
 
 
$query= "INSERT INTO $table  ". "VALUES ('$email')"; 
 
mysqli_query ($dbc, $query) 
or die ("Error querying database"); 
 
echo 'You have been successfully added.' . '<br>'; 
 
mysqli_close($dbc); 
 
?> 
 