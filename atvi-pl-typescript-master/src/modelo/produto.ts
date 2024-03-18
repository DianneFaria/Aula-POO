export default class Produto {
    public codigoProduto: string
    public nomeProduto: string
    public descricaoProduto: string

    constructor(codigoProduto: string, nomeProduto: string, descricaoProduto: string) {
        this.codigoProduto = codigoProduto
        this.nomeProduto = nomeProduto
        this.descricaoProduto = descricaoProduto
    }

    public get getCodigoProduto(){return this.codigoProduto}
    public get getNomeProduto(){return this.nomeProduto}
    public get getDescricaoProduto(){return this.descricaoProduto}
}