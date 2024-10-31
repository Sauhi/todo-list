const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')

let minhaListaDeItens = []


function adicionarNovaTarefa() {
    minhaListaDeItens.push(input.value)


}

function mostrarTarefas() {

    let novaLi = ' '

    //['comprar café, 'estudar programação']

    minhaListaDeItens.forEach(tarefa) => {

        novaLi = '            
        
        <li class="task">
            < img src = "./img/checked.png" alt = "check-na-tarefa" >
                <p>Responder Clientes</p>
                <img src="./img/trash.png" alt="Tarefa-para-o-lixo">
            </li>
        '

    })


 
}


button.addEventListener('click', adicionarNovaTarefa)