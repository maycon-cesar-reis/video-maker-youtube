const readline = require('readline-sync')

function start() {
    var conteudo = {}

    conteudo.termo   = obtemTermo()
    conteudo.prefixo = obtemPrefixo()

    function obtemTermo() {
        return readline.question('Informe um termo para busca na Wikipedia: ')
    }

    function obtemPrefixo() {
        const opcoes = ['Who is', 'What is', 'The history of']
        const opcao  = readline.keyInSelect(opcoes, 'Selecione um prefixo: ')
        return opcoes[opcao]
    }

    console.log(conteudo)
}

start()