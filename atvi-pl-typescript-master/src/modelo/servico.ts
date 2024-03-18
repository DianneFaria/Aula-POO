export default class Servico {
    public codigoServico: string;
    public nomeServico: string;
    public descricaoServico: string;
    public precoServico: number;

    constructor(codigoServico: string, nomeServico: string, descricaoServico: string, precoServico: number) {
        this.codigoServico = codigoServico
        this.nomeServico = nomeServico
        this.descricaoServico = descricaoServico
        this.precoServico = precoServico
    }
}