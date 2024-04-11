<?php
// Inclua o arquivo de conexão com o banco de dados
include('connection.php');

// Query para buscar todas as missões
$sql = "SELECT * FROM missions";
$result = $conn->query($sql);

// Verifique se há resultados
if ($result->num_rows > 0) {
    // Array para armazenar as missões
    $missions = array();

    // Exiba os resultados
    while($row = $result->fetch_assoc()) {
        // Adicione os dados da missão ao array
        $missions[] = $row;
    }

    // Retorna o array de missões como JSON
    echo json_encode($missions);
} else {
    echo "Nenhuma missão encontrada.";
}
?>
