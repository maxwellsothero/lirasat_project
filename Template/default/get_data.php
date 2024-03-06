<?php
// Inclua a função ranking() ou forneça seu código aqui diretamente
include 'buscamotorista.php';
header("Access-Control-Allow-Origin: *");
// Chame a função ranking() para obter os dados
$data = ranking();

// Retorne os dados como JSON
header('Content-Type: application/json');
json_encode($data);
?>
