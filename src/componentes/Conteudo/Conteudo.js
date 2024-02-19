import SecaoCapa from '../SecaoCapa/SecaoCapa';
import SecaoProdutos from '../SecaoProdutos/SecaoProdutos';
import SecaoSobre from '../SecaoSobre/SecaoSobre';
import SecaoContato from '../SecaoContato/SecaoContato'


export default function Conteudo () {
    return (
        <div>
            <SecaoCapa></SecaoCapa>
            <SecaoProdutos></SecaoProdutos>
            <SecaoSobre></SecaoSobre>
            <SecaoContato></SecaoContato>
        </div>
    )
}