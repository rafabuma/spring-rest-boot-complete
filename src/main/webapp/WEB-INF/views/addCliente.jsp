<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%-- <%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1"%> --%>
<!DOCTYPE html >
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
	
	 <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<!-- 	 <script src="webjars/jquery/1.9.1/jquery.min.js"></script> -->
     <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
	 <script type="text/javascript" src="/resources/js/app.js"></script>
	 <script src="/resources/js/datatable.js"></script>

	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
	<link rel="stylesheet" href="https://cdn.datatables.net/1.10.12/css/jquery.dataTables.min.css">
	<script src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
<title>Insert title here</title>


</head>
<body>
Agrega un nuevo cliente
${name}

 <a class="btn btn-success" href="/home?name=${name}" ><span class="glyphicon glyphicon-plus">Regresar</a>
 
<!--  <div class="container"> -->
<!--    <div class="row"> -->

			<table class="table table-bordered table-striped table-hover">
				<tbody>
						<tr> 
						    <td>Id Cliente: </td>													
							<td>
								<input  id="txtIdCliente" type="text" >
							</td>
						</tr>
						<tr>
							<td>nombre: </td>	
							<td><input  id="txtNobre" type="text" ></td>
						</tr>
						<tr>
							<td>apellido: </td>
							<td><input  id="txtApellido" type="text" ></td>						
						</tr>
						<tr>
							<td>email: </td>
							<td><input  id="txtEmail" type="text" ></td>
						</tr>
						<tr>
							<td>direccion: </td>
							<td><input  id="txtDireccion" type="text" ></td>
						</tr>
						<tr>
							<td>
								<input type="button" id="addRow" name="registrar" value="Registrar" >
							</td>
						</tr>

				</tbody>
				
<%
session.setAttribute("name", request.getParameter("name"));
%>
			</table>
		 
	
<!-- 		</div> -->
<!-- 		</div> -->
 
 
 
 
</body>
</html>