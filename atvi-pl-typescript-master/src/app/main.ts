import Entrada from "../io/entrada";
import Empresa from "../modelo/empresa";
import AtualizacaoCliente from "../negocio/atualizacaoCliente";
import CadastroCliente from "../negocio/cadastroCliente";
import ListagemClientes from "../negocio/listagemClientes";
import DeleteCliente from "../negocio/deleteCliente";
import BuscaCliente from "../negocio/buscaCliente";

console.log(`Bem-vindo ao melhor sistema de gerenciamento de pet shops e clínicas veterinarias`)
let empresa = new Empresa()
let execucao = true

while (execucao) {
    console.log(`Opções:`);
    console.log(`1 - Cadastrar cliente`);
    console.log(`2 - Buscar cliente`);
    console.log(`3 - Atualizar cliente`);
    console.log(`4 - Listar todos os clientes`);
    console.log(`5 - Deletar cliente`);
    console.log(`0 - Sair`);

    let entrada = new Entrada()
    let opcao = entrada.receberNumero(`Por favor, escolha uma opção: `)

    switch (opcao) {
        case 1:
            let cadastro = new CadastroCliente(empresa.getClientes)
            cadastro.cadastrar()
            break;

        case 2:
            let busca = new BuscaCliente(empresa.getClientes)
            busca.buscar()
            break;
        case 3:
            let atualizacao = new AtualizacaoCliente(empresa.getClientes)
            atualizacao.atualizar()
            break;
        case 4:
            let listagem = new ListagemClientes(empresa.getClientes)
            listagem.listar()
            break;
        case 5:
            let deleteCliente = new DeleteCliente(empresa.getClientes)
            deleteCliente.deletar()
            break;
        case 0:
            execucao = false
            console.log(`Até mais`)
            break;
        default:
            console.log(`Operação não entendida :(`)
    }
}