<?php

$movies_string = file_get_contents('dischi.json'); // prende il file ma è string

$movies_info = json_decode($movies_string, true); // trasforma la stringa in un array di array

$data = ['results' => $movies_info ];

$response = json_encode($data); // trasformo di nuovo l'array in json string

header("Content-Type: application/json"); // dico al browser che sto inviando un file json

echo $response; // invio la risposta
