<?php
    include "./databaseconn.php";
    
    $result = array();
    $action = '';

    if(isset($_GET['action'])){
        $action = $_GET['action'];
    }

    //create new user POST methods
    if($action == 'create'){

        //id Auto increment on database
        $name = $_POST['name'];
        $surname = $_POST['surname'];
        $phone = $_POST['phone'];
        $email = $_POST['email'];  
        $temp = file_get_contents($_FILES['image']["tmp_name"]);
        //encode the file in to base64 and store in a temporary variable, but its not saving on the database as base64 string*
        $image = base64_encode($temp);
       
        $sql = $conn->query("INSERT INTO visitors (name,surname,phone,email,image) VALUES ('$name','$surname','$phone','$email','$image') ");
        
        if($sql){
            // created
            http_response_code(201);
        } else{
            // bad request
            http_response_code(400);
        }
        
        $conn->close();
    }
    
?>