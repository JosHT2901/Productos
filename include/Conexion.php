<?php
$host="localhost";
$user="root";
$password="";
$db="productos";

$link=new mysqli($host,$user,$password,$db);

if($link->connect_error)
{
	echo $link->connect_error;
}
?>