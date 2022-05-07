<?php

$data = file_get_contents('firtst.json');

// as an object
$person = json_decode($data);
var_dump($person);
echo "<br>";
echo "<br>";

$personarray = json_decode($data,true);
var_dump($personarray);
echo "<br>";
echo "<br>";

echo $personarray[1]["age"];
echo "<br>";

// echo $personarray[1]["project"];
// echo "<br>";

echo $personarray[1]["Teacher"]["Second Person"];
echo "<br>";

?>