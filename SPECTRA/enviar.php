<?php
    $destino="contacto@oax.com";
    $correo=$_POST["email"];
    $nombre=$_POST["nombre"];
    $telefono=$_POST["tel"];
    $mensaje=$_POST["textarea"];
    $contenido="Correo: " . $correo . "\nNombre: " . $nombre . "\nTelefono: " . $telefono . "\nMensaje: " . $mensaje;
    mail($destino,"Contacto",$contenido);
    header("Location:gracias.html");
?>