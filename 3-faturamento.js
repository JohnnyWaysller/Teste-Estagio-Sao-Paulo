// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

const costDay = [
    {"dia": 1, "faturamento": 100},
    {"dia": 2, "faturamento": 200},
    {"dia": 3, "faturamento": 150},
    {"dia": 4, "faturamento": 0},
    {"dia": 5, "faturamento": 300},
    {"dia": 6, "faturamento": 250},
    {"dia": 7, "faturamento": 0},
    {"dia": 8, "faturamento": 400},
    {"dia": 9, "faturamento": 350},
    {"dia": 10, "faturamento": 0},
    {"dia": 11, "faturamento": 500},
    {"dia": 12, "faturamento": 450},
    {"dia": 13, "faturamento": 0},
    {"dia": 14, "faturamento": 550},
    {"dia": 15, "faturamento": 600},
    {"dia": 16, "faturamento": 0},
    {"dia": 17, "faturamento": 0},
    {"dia": 18, "faturamento": 700},
    {"dia": 19, "faturamento": 0},
    {"dia": 20, "faturamento": 750},
    {"dia": 21, "faturamento": 800},
    {"dia": 22, "faturamento": 0},
    {"dia": 23, "faturamento": 0},
    {"dia": 24, "faturamento": 0},
    {"dia": 25, "faturamento": 900},
    {"dia": 26, "faturamento": 0},
    {"dia": 27, "faturamento": 950},
    {"dia": 28, "faturamento": 1000},
    {"dia": 29, "faturamento": 0},
    {"dia": 30, "faturamento": 1050}
]

const faturamentoCalculate = (array) => {
    let sumDays = 0
    let daystoAverage = 0
    let lowValue = Infinity
    let highValue = 0
    let monthlyAverage
    let countDays = 0

    for(let i = 0; i<array.length; i++){
        if(array[i].faturamento > 0){
            const earnings = array[i].faturamento

            daystoAverage ++
            sumDays += earnings
            
            highValue = earnings > highValue ? earnings : highValue;
            lowValue = earnings < lowValue ? earnings : lowValue;
        }
    }

    monthlyAverage = sumDays / daystoAverage

    for(let i = 0; i<array.length; i++){
        if(array[i].faturamento > 0 && array[i].faturamento > monthlyAverage){
            countDays ++
        }
    }
    
    console.log(`O menor faturamento mensal foi de R$${lowValue.toFixed(2)} reais`);
    console.log(`O maior valor foi R$${highValue.toFixed(2)} reais`);
    console.log(`Em ${countDays} dias o faturamento foi superior que a Média Mensal`);
}

faturamentoCalculate(costDay) // chamando funcao

