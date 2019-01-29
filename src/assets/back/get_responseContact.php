
<?php 
require_once("DbConfig.php");
if((isset($_POST['firstName'])&& $_POST['firstName'] !='') && (isset($_POST['email'])&& $_POST['email'] !=''))
{
 require_once("contact_mail.php");
$firstName = $conn->real_escape_string($_POST['firstName']);
$lastName = $conn->real_escape_string($_POST['lastName']);
$phone = $conn->real_escape_string($_POST['phone']);
$email = $conn->real_escape_string($_POST['email']);
$subject = $conn->real_escape_string($_POST['subject']);
$message = $conn->real_escape_string($_POST['message']);
 
$sql="INSERT INTO contact_form (nom, prenom, telephone, email , sujet , messagee) VALUES ('".$firstName."','".$lastName."', '".$phone."', '".$email.", '".$subject.", '".$message."')";
 
 
if(!$result = $conn->query($sql)){
die('There was an error running the query [' . $conn->error . ']');
}
else
{
echo "Thank you! We will contact you soon";
}
}
else
{
echo "Please fill Name and Email";
}
?>