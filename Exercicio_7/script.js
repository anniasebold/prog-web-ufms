/*
 *  Script com a lógica do Jogo da Velha
 *  Ele possui o esqueleto dos método essenciais.
 *
 *  DICAS GERAIS:
 *  - Modifique este arquivo o quanto for necessário.
 */

/*Declaração de uma variável que retorna uma lista de elementos presentes no documento 
* que coincidam com o grupo de seletores especificado. 
O objeto retornado é uma NodeList.  
*/
const cells = document.querySelectorAll(".cell");

//Variável que retorna o valor selecionado do statusText
const statusText = document.querySelector("#statusText");

/*Insira aqui as condições de vitória, para isso utilize a lógica do funcionamento
 * do jogo da velha
 */
const winConditions = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

let options = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let running = false;

// Chamada da função para inicializar o jogo
initializeGame();

// Insira aqui a função para a inicialização do jogo
function initializeGame() {
    currentPlayer = "X";
    statusText.textContent = "";
    restart = document.querySelector("#restart-Btn");
    restart.addEventListener("click", restartGame);
    
    cells.forEach((cell) => {
        cell.addEventListener("click", cellClicked);
    });

    running = true;
}

// Função para a verificação do clique para adicionar o valor e verifica o vencedor.
function cellClicked() {
    currentCell = this;

    if (!running || currentCell.textContent != "") return

    Currentindex = currentCell.attributes.cellIndex.value;
    updateCell(currentCell, Currentindex);
    checkWinner();
    changePlayer();

    if (options.every((option) => option != "") && statusText.textContent != "X venceu!" && statusText.textContent != "O venceu!") {
        statusText.textContent = "Empate!";
        running = false;
    }
}

// Função para atualizar visualização da informação
function updateCell(cell, index) { 
    cell.textContent = currentPlayer;
    options[index] = currentPlayer;
}

// Função para escolha e alternância de jogadores
function changePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

//Função para verificar o vencedor
function checkWinner() {
    statusText.textContent = currentPlayer === "X" ? `Vez do O` : `Vez do X`;

    winConditions.forEach((array) => {
        if (array.every((cell) => cells[cell].textContent == currentPlayer)) {
            cells.forEach((cell) => {
                cell.removeEventListener("click", cellClicked);
            });
            statusText.textContent = `${currentPlayer} venceu!`
            return;
        }
    });

}

// Função para resert das informações da tela
function restartGame() {
    cells.forEach((cell) => {
        cell.textContent = "";
    });
    options.fill("");
    initializeGame();
}
