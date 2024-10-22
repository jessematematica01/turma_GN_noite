const url='https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais(params) {
    const resposta= await fetch(url)
    const dados= await resposta.json()
    console.log(dados)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = 'De ${dados.total_pessoas_mundo} bilhões de pessoas no planeta, existem aproximadamente 6 bilhões de pessoas com acesso à educação, onde o tempo médio de estudo é de 4 horas por dia. Como Maria sempre pensou em estudar porém assim como ${dados.total_pessoas_com_acesso} bilhão de pessoas sem acesso a educação, enfrentava muitas dificuldades. Para isso ela começou a se dedicar estudando diariamente  e se tornou parte da parcela de 1,5 bilhão de pessoas que conseguem concluir o ensino superior.'
    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}
visualizarInformacoesGlobais()