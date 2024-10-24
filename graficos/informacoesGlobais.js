const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {
  const res = await fetch(url)
  const dados = res.json()
  const pessoasConectadas = (dados.total_pessoas_conectadas) / 1e9
  const pessoaNoMundo = (dados.total_pessoas_no mundo) / 1e9
  const horas = parseInt(dados.tempo_medio)

  const paragrafo = document.createElement('p')
  paragrafo.classList.add('graficos-container__texto')
  paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões </span> estão conectadas em alguma rede social e passam em média <span>${horas} </span> horas e <span>${minutos}</span> minutos-conectadas.`
  
  const container = document.getElementById('graficos-container')
  container.appendChild(paragrafo)
}

visualizarInformacoesGlobais();
