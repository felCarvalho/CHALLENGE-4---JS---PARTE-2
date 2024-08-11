
//FUNDAMENTOS-JS-PARTE-2 
//CHALLENGE#4
//dadosArray = 22, 295, 176, 440, 37, 105, 10, 1100, 86 e 52.
//porcentagem

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const percentual = [.15, .20];
const tips = [];
const totals = [];

const calTip = (contas, porcentagem) => {
    const percentual1 = porcentagem[0];
    const percentual2 = porcentagem[1]
   // console.log(percentual1, percentual2)
   for (let i = 0; i < contas.length; i++) {
        if (contas[i] >= 50 && contas[i] <= 300 && percentual1 === .15) {
        const gorgeta = percentual1 * contas[i];
        const total = gorgeta + contas[i];
        tips.push(gorgeta);
        totals.push(total);
        //console.log(contas[i], gorgeta, total)

        console.log(`${i}     Sua conta está o valor de ${contas[i]}R$, já a gorgeta de 15% ficou com um valor de ${gorgeta}R$, totalizando ao todo cerca ${total}R$`)
   } else if (contas[i] <= 50 || contas[i] >= 300 && percentual2 === .20) {
    const gorgeta = percentual2 * contas[i];
    const total = gorgeta + contas[i];
    tips.push(gorgeta);
    totals.push(total);
   // console.log(contas[i], gorgeta, total)

    console.log(`${i}     Sua conta está o valor de ${contas[i]}R$, já a gorgeta de 20% ficou com um valor de ${gorgeta}R$, totalizando ao todo cerca ${total}R$`)
   }
 }
};
const result = calTip(bills, percentual);
console.log(result);
//result está retornando 'undefined' pq não estou usando return para o valor produzido pela função voltar para a mesma. E também pq o return mata a repetição do loop.

const calAvarege = (dados) => {
     let soma = 0;

    for (let i = 0; i < dados.length; i++) {
     //soma = soma + dados[i]
     soma += dados[i]
     console.log(soma)

    }
    return soma / dados.length;
}

const resultadoMediaTotals = calAvarege(totals)
console.log(resultadoMediaTotals);
const resultadoMediaTips = calAvarege(tips)
console.log(resultadoMediaTips);
