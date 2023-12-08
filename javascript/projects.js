// Função para carregar e exibir dados da planilha do Google Sheets
function loadGoogleSheetData() {
    // ID da planilha do Google Sheets
    const spreadsheetId = '1BceSwwl-e4k-poICuKSAVAj-kMlGH2kEUKRYN__oFWI';
    // ID da planilha dentro do documento (geralmente 0 para a primeira planilha)
    const sheetId = 1;

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'projects' // Substitua pelo nome da aba que você deseja ler
    }).then(function (response) {
        const data = response.result.values;

        if (data.length > 0) {
            const projectsContainer = document.getElementById('project-container');
            data.forEach(function (row) {
                const urlRepositorio = row[0];
                const desc = row[1];
                const nomeProjeto = row[2];
                const urlImg = row[3];

                const projectDiv = document.createElement('div');
                projectDiv.className = 'col-md-4';
                projectDiv.innerHTML = `
                    <div class="card">
                        <h3 class="text-center">${nomeProjeto}</h3>
                        <img src="${urlImg}" alt="${nomeProjeto}" class="img-fluid">
                        <button class="btn bg-color btn-dark" type="button" data-bs-toggle="modal" data-bs-target="#projectModal"
                         data-desc="${desc}" data-ulrRepo="${urlRepositorio}" data-img="${urlImg}" data-nomeProj="${nomeProjeto}" >
                            Saiba Mais
                        </button>
                    </div>
                `;
                projectsContainer.appendChild(projectDiv);
            });

            //modal saiba mais
            document.querySelectorAll('.btn-dark').forEach(function (btn) {
                btn.addEventListener('click', function () {
                    const modalBody = document.getElementById('projectModalBody');
                    const desc = this.getAttribute('data-desc');
                    const repo = this.getAttribute('data-ulrRepo');
                    const nomeProjeto = this.getAttribute('data-nomeProj');
                    const img = this.getAttribute('data-img');

                    modalBody.innerHTML = `
                        <h3>${nomeProjeto}</h3>
                        <img src="${img}" alt="${nomeProjeto}" class="img-fluid">
                        <h4>Descrição: </h4>
                        <p class="text-justify">${desc}</p>
                        <a href="${repo}" class="btn btn-dark" target="_blank">Repositório</a>
                    `;
                });
            });


        }


    });
}

// Função para inicializar a API do Google Sheets
function initGoogleSheetsApi() {
    gapi.client.init({
        apiKey: 'AIzaSyDShz3JoH-9LtPf-fAsngo-O2r_2mAICb4',
        discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(function () {
        loadGoogleSheetData();
    });
}

// Carrega a API do Google Sheets e inicia a aplicação
gapi.load('client', initGoogleSheetsApi);
