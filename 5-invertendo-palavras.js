// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;


function reversedWord(string){

    let palavraInversa = "";
    let indice=0;
    let char=[];
    char.length=string.length;
    
for(let i=string.length-1; i>=indice; i--) {
    char[i] = string[(string.length-1)-i]
}

for (let i=0; i<char.length; i++){
    palavraInversa += char[i];
}

console.log(palavraInversa)
}

reversedWord("invertedendo palavras")
