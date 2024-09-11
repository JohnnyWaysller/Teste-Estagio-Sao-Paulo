// 1) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.


const fibonacciSequence = (num) => {
    
    let leftNum = 1 
    let nextNum = 1 
    const sequence = [0,1] 

    do{
        sequence.push(nextNum)
        nextNum = nextNum + leftNum
        leftNum = nextNum - leftNum
    }while (nextNum <= num)

        for(let i=0; i<=sequence.length-1; i++){
            if(num === sequence[i]){
                console.log(`O numero ${num} pertence a sequencia: ${sequence}`)
                return
            }
        }
        console.log(`O numero ${num} nao pertence a sequencia: ${sequence}`)
}

fibonacciSequence(144) // insira algum numero