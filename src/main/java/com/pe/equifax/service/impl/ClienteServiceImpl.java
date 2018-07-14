package com.pe.equifax.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pe.equifax.bean.Cliente;
import com.pe.equifax.dao.ClienteDao;
import com.pe.equifax.service.ClienteService;

@Service
public class ClienteServiceImpl implements ClienteService{
	
	
	@Autowired
	private ClienteDao clienteDao;

	@Override
	public void registrar(Cliente cliente) throws Exception {
		
		clienteDao.registrar(cliente);
	}

	@Override
	public void actualizar(Cliente cliente) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public void eliminar(Cliente cliente) throws Exception {
		// TODO Auto-generated method stub
		
	}

	@Override
	public List<Cliente> listar() throws Exception {
		// TODO Auto-generated method stub
		return clienteDao.listar();
	}

	@Override
	public List<Cliente> listarBuscaCliente(Cliente clienteB) throws Exception {
		// TODO Auto-generated method stub
		return clienteDao.listarBuscaCliente(clienteB);
	}

}
