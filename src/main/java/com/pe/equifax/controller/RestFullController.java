package com.pe.equifax.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.pe.equifax.bean.Cliente;
import com.pe.equifax.service.ClienteService;

@RestController
public class RestFullController {
	
	@Autowired
	private JdbcTemplate jdbcTemplate;
	
	@Autowired
	private ClienteService clienteService;
	

	  

	@RequestMapping(value="/createTable", method=RequestMethod.GET)
	public void createTable(){
		try {
			jdbcTemplate.execute(" create table cliente (idCliente Serial, nombre varchar(50) , "
					+ " apellido varchar(50),email varchar(50), direccion varchar(100) )");
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
	
	@RequestMapping(value="/putData", method=RequestMethod.GET)
	public void putDate(){
		try {
			jdbcTemplate.execute(" insert into cliente (idCliente,nombre,apellido,email,direccion) values "
					+ "(2,'claudia','cusco','@ccusco','lima') ");
		} catch (Exception e) {
			// TODO: handle exception
			e.printStackTrace();
		}
	}
	
	@RequestMapping(value="/allClientes", method=RequestMethod.GET, produces="application/json" )
	public List<Cliente> list() throws Exception{
		return clienteService.listar();
	}
	
	@RequestMapping(value="/buscarCliente", method=RequestMethod.POST,produces="application/json" )
	public List<Cliente> buscar( @RequestBody Cliente clienteB) throws Exception{
		System.out.println("llega al metodo buscar ");
		return clienteService.listarBuscaCliente(clienteB);
	}
	
	@RequestMapping(value="/registrarCliente", method=RequestMethod.POST,produces="application/json",consumes="application/json" )
	public void registrar( @RequestBody Cliente cliente) throws Exception{
		System.out.println("llega al metodo registrar ");
		 clienteService.registrar(cliente);
	}


}
