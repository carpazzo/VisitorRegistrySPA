<?php

    include "./databaseconn.php";
    
    $result = array('error'=>false);
    $action = '';

    if(isset($_GET['action'])){
        $action = $_GET['action'];
    }

    //Delete User
    if($action == 'delete'){
        
        $id = $_POST['id'];
        
        $sql = $conn->query("DELETE FROM visitors WHERE id='$id'");
        
        if($sql){
            //sucessfuly deleted
            http_response_code(202);   

        }else{
            //Not Modified
            http_response_code(304);
        }
    }
?>