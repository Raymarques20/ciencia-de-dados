const url = 'https://raw.githubsercontent.com/guilhermeonrails/api/main/dados-global.json'

async function visualizarInformaçoesGlobais() {
   const res = await fetch(url)
   const dados = res.json()
   console.log(dados);
 }
 
visualizarInformaçoesGlobais();