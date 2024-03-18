export default class Servico {
    public codigoServico: string
    public nomeServico: string
    public descricaoServico: string

    constructor(codigoServico: string, nomeServico: string, descricaoServico: string) {
        this.codigoServico = codigoServico
        this.nomeServico = nomeServico
        this.descricaoServico = descricaoServico
    }
}