<?php
/*
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

echo "this file ";
include "Crud.php"; 
$crud= new Crud();
 


//read received JSON (you can receive by $_POST if you want, just change this line)
     //   $data = file_get_contents("php://input");
//parse JSON to PHP object
      //  $data = json_decode($data); 
        echo "this file11 ";
     $_POST = json_decode(file_get_contents('php://input'));
   
var_dump(  $_POST);
echo "this file22 ";

//return your service response
        $jsonResponse = "{ \"response\": true, \"text\": \"Hey, your name is: " .$_POST->name . "\"}";        
        echo $jsonResponse;
        exit;



*/


        //third version
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

echo "this file ";
/*
var_dump($_FILES);
var_dump($_POST);
foreach($_POST as $key=>$value)
{
  var_dump($key);
}

 //$_POST = json_decode(file_get_contents('php://input'));


*/






/*header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
include "Crud.php"; 
$crud= new Crud();
$_POST = json_decode(file_get_contents(+));
echo "helloooooooo";
$target_dir = "../images";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
// Check if image file is a actual image or fake image

    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo "File is an image - " . $check["mime"] . ".";
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }

// Check if file already exists
if (file_exists($target_file)) {
    echo "Sorry, file already exists.";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}*/
?>






