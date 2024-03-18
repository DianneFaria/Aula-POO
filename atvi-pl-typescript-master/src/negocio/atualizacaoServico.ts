import Entrada from "../io/entrada";
import Servico from "../modelo/servico";
import Atualizacao from "./atualizacao";

export default class AtualizacaoServico extends Atualizacao {
    
    private servicos: Servico[];
    private entrada: Entrada;

    constructor(servicos: Servico[]) {
        super();
        this.servicos = servicos;
        this.entrada = new Entrada()
    }
    
    public atualizar(): void {
        console.log("\nAtualização de Serviço:");
        
        const codigoServ = this.entrada.receberTexto("Informe o código do serviço que deseja atualizar: ");
       
        const servico = this.encontrarServicoPorCodigo(codigoServ);
        if (!servico) {
            console.log("\n Serviço não encontrado.\n");
            return;
        }

        console.log("\nDados atuais do serviço:\n");

        console.log(`Código do serviço: ${servico.codigoServico}`);
        console.log(`Nome do serviço: ${servico.nomeServico}`);
        console.log(`Descrição do serviço: ${servico.descricaoServico} \n`);

        console.log("\nAtualização de dados do serviço:");

        const novoCodigoServico = this.entrada.receberTexto("Novo código do serviço: ");
        const novoNomeServico = this.entrada.receberTexto("Novo nome do serviço: ");
        const novoDescricaoServico = this.entrada.receberTexto("Nova descrição do serviço: ");

      
        servico.codigoServico = novoCodigoServico;
        servico.nomeServico = novoNomeServico;
        servico.descricaoServico = novoDescricaoServico;
        
        console.log("\nServiço atualizado com sucesso!\n");
    } 

    public encontrarServicoPorCodigo(codigo: string): Servico | undefined {
        return this.servicos.find(servico => servico.codigoServico === codigo);
    }
}
    
