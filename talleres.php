<!DOCTYPE html>
<html lang="en">
    <head>
        <meta no-warn>
        <meta charset="UTF-8" >
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    </head>
    <style>
        .warning {
  display: none;
}
        body{
            margin: 10% 0;
            background-color: #C8E4E8;
        }
        .container{
            padding: 0;
        }
        .table {
            background-color: white;
            border-radius: .5rem;
            --bs-table-striped-bg: rgba(0, 0, 0, 0);
        }
        th {
            font-size: 1.1rem;
            padding: 1rem 1.5rem !important;
        }
        .table>:not(caption)>*>* {
            padding: .5rem 1.5rem;
        }
        tbody, td, tfoot, th, thead, tr{
            border-style: none;
        }
        table th:first-child {
            border-radius: .5rem 0 0 0;
        }
        table th:last-child {
            border-radius: 0 .5rem 0 0;
        }
        table tr:last-child td:first-child {
            border-radius: 0 0 0 .5rem;
        }
        table tr:last-child td:last-child {
            border-radius: 0 0 .5rem 0;
        }
        .table>tbody {
            vertical-align:middle;
        }
        .btn-danger {
            color: #fff;
            background-color: #c47162;
            border-color: #c47162;;
        }
        .btn-success {
            color: #fff;
            background-color: #598177;;
            border-color: #598177;
        }
        .btn-primary {
            color: #fff;
            background-color: #4179B5;
            border-color: #4179B5;
        }
        .table-striped>tbody>tr:nth-of-type(odd) {
            background-color: whitesmoke;
        }
    </style>
</html>

<?php
//$query = "";
//s$rol = substr($rolmamalon, 0, -1);
$query = "SELECT * FROM Alumnos";

$mysqli = new mysqli('localhost', 'root', '', 'InterfazFuncional');
if ($result = $mysqli->query($query)) {
    print("<div class='container'>");
    print("<table class='table table-striped '>");
    print("<tr>");
    print("<th>ID del alumno</th>");
    print("<th>Nombre del alumno</th>");
    print("<th>Eliminar</th>");
    print("<th>Actualizar</th>");
    print("</tr>");
    while ($row = $result->fetch_assoc()) {
        $id = $row['id'];
        $nombreAlumno = $row['nombreAlumno'];
        //$idMaestro = $row['idMaestro'];
        print("<tr>");
        print("<td>$id</td>");
        print("<td>$nombreAlumno</td>");
        print("<td>
            <a class='btn btn-danger' href='deleteAlumnos.php?id=$id'>Eliminar</a>
        </td>");
        print("<td>
            <a class='btn btn-success' href='updateAlumnos.php?id=$id'>Actualizar</a>
        </td>");
        print("</tr>");
    }
    print("</table>");
    print("<a class='btn btn-primary' href='agregarAlumno.php'>Agregar alumno</a>");
    print("<div>");
    print("<a href='menuAdmin.php' class='btn btn-secondary mt-3'>Ir al menu</a>");
}