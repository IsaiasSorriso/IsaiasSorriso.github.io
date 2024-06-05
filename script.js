const baseUrl = "https://dadosabertos.camara.leg.br/api/v2";
let deputadosPesqueisa = [];

// Busca Todos os Deputados
// Função assíncrona para buscar a lista de todos os deputados
async function fetchDeputados() {
  try {
    const response = await fetch(`${baseUrl}/deputados/`); // Faz uma requisição GET para a API de deputados
    const data = await response.json(); // Converte a resposta em JSON
    const deputados = data.dados; // Obtém a lista de deputados dos dados retornados
    deputadosPesqueisa = deputados; // Armazena a lista de deputados para uso na pesquisa
    displayDeputados(deputados); // Chama a função para exibir os deputados na interface
    console.log(deputados); // Loga os deputados no console para depuração
  } catch (error) {
    console.error(error); 
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Erro ao Buscar Deputados",
      showConfirmButton: false,
      timer: 1500
    });// Loga qualquer erro que ocorrer
  }
}




// Mostra Todos os Deputados
// Função para exibir a lista de deputados na interface
function displayDeputados(deputados) {
  const deputadosList = document.getElementById('deputados-list');
  deputadosList.innerHTML = ''; // Limpa a lista de deputados atual

  deputados.forEach(deputado => {
    const listItem = document.createElement('li'); // Cria um item de lista para cada deputado
    const foto = document.createElement('img'); // Cria um elemento de imagem
    const partido = document.createElement('p'); // Cria um parágrafo para o partido
    const nome = document.createElement('h4'); // Cria um elemento de cabeçalho para o nome

    foto.src = deputado.urlFoto; // Define a URL da foto do deputado
    nome.textContent = deputado.nome; // Define o nome do deputado
    partido.textContent = deputado.siglaPartido; // Define o partido do deputado

    listItem.addEventListener('click', () => fetchDeputadoDetalhes(deputado.id)); // Adiciona um evento de clique para buscar detalhes do deputado
    deputadosList.appendChild(listItem); // Adiciona o item de lista ao DOM
    listItem.appendChild(foto); // Adiciona a foto ao item de lista
    listItem.appendChild(nome); // Adiciona o nome ao item de lista
    listItem.appendChild(partido); // Adiciona o partido ao item de lista
  });
}




// Busca um Único Deputado
// Função assíncrona para buscar os detalhes de um deputado específico
async function fetchDeputadoDetalhes(deputadoId) {
  try {
    const response = await fetch(`${baseUrl}/deputados/${deputadoId}`); // Faz uma requisição GET para a API do deputado específico
    const data = await response.json(); // Converte a resposta em JSON
    const deputadoDetalhes = data.dados; // Obtém os detalhes do deputado dos dados retornados
    displayDeputadoDetalhes(deputadoDetalhes); // Chama a função para exibir os detalhes do deputado na interface
  } catch (error) {
    console.error( error);
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Erro ao Buscar Detalhes do Deputado",
      showConfirmButton: false,
      timer: 1500
    }); // Loga qualquer erro que ocorrer
  }
}




// Mostra os Detalhes do Deputado
// Função para exibir os detalhes do deputado na interface
function displayDeputadoDetalhes(deputado) {
  document.getElementById('deputado-nome').textContent = deputado.nomeCivil; // Define o nome civil do deputado
  document.getElementById('deputado-sexo').textContent = deputado.sexo; // Define o sexo do deputado
  document.getElementById('deputado-partido').textContent = deputado.ultimoStatus.siglaPartido; // Define o partido do deputado
  document.getElementById('deputado-email').textContent = deputado.ultimoStatus.email; // Define o email do deputado
  document.getElementById('deputado-foto').src = deputado.ultimoStatus.urlFoto; // Define a foto do deputado

  document.getElementById('deputado-detalhes').style.display = 'block'; // Mostra a div de detalhes do deputado
  document.getElementById('deputados-list').style.filter = 'blur(10px)'; // Aplica um efeito de desfoque à lista de deputados
  document.getElementById('titulo').style.filter = 'blur(10px)'; // Aplica um efeito de desfoque à lista de deputados
}




// Event listener para o formulário de CEP
// Adiciona um evento de envio ao formulário de CEP
document.getElementById('cep-form').addEventListener('submit', async function(event) {
  event.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)

  const cep = document.getElementById('cep-input').value.trim(); // Obtém o valor do CEP e remove espaços em branco
  if (cep) {
    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`); // Faz uma requisição GET para a API do ViaCEP
      const data = await response.json(); // Converte a resposta em JSON

      if (!data.erro) {
        document.getElementById('logradouro').textContent = data.logradouro; // Define o logradouro do endereço
        document.getElementById('bairro').textContent = data.bairro; // Define o bairro do endereço
        document.getElementById('localidade').textContent = data.localidade; // Define a localidade do endereço
        document.getElementById('uf').textContent = data.uf; // Define a UF do endereço 
        
        console.log(data); // Loga os dados do endereço para depuração

        const address = `${data.logradouro}, ${data.localidade}, ${data.uf}, Brasil`; // Monta o endereço completo
        const coordinates = await fetchCoordinates(address); // Busca as coordenadas do endereço
        if (coordinates) {
          document.getElementById('latitude').textContent = coordinates.lat; // Define a latitude do endereço
          document.getElementById('longitude').textContent = coordinates.lon; // Define a longitude do endereço

          createMap(coordinates.lat, coordinates.lon); // Cria o mapa com as coordenadas
        } else {
          Swal.fire({
            position: "center",
            icon: "error",
            title: "Coordenadas não encontradas para o endereço fornecido",
            showConfirmButton: false,
            timer: 1500
          }); 
        }
      } else {
        Swal.fire({
          position: "center",
          icon: "error",
          title: "CEP não encontrado",
          showConfirmButton: false,
          timer: 1500
        }); 
      }
    } catch (error) {
      console.error('Erro ao buscar o CEP:', error);
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Erro ao Buscar CEP",
        showConfirmButton: false,
        timer: 1500
      });  // Loga qualquer erro que ocorrer
    }
  } else {
    Swal.fire({
      position: "center",
      icon: "question",
      title: "Por Favor, insira um Cep",
      showConfirmButton: false,
      timer: 1500
    }); // Mostra um alerta se o campo de CEP estiver vazio
  }
});




// Função para buscar coordenadas geográficas a partir de um endereço
async function fetchCoordinates(address) {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json&limit=1`); // Faz uma requisição GET para a API do Nominatim
    const data = await response.json(); // Converte a resposta em JSON
    if (data.length > 0) {
      return {
        lat: data[0].lat, // Retorna a latitude
        lon: data[0].lon  // Retorna a longitude
      };
    } else {
      return null; // Retorna null se não encontrar dados
    }
  } catch (error) {
    console.error( error);
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Erro ao Buscar as Coordenadas",
      showConfirmButton: false,
      timer: 1500
    }); // Loga qualquer erro que ocorrer
    return null; // Retorna null em caso de erro
  }
}




// Função para criar o mapa usando a biblioteca Leaflet
function createMap(lat, lon) {
  const map = L.map('map').setView([lat, lon], 13); // Cria um mapa centralizado nas coordenadas fornecidas

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map); // Adiciona o tile layer do OpenStreetMap ao mapa

  L.marker([lat, lon]).addTo(map) // Adiciona um marcador no mapa
    .bindPopup(`Latitude: ${lat}<br>Longitude: ${lon}`) // Adiciona um popup com as coordenadas
    .openPopup(); // Abre o popup
}




// Event listener para o botão de salvar
// Adiciona um evento de clique ao botão de salvar
document.getElementById('salvar').addEventListener('click', function() {
  // Coletar dados dos campos
  const dadosDeputados = {
    nome: document.getElementById('deputado-nome').textContent,
    sexo: document.getElementById('deputado-sexo').textContent,
    partido: document.getElementById('deputado-partido').textContent,
    email: document.getElementById('deputado-email').textContent,
    cep: document.getElementById('cep-input').textContent,
    cidade: document.getElementById('localidade').textContent,
    // estado: document.getElementById('uf').textContent,
    bairro: document.getElementById('bairro').textContent,
    rua: document.getElementById('logradouro').textContent,
    latitude: document.getElementById('latitude').textContent,
    longitude: document.getElementById('longitude').textContent
  };

  // Enviar dados usando Fetch API
  fetch('../Backend/Routes/DeputadosRoute.php', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dadosDeputados) // Converte os dados para JSON e envia no corpo da requisição
  })
  .then(response => response.json())
  .then(dadosDeputados => {
    console.log(dadosDeputados); // Loga a resposta de sucesso
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Dados Enviados com Sucesso",
      showConfirmButton: false,
      timer: 1500
    }); // Mostra um alerta de sucesso
  })
  .catch((error) => {
    console.error('Error:', error); // Loga qualquer erro que ocorrer
    Swal.fire({
      position: "center",
      icon: "error",
      title: "Erro ao Enviar os Dados do Deputado",
      showConfirmButton: false,
      timer: 1500
    }); // Mostra um alerta de erro
  });
});




// Event listener para a barra de pesquisa
// Adiciona um evento de input à barra de pesquisa
document.getElementById('search-bar').addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase(); // Obtém o valor da pesquisa e converte para minúsculas
  const filteredDeputados = deputadosPesqueisa.filter(deputado =>
    deputado.nome.toLowerCase().includes(query) || // Filtra os deputados pelo nome
    deputado.siglaPartido.toLowerCase().includes(query) // Filtra os deputados pelo partido
  );
  displayDeputados(filteredDeputados); // Exibe os deputados filtrados na interface
});

// Chama a função principal para iniciar a busca dos deputados
fetchDeputados();



// Event listener para fechar os detalhes do deputado
document.getElementById('fechar_dados_reais').addEventListener('click', () => {
  document.getElementById('deputado-detalhes').style.display = 'none'; // Esconde a div de detalhes do deputado
  document.getElementById('deputados-list').style.filter = 'blur(0)'; // Remove o efeito de desfoque da lista de deputados
  document.getElementById('cep-input').value = ""; // Limpa o campo de CEP
  document.getElementById('titulo').style.filter = 'blur(0px)';
  document.getElementById('localidade').textContent= "";
  document.getElementById('bairro').textContent= "";
  document.getElementById('logradouro').textContent= "";
  document.getElementById('latitude').textContent= "";
  document.getElementById('longitude').textContent= "";
  document.getElementById('map').style.display = 'none';
});
