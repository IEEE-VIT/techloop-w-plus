<?php
session_start();
if(isset($_POST['logout']))
{
echo"<script>
window.location = 'index.html';
</script>";
}
?>
<html>
<head>
  <title>Welcome</title>
  <link href="style.css" type="text/css" rel="stylesheet" />
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
</head>

<body>
    <div id="login_form">
    	<h2>You're logged in.</h2>
    	<form id="file-form" action="up.php" method="post" enctype="multipart/form-data">
        Upload a File:
        <input type="file" id="myfile" name="myfile">
        <input type="submit" id="submit" name="submit" value="Upload">
    </form>
    <!--<p id="status"></p>
    <script type="text/javascript" src="fileUpload.js"></script>-->
    <form method='post'>
			<input type='submit' name='logout' value='Logout'>
 		</form>
 	</div>
</body>
</html>
