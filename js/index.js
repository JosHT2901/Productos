$( document ).ready(function() {
    var accion="Llenar tabla"
    $.ajax({
        url: 'include/ajax.php',
        data: {
            accion: accion,
        },
        type: 'POST',
        success: function(response) {
            var obj = JSON.parse(response)
            for(var i=0;i<obj.length;i++){
            $("tbody").append(
               ' <tr class="table-row row" id="'+obj[i].ID+'">'+
                        '<td class="table-cod">'+obj[i].ID+'</td>'+
                       ' <td>'+obj[i].descripcion+'</</td>'+
                       ' <td>'+obj[i].Cantidad+'</td>'+
                      '  <td>'+obj[i].Nombre+'</</td>'+
                        '<td class="flex-center" id="row'+obj[i].ID+'">'+
                           ' <a class="a-bt-table flex-center" onclick="EditarProducto('+obj[i].ID+');">'+
                              '  <svg class="a-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">'+
                                   ' <path fill="currentcolor" d="M224,76.68652,179.31348,32a15.9989,15.9989,0,0,0-22.627,0l-26.342,26.3418-.00122.00146-.00122.001L36.687,151.99951A15.89429,15.89429,0,0,0,32,163.31348V208a16.01833,16.01833,0,0,0,16,16H96a7.99877,7.99877,0,0,0,5.65674-2.34326L224,99.31348A16.01779,16.01779,0,0,0,224,76.68652ZM92.68652,208H48V163.31348l88-88L180.68652,120ZM192,108.68652,147.31372,64,168,43.31348,212.68652,88Z" />'+
                           '     </svg>'+
                           ' </a>'+
                           ' <a class="a-bt-table flex-center" onclick="BorrarProducto('+obj[i].ID+');">'+
                                '<svg class="a-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">'+
                                    '<path fill="currentcolor" d="M215.99609,48h-176a8,8,0,0,0,0,16h8V208a16.01833,16.01833,0,0,0,16,16h128a16.01833,16.01833,0,0,0,16-16V64h8a8,8,0,0,0,0-16Zm-24,160h-128V64h128ZM96,168V104a8,8,0,0,1,16,0v64a8,8,0,0,1-16,0Zm48,0V104a8,8,0,0,1,16,0v64a8,8,0,0,1-16,0ZM80,24a7.99977,7.99977,0,0,1,8-8h80a8,8,0,0,1,0,16H88A7.99977,7.99977,0,0,1,80,24Z" />'+
                                '</svg>'+
                            '</a>'+
                       ' </td>'+
                    '</tr>'
            )
        }
    }
});
})

function EditarProducto(id)
{
    $(".modal-container").css({
        "display": "flex"
    })
    $(".modal-div").css({
        "height": "300px"
    })
    $("#SpanModal").html("Editar producto")
    var accion1 = "RecuperarProducto"
    var des, cantidad, tipo
    $.ajax({
        url: 'include/ajax.php',
        data: {
            accion: accion1,
            id:id
        },
        type: 'POST',
        success: function (response) {
            var obj = JSON.parse(response)
            console.log(obj)
            des=obj.descripcion
            cantidad=obj.Cantidad
            tipo=obj.Nombre
            ntipo=obj.ID
            $("#descripcionProducto").attr("value",des)
            $("#CantidadProducto").attr("value",cantidad)
            $("#sum").html(tipo)
            $("#sum").attr("name",ntipo)
        }
    })
   
    $("#modalBodyContent").append('<form class="form">' +
    '<div class="input-div flex-center">' +
    '<input class="form-input-modal" placeholder="Descripción del producto" id="descripcionProducto">' +
    '</div>' +
    ' <div class="input-div flex-center">' +
    ' <div class="input-cantidad flex-center">' +
    '<input class="form-input-modal" placeholder="Cantidad" id="CantidadProducto" onkeydown="soloNumeros(event,this);">' +
    '  </div>' +
    '<div class="input-tipo">' +
    '<details class="flex-center" id="details">' +
    '<summary class="flex-start" id="sum">Tipo de producto</summary>' +
    '<ul class="contenedor" id="lista">' +
    ' </ul>' +
    ' </details>' +
    '</div>' +
    '</div>' +
    ' </form>')
    var accion = "RecuperarTipos"
    $.ajax({
        url: 'include/ajax.php',
        data: {
            accion: accion
        },
        type: 'POST',
        success: function (response) {
            var obj = JSON.parse(response)
            for(var i=0;i<obj.length;i++){
                $("#lista").append('<li onclick="Select(this);" id="'+obj[i].ID+'" Name="'+obj[i].Nombre+'">'+obj[i].Nombre+'</li>')
            }
        }
    })
    $("#btGuardarDiv").html(
        '<a class="bt-modal-guardar flex-center" onclick="EditProducto('+id+');">' +
        '<div>' +
        '<svg class="a-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">' +
        ' <path fill="currentcolor" d="M219.31445,79.99963,176.001,36.68811a15.88944,15.88944,0,0,0-11.31446-4.68848H48a16.01833,16.01833,0,0,0-16,16v160a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V91.31409A15.898,15.898,0,0,0,219.31445,79.99963ZM208,91.31409V207.99963H48v-160l40,.00025V96.0094a8.00039,8.00039,0,0,0,8,8h64a8,8,0,0,0,0-16H104V48.00012l60.68555.00049L208,91.31409v-.001M128.00586,120.0094a36,36,0,1,0,36,36A36.04061,36.04061,0,0,0,128.00586,120.0094Zm0,56a20,20,0,1,1,20-20A20.02229,20.02229,0,0,1,128.00586,176.0094Z" />' +
        ' </svg>' +
        ' </div>' +
        '<div class="a-span-div">' +
        '<span>Guardar</span>' +
        '  </div>' +
        '</a>'
    )
}

function BorrarProducto(id)
{
    $(".modal-container").css({
        "display": "flex"
    })
    $(".modal-div").css({
        "height": "200px"
    })
    $("#SpanModal").html("Borrar producto")
    $("#modalBodyContent").addClass("flex-center")
    $("#modalBodyContent").append("¿Estas seguro de borrar este producto?")
    $("#btGuardarDiv").html(
        '<a class="bt-modal-guardar flex-center" onclick="EliminarProducto('+id+');">' +
        '<div>' +
        '<svg class="a-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">'+
                                    '<path fill="currentcolor" d="M215.99609,48h-176a8,8,0,0,0,0,16h8V208a16.01833,16.01833,0,0,0,16,16h128a16.01833,16.01833,0,0,0,16-16V64h8a8,8,0,0,0,0-16Zm-24,160h-128V64h128ZM96,168V104a8,8,0,0,1,16,0v64a8,8,0,0,1-16,0Zm48,0V104a8,8,0,0,1,16,0v64a8,8,0,0,1-16,0ZM80,24a7.99977,7.99977,0,0,1,8-8h80a8,8,0,0,1,0,16H88A7.99977,7.99977,0,0,1,80,24Z" />'+
                                '</svg>'+
        ' </div>' +
        '<div class="a-span-div">' +
        '<span>Borrar</span>' +
        '  </div>' +
        '</a>'
    )
}




$("#btNuevoProducto").click(function (e) {
    $(".modal-container").css({
        "display": "flex"
    })
    $(".modal-div").css({
        "height": "300px"
    })
    $("#SpanModal").html("Nuevo producto")
    var accion = "RecuperarTipos"
    $("#modalBodyContent").append('<form class="form">' +
    '<div class="input-div flex-center">' +
    '<input class="form-input-modal" placeholder="Descripción del producto" id="descripcionProducto">' +
    '</div>' +
    ' <div class="input-div flex-center">' +
    ' <div class="input-cantidad flex-center">' +
    '<input class="form-input-modal" placeholder="Cantidad" id="CantidadProducto" onkeydown="soloNumeros(event,this);">' +
    '  </div>' +
    '<div class="input-tipo">' +
    '<details class="flex-center" id="details">' +
    '<summary class="flex-start" id="sum">Tipo de producto</summary>' +
    '<ul class="contenedor" id="lista">' +
    ' </ul>' +
    ' </details>' +
    '</div>' +
    '</div>' +
    ' </form>')
    $.ajax({
        url: 'include/ajax.php',
        data: {
            accion: accion
        },
        type: 'POST',
        success: function (response) {
            var obj = JSON.parse(response)
            for(var i=0;i<obj.length;i++){
                $("#lista").append('<li onclick="Select(this);" id="'+obj[i].ID+'" Name="'+obj[i].Nombre+'">'+obj[i].Nombre+'</li>')
            }
        }
    })
    $("#btGuardarDiv").html(
        '<a class="bt-modal-guardar flex-center" onclick="GuardarProducto();">' +
        '<div>' +
        '<svg class="a-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">' +
        ' <path fill="currentcolor" d="M219.31445,79.99963,176.001,36.68811a15.88944,15.88944,0,0,0-11.31446-4.68848H48a16.01833,16.01833,0,0,0-16,16v160a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V91.31409A15.898,15.898,0,0,0,219.31445,79.99963ZM208,91.31409V207.99963H48v-160l40,.00025V96.0094a8.00039,8.00039,0,0,0,8,8h64a8,8,0,0,0,0-16H104V48.00012l60.68555.00049L208,91.31409v-.001M128.00586,120.0094a36,36,0,1,0,36,36A36.04061,36.04061,0,0,0,128.00586,120.0094Zm0,56a20,20,0,1,1,20-20A20.02229,20.02229,0,0,1,128.00586,176.0094Z" />' +
        ' </svg>' +
        ' </div>' +
        '<div class="a-span-div">' +
        '<span>Guardar</span>' +
        '  </div>' +
        '</a>'
    )
    })

    function Select(f)
    {
       $("#sum").html($(f).attr('Name'))
        $("#details").removeAttr('open')
        $("#sum").attr("name",$(f).attr('id'))
    }




   


$("#btNuevoTipo").click(function (e) {
    $(".modal-container").css({
        "display": "flex"
    })
    $(".modal-div").css({
        "height": "250px"
    })
    $("#SpanModal").html("Nuevo tipo de producto")
    $("#modalBodyContent").html('<form class="form">' +
        '<div class="input-div flex-center">' +
        '<input class="form-input-modal" placeholder="Descripción" id="DescripcionTipo">' +
        '</div>' +
        ' </form>')
    $("#btGuardarDiv").html(
        '<a class="bt-modal-guardar flex-center" onclick="GuardarTipo();">' +
        '<div>' +
        '<svg class="a-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">' +
        ' <path fill="currentcolor" d="M219.31445,79.99963,176.001,36.68811a15.88944,15.88944,0,0,0-11.31446-4.68848H48a16.01833,16.01833,0,0,0-16,16v160a16.01833,16.01833,0,0,0,16,16H208a16.01833,16.01833,0,0,0,16-16V91.31409A15.898,15.898,0,0,0,219.31445,79.99963ZM208,91.31409V207.99963H48v-160l40,.00025V96.0094a8.00039,8.00039,0,0,0,8,8h64a8,8,0,0,0,0-16H104V48.00012l60.68555.00049L208,91.31409v-.001M128.00586,120.0094a36,36,0,1,0,36,36A36.04061,36.04061,0,0,0,128.00586,120.0094Zm0,56a20,20,0,1,1,20-20A20.02229,20.02229,0,0,1,128.00586,176.0094Z" />' +
        ' </svg>' +
        ' </div>' +
        '<div class="a-span-div">' +
        '<span>Guardar</span>' +
        '  </div>' +
        '</a>'
    )
})

function GuardarTipo() {
    if ($("#DescripcionTipo").val().length == 0) {
        $("#Aviso").html("Ingresa la descripción")
    } else {
        $("#Aviso").html("")
        var accion = "IngresarTipo";
        var tipo = $("#DescripcionTipo").val()
        $.ajax({
            url: 'include/ajax.php',
            data: {
                accion: accion,
                tipo: tipo
            },
            type: 'POST',
            success: function (response) {
                $("#Aviso").html(response)
                if (response != 'Ya está registrado') {
                    setTimeout(function () {
                        $(".modal-container").css({
                            "display": "none"
                        })
                        $("#SpanModal").html("")
                        $("#Aviso").html("")
                        $(".modal-body").html("")
                    }, 400);
                }
            }
        })
    }
}

function GuardarProducto() {

    if($("#descripcionProducto").val().length == 0)
    {
        $("#Aviso").html("Ingresa la descripción")
    }
    else if($("#CantidadProducto").val().length==0)
    {
        $("#Aviso").html("Ingresa la cantidad")
    }
    else if($("#sum").text()=='Tipo de producto')
    {
        $("#Aviso").html("Selecciona un tipo de producto")
    }
    else
    {
        var accion="Registrar producto"
        var cantidad=$("#CantidadProducto").val()
        var descripcion=$("#descripcionProducto").val()
        var tipo=$("#sum").attr("name")
        $.ajax({
            url: 'include/ajax.php',
            data: {
                accion: accion,
                cantidad:cantidad,
                descripcion:descripcion,
                tipo:tipo,
            },
            type: 'POST',
            success: function(response) {
                $("#Aviso").html(response)
                if (response == 'Registro Guardado') {
                    setTimeout(function () {
                        $(".modal-container").css({
                            "display": "none"
                        })
                        $("#SpanModal").html("")
                        $("#Aviso").html("")
                        $("#modalBodyContent").html("")
                    }, 400);
                }
            }
    })
    
}}
    

function EditProducto(id)
{
    
    if($("#descripcionProducto").val().length == 0)
    {
        $("#Aviso").html("Ingresa la descripción")
    }
    else if($("#CantidadProducto").val().length==0)
    {
        $("#Aviso").html("Ingresa la cantidad")
    }
    else if($("#sum").text()=='Tipo de producto')
    {
        $("#Aviso").html("Selecciona un tipo de producto")
    }
    else
    {
        var accion="Editar producto"
        var cantidad=$("#CantidadProducto").val()
        var descripcion=$("#descripcionProducto").val()
        var tipo=$("#sum").attr("name")
        
        $.ajax({
            url: 'include/ajax.php',
            data: {
                accion: accion,
                cantidad:cantidad,
                descripcion:descripcion,
                tipo:tipo,
                id:id
            },
            type: 'POST',
            success: function(response) {
                $("#Aviso").html(response)
                console.log(response)
                if (response == 'Producto Editado') {
                    setTimeout(function () {
                        $(".modal-container").css({
                            "display": "none"
                        })
                        $("#SpanModal").html("")
                        $("#Aviso").html("")
                        $("#modalBodyContent").html("")
                    }, 400);
                }
            }
        })
    }
}

function EliminarProducto(id)
{
    var accion="Eliminar Producto"
    $.ajax({
        url: 'include/ajax.php',
        data: {
            accion: accion,
            id:id
        },
        type: 'POST',
        success: function(response) {
            $("#Aviso").html(response)
            console.log(response)
            if (response == 'Producto Eliminado') {
                setTimeout(function () {
                    $(".modal-container").css({
                        "display": "none"
                    })
                    $("#SpanModal").html("")
                    $("#Aviso").html("")
                    $("#modalBodyContent").html("")
                }, 400);
            }
        }
    })
}
function soloNumeros(event, input) {
    if (event.shiftKey)
        event.preventDefault();
    if (event.code == 'BracketLeft' || isNaN($(input).val())) {
        $(input).val('')
        $("#Aviso").html("Ingresa solo números")
    }
    if (event.keyCode != 46 && event.keyCode != 8 && event.keyCode != 37 && event.keyCode != 39)
        if ($(input).val().length >= 5)
            event.preventDefault();
    if (event.keyCode < 48 || event.keyCode > 57)
        if (event.keyCode < 96 || event.keyCode > 105)

            if (event.keyCode != 46 && event.keyCode != 8 && event.keyCode != 37 && event.keyCode != 39)
                event.preventDefault();


}