
const frm = document.getElementById('form-contato');
let linhas = '';

frm.addEventListener('submit', function(e) {
    e.preventDefault();
    const addNome = document.getElementById('inNome');
    const addNumber = document.getElementById('inNumber');
    const addAdress = document.getElementById('inAdress');

    let linha = '<tr>';
    linha += `<td>${addNome.value}</td>`;
    linha += `<td>${addNumber.value}</td>`;
    linha += `<td>${addAdress.value}</td>`;
    linha += '</tr>';

    linhas += linha

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    addNome.value = ''
    addNumber.value = ''
    addAdress.value = ''
    
});


