import React, { useState } from 'react';
import { Component } from "react";
import BarraNavegacao from "./barraNavegacao";
import MenuSuspenso from './menuSuspenso';
import ListaCliente from './cliente/listaClientes';
import FormularioDeleteCliente from './cliente/formularioDeleteCliente';
import FormularioDeleteProduto from './produto/formularioDeleteProduto';
import FormularioCadastroServico from './servico/formularioCadastroServico';
import FormularioBuscaServico from './servico/formularioBuscaServico';
import FormularioAtualizacaoServico from './servico/formularioAtualizacaoServico';
import FormularioDeleteServico from './servico/formularioDeleteServico';



type State = {
    tela: string
}

export default class Roteador extends React.Component<{}, State> {
    constructor(props: {} | Readonly<{}>) {
        super(props)
        this.state = {
            tela: 'Clientes'
        }
        this.selecionarView = this.selecionarView.bind(this)
    }

    selecionarView(novaTela: string, evento: React.MouseEvent<HTMLButtonElement>) {
        evento.preventDefault()
        console.log(novaTela);
        this.setState({
            tela: novaTela
        })
    }

    render() {
        let barraNavegacao = (
            <BarraNavegacao seletorView={this.selecionarView} tema="#e3f2fd" botoes={['Clientes', 'CRUD', 'Busca Cliente', 'Cadastro Pet']} />
        );

        // Adicione uma condição para renderizar o componente DropdownMenu
        if (this.state.tela === 'CRUD') {
            return (
                <>
                    {barraNavegacao}
                    <MenuSuspenso 
                    titulo='Cliente'
                    nomeLink1='Cadastrar' link1= '/FormularioCadastroCliente' 
                    nomeLink2='Buscar' link2= '/FormularioCadastroPet'
                    nomeLink3='Atualizar' link3= '/FormularioCadastroPet'
                    nomeLink4='Deletar' link4= '/FormularioCadastroPet'/> 
                </>
            )
        } 

        // Continue com as outras condições para renderizar os componentes existentes
        else if (this.state.tela === 'Clientes') {
            return (
                <>
                    {barraNavegacao}
                    <ListaCliente tema="#e3f2fd" />
                </>
            )
        } else if (this.state.tela === 'Busca Cliente') {
            return (
                <>
                    {barraNavegacao}
                    <FormularioDeleteCliente tema="#e3f2fd" />
                </>
            )
        } else {
            return (
                <>
                    {barraNavegacao}
                    <FormularioDeleteServico tema="#e3f2fd" />
                </>
            )
        }
    }
}
