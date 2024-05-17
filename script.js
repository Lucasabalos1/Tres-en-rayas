//Guardamos las cosas de html en constantes
const btnRules = document.querySelector(".rules");
const modal = document.querySelector(".modal-container");
const cross = document.querySelector(".close");
const btnGame = document.querySelectorAll(".box-btn");
const playerOne = document.querySelector(".player-1");
const playerTwo = document.querySelector(".player-2");
const finishGame = document.querySelector(".finish-modal");
const finishButton = document.querySelector(".finish");
let turn = "X";
let casillasDisponibles = 9;

//Añadimos la clase invisible a jugador 2
playerTwo.classList.add("invisible")


// creamos un addEventListener cuando hacemos click para mostrar el modal cuando se le de al boton de como jugar?
btnRules.addEventListener("click", () => modal.classList.add("show-modal"));

//creamos un addEventListener cuando hacemos click para cerrar el modal
cross.addEventListener("click", () => modal.classList.remove("show-modal"));


//creamos un bucle forEach que recorre todos los botones del tablero
btnGame.forEach( btn => {
    //creamos un addEventListener cuando hacemos click para dibujar el simbolo del jugador que le toque, luego comprueba si hay ganador, si lo hay finaliza el juego, si no cambia de turno
    btn.addEventListener("click", () =>{
        if(btn.textContent.length != 0){
            return;
        }

        btn.textContent = turn;
        btn.style.color = (turn ==="X") ? "green":"red";
        casillasDisponibles--;

        if(comprobarGanador(turn)){
            finalizarJuego();
            return;
        }

        if(casillasDisponibles == 0 && (!comprobarGanador("X") && !comprobarGanador("O"))){
            playerOne.textContent = "Empate!!";
            playerTwo.textContent = "Empate!!"
            finalizarJuego();
        }
        cambioTurno();
    });
});

//Esta funcion cambia el turno del jugador, pone de quien es el turno y cambia el turn x a turn o y viceversa
function cambioTurno(){
        turn = (turn === "X") ? "O":"X"; // si turn es igual a X, turn pasa a ser O, si no, sigue cambia a X
        playerTwo.classList.toggle("invisible")
        playerOne.classList.toggle("invisible")       
}


//Comprueba si hay un ganador con todas las combinaciones posibles, retorna true si lo hay, false si no
function comprobarGanador(turn){
    const tablero = document.querySelectorAll(".box-btn");
    //posibles combinaciones ganadoras
    const ganadores = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],   
        [1, 4, 7],   
        [2, 5, 8],   
        [0, 4, 8],   
        [2, 4, 6]    
    ];

    //itera entre todas las combinaciones
    for (const combinacion in ganadores) {
       
        const indices = ganadores[combinacion];
       
        let cont = 0;
        // itera en los datos del array de la conbinacion en donde esta parada            
        for (const indice of indices) {
           if (tablero[indice].textContent == turn) {
                cont++;
           }
        }

        //si se cumplen las 3 condiciones de la combinada, entra y nos da el mensaje del ganador y retorna true para finalizar el juego
        if (cont == 3) {
            if(turn == "X"){
                playerOne.textContent = `El ganador es el jugador 1`;
            }else{
                playerTwo.textContent =  `El ganador es el jugador 2`;
            }
            return true; // Retorna true si hay un ganador
        }        
    }
    return false; // Retorna false si no hay un ganador
}

//se encarga de dar por finalizado el juego
function finalizarJuego(){
    finishGame.classList.add("show-finish");
}

//se encarga de resetear el juego y cambia el turno
finishButton.addEventListener("click", () =>{
    casillasDisponibles = 9;
    const tablero = document.querySelectorAll(".box-btn");
    cambioTurno();
    for (const casilla in tablero) {
        tablero[casilla].textContent = "";
    }
    finishGame.classList.remove("show-finish")
    playerOne.textContent = "Es el turno del jugador 1";
    playerTwo.textContent = "Es el turno del jugador 2";
});