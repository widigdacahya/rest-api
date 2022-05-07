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

echo "<br/>";
echo "<br/>";
echo "<br/>";

$people =  [
    [
        "name" => "Person1",
        "charactersitic" => "Black",
        "email" => "doeperson1@gmail.com"
    ],
    [
        "name" => "Person2",
        "charactersitic" => "White",
        "email" => "doeperson2@gmail.com"
    ]
];

$datapeople = json_encode($people);
echo $datapeople;

?>