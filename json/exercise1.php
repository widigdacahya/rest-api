<!-- change array to json -->
<?php

$person = [
    "name" => "Agniasari Nareswari",
    "nrp" => "9903421304",
    "email" => "nareswariagnia@gmail.com"
];

var_dump($person);
echo "<br/>";

$data = json_encode($person);
echo $data;
echo "<br/>";
var_dump($data);


?>