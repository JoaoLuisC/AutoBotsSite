function loadCSV() {
    // Caminho para o arquivo CSV
    const csvFilePath = 'actions.csv';
    console.log("loadCSV");
    // Use a biblioteca PapaParse para ler o CSV
    Papa.parse(csvFilePath, {
        header: true,
        download: true,
        dynamicTyping: true,
        complete: function (results) {
            const actions = results.data;
            const tableBody = document.querySelector('#actions-table tbody');

            // Limpe qualquer conteúdo existente na tabela
            tableBody.innerHTML = '';

            // Preencha a tabela com os dados do CSV
            actions.forEach(function (action) {
                const row = document.createElement('tr');
                const nameCell = document.createElement('td');
                const descriptionCell = document.createElement('td');

                nameCell.textContent = action.Ação;
                descriptionCell.textContent = action.Descrição;

                row.appendChild(nameCell);
                row.appendChild(descriptionCell);
                tableBody.appendChild(row);
            });
        }
    });
}

//window.addEventListener('load', loadCSV);

// Função para carregar e exibir dados da planilha do Google Sheets
function loadGoogleSheetData() {
    // ID da planilha do Google Sheets
    const spreadsheetId = '1BceSwwl-e4k-poICuKSAVAj-kMlGH2kEUKRYN__oFWI';
    // ID da planilha dentro do documento (geralmente 0 para a primeira planilha)
    const sheetId = 0;

    gapi.client.sheets.spreadsheets.values.get({
        spreadsheetId: spreadsheetId,
        range: 'infos' // Substitua pelo nome da aba que você deseja ler
    }).then(function (response) {
        const data = response.result.values;
        const tableBody = document.querySelector('#actions-table tbody');

        // Limpe qualquer conteúdo existente na tabela
        tableBody.innerHTML = '';

        // Preencha a tabela com os dados da planilha
        data.forEach(function (row) {
            const rowData = row.map(item => item || ''); // Lida com valores nulos ou indefinidos

            const tableRow = document.createElement('tr');
            rowData.forEach(function (cellData) {
                const cell = document.createElement('td');
                cell.textContent = cellData;
                tableRow.appendChild(cell);
            });

            tableBody.appendChild(tableRow);
        });
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


document.getElementById("btSaibaMais").addEventListener('click', function () {
    window.location.href = "sobre.html";
})