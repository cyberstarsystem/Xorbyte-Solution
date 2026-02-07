<?php

$conn = new mysqli("localhost","root","","learner_db");

if($conn->connect_error){
  die("Database Error");
}

if($_SERVER["REQUEST_METHOD"] == "POST"){

  $firstName = htmlspecialchars($_POST['firstName'] ?? '');
  $lastName  = htmlspecialchars($_POST['lastName'] ?? '');
  $email     = htmlspecialchars($_POST['email'] ?? '');
  $phone     = htmlspecialchars($_POST['phone'] ?? '');
  $course    = htmlspecialchars($_POST['course'] ?? '');
  $education = htmlspecialchars($_POST['education'] ?? '');
  $experience= htmlspecialchars($_POST['experience'] ?? '');
  $motivation= htmlspecialchars($_POST['motivation'] ?? '');
  $schedule  = htmlspecialchars($_POST['schedule'] ?? '');

  $sql = "INSERT INTO enrollments 
  (first_name,last_name,email,phone,course,education,experience,motivation,schedule)
  VALUES (?,?,?,?,?,?,?,?,?)";

  $stmt = $conn->prepare($sql);
  $stmt->bind_param("sssssssss",
    $firstName,$lastName,$email,$phone,$course,
    $education,$experience,$motivation,$schedule
  );

  if($stmt->execute()){
    echo "OK";   // ⭐ same as contact form
  } else {
    echo "Database Error";
  }
}
?>
