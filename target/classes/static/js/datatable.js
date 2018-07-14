var editor;
$(document).ready( function () {
	
//    editor = new $.fn.dataTable.Editor( {
//        "ajax": "../views/addCliente.jsp",
//        "table": "#employeesTable",
//        "fields": [ {
//                "label": "First name:",
//                "name": "nombre"
//            }, {
//                "label": "Last name:",
//                "name": "apellido"
//            }, {
//                "label": "email:",
//                "name": "email"
//            }, {
//                "label": "direccion:",
//                "name": "direccion"
//            }
//        ]
//    } );
	
	 var table = $('#employeesTable').DataTable({
			"sAjaxSource": "/allClientes",
			"sAjaxDataProp": "",
			"order": [[ 0, "asc" ]],
			"aoColumns": [
			    { "mData": "idCliente"},
		      { "mData": "nombre" },
				  { "mData": "apellido" },
				  { "mData": "email" },
				  { "mData": "direccion" },
			      {
		                data: null,
		                className: "center",
		                defaultContent: '<a href="" class="editor_edit">Edit</a> '
		          },
		          {
		                data: null,
		                className: "center",
		                defaultContent: '<a href="" class="editor_remove">Delete</a>'
		          }
			]
	 });
	 
	 //$('#agregarForm').submit(function(event) {
	 
	  $("#addRow").click(function(){

		
		  var idCliente= $("#txtIdCliente").val();
          var nombre = $("#txtNobre").val();
          var apellido= $("#txtApellido").val();
          

          var email = $("#txtEmail").val();
          var direccion= $("#txtDireccion").val();
          
         
          var data = JSON.stringify({"idCliente":idCliente,"nombre":nombre,"apellido":apellido,"email":email,"direccion":direccion});
	
		 
				 $.ajax({
			            type : "POST",
			            url : "/registrarCliente",
			            contentType: "application/json",
			            data : data,
			            success: function(data){
			            	
			            
			            }
				 
				 });
	 });
	  
	  $("#btnbuscar").click(function(){


		    var nombre = $("#nameBuscar").val();
	          alert('nameBuscar: '+nombre);

          
         
          var data = JSON.stringify({"nombre":nombre});

				 $.ajax({
			            type : "POST",
			            url : "/buscarCliente",
			            contentType: "application/json",
			            data : data,
			            success: function(data){
			            	
//			            	$('#employeesTable').show();
			            }
				 
				 });
	 });	  
	 
	    // New record
	    $('a.editor_create').on('click', function (e) {
	        e.preventDefault();
	 
	        editor.create( {
	            title: 'Create new record',
	            buttons: 'Add'
	        } );
	    } );
	    
	    
	    
	    
	 
	    // Edit record
	    $('#employeesTable').on('click', 'a.editor_edit', function (e) {
	        e.preventDefault();
	 
	        editor.edit( $(this).closest('tr'), {
	            title: 'Edit record',
	            buttons: 'Update'
	        } );
	    } );
	 
	    // Delete a record
	    $('#employeesTable').on('click', 'a.editor_remove', function (e) {
	        e.preventDefault();
	 
	        editor.remove( $(this).closest('tr'), {
	            title: 'Delete record',
	            message: 'Are you sure you wish to remove this record?',
	            buttons: 'Delete'
	        } );
	    } );
});