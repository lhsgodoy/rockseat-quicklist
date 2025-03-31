function adicionarItem() {
    const itemInput = document.getElementById('item');
    const itemValor = itemInput.value.trim();

    if (itemValor !== "") {
        // Criando o novo item da lista
        const li = document.createElement('li');
        li.textContent = itemValor;

        // Criando o botão de remover
        const removerBtn = document.createElement('button');
        removerBtn.textContent = "Remover";
        removerBtn.onclick = function() {
            li.remove(); // Remove o item da lista
        };

        // Adicionando o botão de remover ao item da lista
        li.appendChild(removerBtn);

        // Adicionando o item na lista
        document.getElementById('listaCompras').appendChild(li);

        // Limpar o campo de entrada
        itemInput.value = "";
    } else {
        alert("Por favor, digite um item.");
    }
}