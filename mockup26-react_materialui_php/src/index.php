<?php 
declare(strict_types =1);
if(isset($_POST["submit"]))
{
    $server = 'localhost';
    $user = 'root';
    $password = 'password';
    try {
        $conn = new PDO("mysql:localhost=$server,dbname=contact",$user,$password);
        $conn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
        
        $sql = "INSERT INTO person (email,message,name) values(' ".$_POST["email"]."','".$_POST["name"]."','".$_POST["message"] ."')";

        if($conn->query($sql))
        {
            echo "Added";
        }
        $conn = null;
    } catch (Exception $e) {
       echo $e->getMessage();
    }
    
}

?>