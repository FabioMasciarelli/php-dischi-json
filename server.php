<?php 

$disks_string = file_get_contents('dischi.json'); // prende il file ma è string

$disks_info = json_decode($disks_string, true); // trasforma la stringa in un array di array

if(isset($_POST['index'])) {

    $like= $_POST['index'];

    $disks_info;

}

$data = ['results' => $disks_info ];

$response = json_encode($data); // trasformo di nuovo l'array in json string

header("Content-Type: application/json"); // dico al browser che sto inviando un file json

echo $response; // invio la risposta
