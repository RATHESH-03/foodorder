<?php
include_once("db_connect.php");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
    $request = json_decode($postdata);
    
      $foodName = trim($request->foodName);
      $foodPrice = trim($request->foodPrice);

	$sql = "INSERT INTO cart1(
        foodName,
        foodPrice
	) VALUES (
	  '$foodName',
        '$foodPrice')";

	if ($mysqli->query($sql)) {
            $data=array('message'=>'success');
            echo json_encode($data);
        }
        else{
            $data=array('message'=>'failed');
            echo json_encode($data);
        }

}

?>