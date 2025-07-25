<?php

$connectionInfo = array("UID" => getenv('DATABASE_USERNAME'), "pwd" => getenv('DATABASE_PASSWORD'), "Database" => "Portfolo-Website", "LoginTimeout" => 30, "Encrypt" => 1, "TrustServerCertificate" => 0);
$serverName = "tcp:portfolio-website-sql.database.windows.net,1433";
$conn = sqlsrv_connect($serverName, $connectionInfo); 
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$email = $_POST['email'];
$phone = isset($_POST['phone']) ? $_POST['phone'] : null;
$subject = isset($_POST['subject']) ? $_POST['subject'] : null;
$message = $_POST['message'];

// Prepare the SQL statement
$sql = "INSERT INTO contact_submissions (fname, lname, email, phone, subject, message)
        VALUES (?, ?, ?, ?, ?, ?)";

// Prepare the statement
$stmt = $conn->prepare($sql);

// Bind the parameters
$stmt->bind_param("ssssss", $fname, $lname, $email, $phone, $subject, $message);

// Execute the statement
if ($stmt->execute()) {
    echo "Your message has been sent successfully!";
} else {
    echo "There was an error submitting your form. Please try again later.";
}

// Close the statement and connection
$stmt->close();
$conn->close();
?>