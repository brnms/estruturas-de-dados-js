/*function Stack() {
    var items = []

    this.push = function(element) {
        items.push(element)
    }

    this.pop = function(element) {
        return items.pop()
    }

    this.peek = function() {
        return items[items.length - 1]
    }

    this.isEmpty = function() {
        // Informar se a pilha está vazia ou não
        return items.length === 0
    }

    this.clear = function() {
        items = []
    }

    this.size = function() {
        // Informar o tamanho da pilha
        return items.length
    }

    this.print = function () {
        // Imprime a pilha no console
        console.log(items.toString())
    }
}*/



// Decimal para binário
/* function decToBin(decNumber) {
    var restStack = [],
    rest,
    binaryString = ''

    while(decNumber > 0) {
        rest = Math.floor(decNumber % 2);
        restStack.push(rest);
        decNumber = Math.floor(decNumber / 2);
    }

    while(restStack.length > 0){
        binaryString += restStack.pop().toString()
    }

    return binaryString
}

console.log(decToBin(23)) */

function baseConverter(decNumber, base) {
    var restStack = [],
    rest,
    baseString = '',
    digits = '0123456789ABCDEF'

    while(decNumber > 0){
        rest = Math.floor(decNumber % base)
        restStack.push()
        decNumber = Math.floor(decNumber / base)
    }

    while(restStack.length > 0) {
        baseString += digits[restStack.pop()]
    }

    return baseString
}