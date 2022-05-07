<?php

    // handler
    $dbh = new PDO('mysql:host=localhost;dbname=learnjson','root','');

    // database
    $db = $dbh->prepare('SELECT * FROM person');
    $db->execute();
    $person = $db->fetchAll(PDO::FETCH_ASSOC);

    $data = json_encode($person);
    echo $data;


?>