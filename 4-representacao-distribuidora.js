// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora. 

const faturamentoMensal = { // obj de entrada de valores
    SP: "67.836,43",
    RJ: "36.678,66",
    MG: "29.229,88",
    ES: "27.165,48",
    Outros: "19.849,53"
}

const percentualDistribuidora = (param) => {
    const resultObj = {}    //obj p resultado final
    const statesValue = []
    let sumValues = 0 //soma de todos valores

    for(let keys in param){
        //itera pelo obj corrigindo formato
        const formatedValues = param[keys].replace(',','.').replace('.','')
        //converte strings e salva valores
        statesValue.push(parseFloat(formatedValues))
        //soma total de valores
        sumValues += parseFloat(formatedValues)
    }

    for (let key in param) {
        const formateValues = param[key].replace('.', '').replace(',', '.')
        // const numericValue = parseFloat(formateValues)
        const percentage = ((parseFloat(formateValues) * 100) / sumValues).toFixed(2) + ' %';
        // Adicionar a porcentagem ao objeto
        resultObj[key] = 'O valor de R$'+param[key] + ' representa: (' + percentage + ')'

    }
    //imprimindo resultado (objeto)
    for (let key in resultObj) {
        console.log(resultObj[key]);
    }
    
}
percentualDistribuidora(faturamentoMensal) 