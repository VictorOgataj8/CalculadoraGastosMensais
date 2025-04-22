const descricaoInput = document.getElementById('descricao');
const valorInput = document.getElementById('valor');
const categoriaSelect = document.getElementById('categoria');
const adicionarGasto = document.getElementById('adicionar-gasto');
const listaPedido = document.getElementById('lista-pedido');
const valorTotalElement = document.getElementById('valor-total');

let totalGastos = 0;

function formatarValor(valor) {
    return `R$ ${valor.toFixed(2).replace('.', ',')}`;
}

function adicionarGasto() {
    const descricao = descricaoInput.value.trim();
    const valor = parseFloat(valorInput.value);
    const categoria = categoriaSelect.value;

    if (!descricao || isNaN(valor) || valor <= 0 || !categoria) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const item = document.createElement('li');
    item.textContent = `${descricao} - ${formatarValor(valor)} (${categoria})`;

    listaPedido.appendChild(item);

    totalGastos += valor;
    valorTotalElement.textContent = formatarValor(totalGastos);

    descricaoInput.value = '';
    valorInput.value = '';
    categoriaSelect.value = '';
}

adicionarGasto.addEventListener('click', adicionarGasto);