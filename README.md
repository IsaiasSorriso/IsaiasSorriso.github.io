Funcionalidades Principais
Buscar e Exibir Todos os Deputados

A aplicação faz uma requisição à API da Câmara dos Deputados para obter a lista de todos os deputados e exibi-los na interface.
Arquivo: script.js
Funções: fetchDeputados(), displayDeputados(deputados)
Buscar Detalhes de um Deputado

Ao clicar em um deputado na lista, a aplicação faz uma requisição à API para obter detalhes específicos do deputado selecionado.
Arquivo: script.js
Funções: fetchDeputadoDetalhes(deputadoId), displayDeputadoDetalhes(deputado)
Buscar Endereço a partir de um CEP

O usuário pode inserir um CEP, e a aplicação fará uma requisição à API ViaCEP para obter o endereço correspondente e suas coordenadas geográficas.
Arquivo: script.js
Funções: fetchCoordinates(address)
Exibir e Salvar Detalhes do Deputado e Endereço

Exibir os detalhes do deputado, endereço e coordenadas na interface e permitir que o usuário salve essas informações.
Arquivo: script.js
Funções: createMap(lat, lon)
Filtro de Busca

Permite aos usuários filtrar a lista de deputados por nome ou partido.
Arquivo: script.js
Funções: search-bar.addEventListener('input', ...)
Estrutura do Código
HTML (index.html)
Contém a estrutura básica da página, incluindo:
Campo de pesquisa (search-bar)
Lista de deputados (deputados-list)
Seção de detalhes do deputado (deputado-detalhes)
Formulário de CEP (cep-form)
CSS (style.css)
Define o estilo da página, incluindo layout, cores, e responsividade.
JavaScript (script.js)
Contém as principais funções que controlam a lógica da aplicação:
fetchDeputados()

Faz uma requisição à API da Câmara dos Deputados para obter todos os deputados.
Armazena os dados na variável deputadosPesqueisa e exibe os deputados na interface através da função displayDeputados.
displayDeputados(deputados)

Exibe a lista de deputados na interface.
Cada deputado é mostrado com nome, foto e partido.
fetchDeputadoDetalhes(deputadoId)

Faz uma requisição à API para obter os detalhes do deputado selecionado.
Chama a função displayDeputadoDetalhes para exibir os detalhes na interface.
displayDeputadoDetalhes(deputado)

Exibe os detalhes do deputado na interface.
Inclui nome, sexo, partido, email e foto.
fetchCoordinates(address)

Faz uma requisição à API do Nominatim para obter as coordenadas geográficas do endereço fornecido.
Retorna as coordenadas (latitude e longitude).
createMap(lat, lon)

Cria e exibe um mapa com as coordenadas fornecidas usando a biblioteca Leaflet.
Event Listeners

search-bar: Filtra a lista de deputados conforme o usuário digita na barra de pesquisa.
cep-form: Busca o endereço correspondente ao CEP inserido e exibe as informações.
salvar: Envia os dados coletados para um servidor usando uma requisição POST.
fechar_dados_reais: Fecha a seção de detalhes do deputado e limpa os campos de CEP e mapa.
Como Usar a Aplicação
Visualizar Deputados

Acesse a página inicial para ver a lista de deputados.
Use a barra de pesquisa para filtrar a lista por nome ou partido.
Ver Detalhes do Deputado

Clique em um deputado na lista para ver seus detalhes.
Buscar Endereço por CEP

Insira um CEP no campo de CEP e clique em "Buscar".
Veja o endereço e as coordenadas correspondentes.
Salvar Informações

Após preencher os campos necessários, clique no botão "Salvar" para enviar os dados ao servidor.
Fechar Detalhes

Clique no botão "X" para fechar a seção de detalhes do deputado.
Tecnologias Utilizadas
HTML5
CSS3
JavaScript
APIs REST (Câmara dos Deputados, ViaCEP, Nominatim)
Biblioteca Leaflet (para mapas)
SweetAlert2 (para alertas bonitos)
