<?php
if(isset($_POST['logout']))
{
echo"<script>
window.location = 'index.html';
</script>";
}
$target_dir = "uploads/";
$target_file = $target_dir . basename($_FILES["myfile"]["name"]);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["myfile"]["tmp_name"]);
    if($check !== false) {
        $uploadOk = 1;
    } else {
        echo "File is not an image.";
        $uploadOk = 0;
    }
}
if ($_FILES["myfile"]["size"] > 500000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" ) {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
} else {
    if (move_uploaded_file($_FILES["myfile"]["tmp_name"], $target_file)) {
        echo "The file ". basename( $_FILES["myfile"]["name"]). " `has been uploaded.
		<html>
<head>
  <title>Welcome</title>
  <link href=\"style.css\" type=\"text/css\" rel=\"stylesheet\">
  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js\"></script>
</head>

<body>
    <div id=\"login_form\">
    	<h2>Here's your file.</h2>
    	<img style=\"width:inherit;\" src=\"uploads/". basename( $_FILES["myfile"]["name"])."\">
    <form method='post'>
			<input type='submit' name='logout' value='Logout'>
 		</form>
 	</div>
</body>
</html>
";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>
