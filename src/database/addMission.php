<?php
// Inclua o arquivo de conexão com o banco de dados
include('connection.php');

// Receba os dados do formulário
$ord = $_POST['ord'];
$periodo_inicio = $_POST['periodo_inicio'];
$periodo_fim = $_POST['periodo_fim'];
$motivacao = $_POST['motivacao'];
$participantes = $_POST['participantes'];
$funcao = $_POST['funcao'];

// Query para inserir a nova missão no banco de dados
$sql = "INSERT INTO missions (ord, periodo_inicio, periodo_fim, motivacao, participantes, funcao) VALUES ('$ord', '$periodo_inicio', '$periodo_fim', '$motivacao', '$participantes', '$funcao')";

if ($conn->query($sql) === TRUE) {
    echo "Nova missão adicionada com sucesso.";
} else {
    echo "Erro ao adicionar missão: " . $conn->error;
}

// Feche a conexão com o banco de dados
$conn->close();
?>
