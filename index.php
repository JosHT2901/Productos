<html>
<?php
include "include/Conexion.php";
?>
<head>
    <title>Productos</title>
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/flex.css">
    <script src="js/jquery-3.5.1.min.js"></script>
</head>
<header>
    <?php include "include/modal.php"?>
</header>
<body>
    <div class="container-body">
        <div class="container-titulo flex-center"><span>Productos</span></div>

        <div class="container-menu flex-end">
          
            <div class="container-menu-div flex-end">
                <a class="bt-menu flex-center" id="btNuevoTipo">
                    <div>
                        <svg class="a-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                            <path fill="currentcolor" d="M224,128a7.99977,7.99977,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A7.99977,7.99977,0,0,1,224,128Z" />
                        </svg>
                    </div>
                    <div class="a-span-div">
                        <span>Nuevo tipo</span>
                    </div>
                </a>
                <a class="bt-menu flex-center" id="btNuevoProducto">
                    <div>
                        <svg class="a-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                            <path fill="currentcolor" d="M224,128a7.99977,7.99977,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16h80V40a8,8,0,0,1,16,0v80h80A7.99977,7.99977,0,0,1,224,128Z" />
                        </svg>
                    </div>
                    <div class="a-span-div">
                        <span>Nuevo producto</span>
                    </div>
                </a>
            </div>

        </div>

        <div class="container-table">
            <table class="table">
                <thead>
                    <tr>
                        <th class="table-th table-cod">Código</th>
                        <th class="table-th">Descripción</th>
                        <th class="table-th">Cantidad disponible</th>
                        <th class="table-th">Tipo de producto</th>
                        <th class="table-th">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                
    
                </tbody>
            </table>
        </div>

    </div>
    <script src="js/index.js"></script>
</body>

</html>