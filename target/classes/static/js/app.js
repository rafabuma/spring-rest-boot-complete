
function validate(){
	alert("inicia la validacion ..");
	var name=document.getElementById('name');
	if(name== null){
		alert("Please enter a valid name");
		alert("if");
		return false;
	}else{
		alert("else");
		return true;
	}
}


function doAjaxPost() {
	
	
	var idCliente= document.getElementById("txtIdCliente").value;//$("#txtIdCliente").val();
	alert('idCliente: '+idCliente);
    var nombre = document.getElementById("txtNobre").value;//$("#txtNobre").val();
    var apellido= document.getElementById("txtApellido").value;//$("#txtApellido").val();
    var email = document.getElementById("txtEmail").value;//$("#txtEmail").val();
    var direccion= document.getElementById("txtDireccion").value;//$("#txtDireccion").val();
    
   
   // var data = JSON.stringify({"idCliente":idCliente,"nombre":nombre,"apellido":apellido,"email":email,"direccion":direccion});
    var data = {"idCliente":idCliente,"nombre":nombre,"apellido":apellido,"email":email,"direccion":direccion};

	 
			 $.ajax({
		            type : "POST",
		            url : "/registrarCliente",
		            contentType: "application/json",
		            data : data,
		            success: function(data){
		            	
		            	
		            }
			 
			 });
}




