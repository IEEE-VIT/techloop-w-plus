<?php
session_start();
if(isset($_POST['do_login']))
{
	$host="localhost";
 	$username="montfort_user";
 	$password="honeybee68";
 	$databasename="montfort_db";
 	$connect=mysql_connect($host,$username,$password);
 	$db=mysql_select_db($databasename);
	$email=$_POST['email'];
 	$pass=$_POST['password'];
 	$select_data=mysql_query("select * from users where username='$email' and password='$pass'");
	if($row=mysql_fetch_array($select_data))
 	{
  		$_SESSION['email']=$row['email'];
  		echo "success";
 	}
 	else
 	{
  		echo "fail";
 	}
 	exit();
}
?>