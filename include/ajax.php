<?php
include "Conexion.php";
if($_POST['accion']=='IngresarTipo')
    {
        $nombre=$_POST['tipo'];
        if(!empty($nombre))
       {
        $sql = "Select * FROM tipo where Nombre='$nombre'";
        $query=$link->query($sql);
        
            if($query->num_rows>0){
                echo "Ya está registrado";
            }
            else{
                    $registro="Insert into tipo (Nombre) values ('$nombre')" ;
                    $query_registro=$link->query($registro);
                    if($query_registro)
                    {
                        echo "Registro Guardado";
                    }
                    else
                    {
                        echo "Error. Intenta más tarde";
                    }
    }
}
    else
    {
        echo "Ingresa la descripción";
    }
}

if($_POST['accion']=='RecuperarTipos')
    {
        $buscar="Select * from tipo";
        $sql=$link->query($buscar);
        $rowdata=array();
        $i=0;
            while($data=$sql->fetch_array()){
                $rowdata[$i]=$data;
                $i++;
             }
             echo json_encode($rowdata);
            }

    if($_POST['accion']=='Registrar producto')
    {
        $cantidad=$_POST['cantidad'];
        $descripcion=$_POST['descripcion'];
        $tipo=$_POST['tipo'];
        $registro="Insert into productos (Descripcion, Cantidad, Tipo) values ('$descripcion','$cantidad','$tipo')" ;
        $query_registro=$link->query($registro);
        if($query_registro)
                    {
                        echo "Registro Guardado";
                    }
                    else
                    {
                        echo "Error. Intenta más tarde";
                    }
        
    }

    if($_POST['accion']=='Llenar tabla')
    {
        $buscar="SELECT productos.ID,descripcion, Cantidad, tipo.Nombre FROM productos JOIN tipo WHERE productos.Tipo=tipo.ID";
        $sql=$link->query($buscar);
        $rowdata=array();
        $i=0;
            while($data=$sql->fetch_array()){
                $rowdata[$i]=$data;
                $i++;
             }
             echo json_encode($rowdata);
        
    }

    if($_POST['accion']=='RecuperarProducto')
    {
        $id=$_POST['id'];
    $buscar="SELECT productos.ID,descripcion, Cantidad, tipo.Nombre,tipo.ID FROM  productos JOIN tipo WHERE productos.ID=$id AND productos.ID=tipo.ID";
    $sql=$link->query($buscar);
    if($sql->num_rows>0 ){
        $data=$sql->fetch_array();
}
echo json_encode($data);
    }

    if($_POST['accion']=='Editar producto')
    {
        $cantidad=$_POST['cantidad'];
        $descripcion=$_POST['descripcion'];
        $tipo=$_POST['tipo'];
        $id=$_POST['id'];
        $registro="Update productos set Descripcion='$descripcion', Cantidad=$cantidad,Tipo=$tipo where ID=$id" ;
        $query_registro=$link->query($registro);
        if($query_registro)
                    {
                        echo "Producto Editado";
                    }
                    else
                    {
                        echo mysqli_error($link);
                    }
        
    }

    if($_POST['accion']=='Eliminar Producto')
    {
        $id=$_POST['id'];
        $registro="Delete from productos where ID=$id" ;
        $query_registro=$link->query($registro);
        if($query_registro)
        {
            echo "Producto Eliminado";
        }
        else
        {
            echo mysqli_error($link);
        }
    }