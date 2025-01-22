# Desafio---02

let wins = 87;
let lose = 11;  

function ranking (wins, lose){
    const saldo = wins - lose;
    if (saldo < 10) return {saldo,nivel:"nivel bronze"};
    if (saldo >= 11 && saldo <= 20) return {saldo,nivel: "nível bronze"};
    if (saldo >= 21 && saldo <= 50) return {saldo,nivel: "nível prata"};
    if (saldo >= 51 && saldo <= 80) return {saldo,nivel: "nível ouro"};
    if (saldo >= 81 && saldo <= 90) return {saldo,nivel: "nível diamante"};
    if (saldo >= 91 && saldo <= 100) return {saldo,nivel: "nível lendário"};	
    else return {saldo,nivel: "nível pro player"};
}

let {saldo, nivel} = ranking(wins, lose);
console.log(`O herói tem um saldo de vitórias de ${saldo} e está no nível ${nivel}`);
