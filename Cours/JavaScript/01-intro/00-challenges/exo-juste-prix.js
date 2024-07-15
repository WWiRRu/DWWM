let essaie = 10;
let player = null;
const nbr = Math.floor(Math.random()*100 ) + 1;
function price() {
    while (essaie > 0 && player !== nbr) {
        player = window.prompt(`Donner un nombre : nombre d'essaie restant ${essaie}`);
        essaie--;
        if (player === null) {
            essaie++;
            break;
        }
        if (isNaN(player) || player > 100 || player === null) {
            alert("Valeur incorecte");
            essaie++;
        } else if (player === nbr) {
            alert("Félicitation vous remportez le juste prix !");
            break;
        } else if (nbr < player) {
            alert("c'est moins !");
        } else if (nbr > player) {
            alert("c'est plus !");
        }
        if (essaie <= 0) {
            alert(`Vous avez perdu le nombre etait ${nbr}`)
        }
    }
}
console.log(nbr);

