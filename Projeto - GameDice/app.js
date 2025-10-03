///Carregamento do jogo
setTimeout(gameDice, 250)

function gameDice() {
///Sorteio dos numeros dos dados
let sort1 = Math.floor((Math.random() * 6) + 1)
let sort2 = Math.floor((Math.random() * 6) + 1)
///Inclementando os numeros com as imagens
let dice1 = document.querySelector('.dice-1')
dice1.setAttribute('src', 'images/dice' + sort1 + '.png')
let dice2 = document.querySelector('.dice-2')
dice2.setAttribute('src', 'images/dice' + sort2 + '.png')
///Saida para os jogadores
if (sort1 > sort2) {
    document.querySelector('.resultado').textContent = 'JOGADOR 1 VENCEU! 🏆'
    document.querySelector('.player1').style.color = 'green'
    document.querySelector('.player2').style.color = 'red'
} else if (sort1 < sort2) {
    document.querySelector('.resultado').textContent = 'JOGADOR 2 VENCEU! 🏆'
    document.querySelector('.player2').style.color = 'green'
    document.querySelector('.player1').style.color = 'red'
} else (
    document.querySelector('.resultado').textContent = 'EMPATE! 🥶'
)
}