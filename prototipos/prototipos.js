const numeros = [1, 2, 3, 4, 5];

Array.prototype.meuMap = function (callback, thisArg) {
    const resultado = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            resultado.push(callback.call(thisArg, this[i], i, this));
        }
    }
    return resultado;
};

Array.prototype.meuFilter = function (callback, thisArg) {
    const resultado = [];
    for (let i = 0; i < this.length; i++) {
        if (i in this && callback.call(thisArg, this[i], i, this)) {
            resultado.push(this[i]);
        }
    }
    return resultado;
};

Array.prototype.meuReduce = function (callback, initialValue) {
    if (this.length === 0 && initialValue === undefined) {
        throw new TypeError('Reduce of empty array with no initial value');
    }

    let acumulador;
    let startIndex = 0;

    if (initialValue !== undefined) {
        acumulador = initialValue;
    } else {
        while (startIndex < this.length && !(startIndex in this)) {
            startIndex++;
        }
        acumulador = this[startIndex++];
    }

    for (let i = startIndex; i < this.length; i++) {
        if (i in this) {
            acumulador = callback(acumulador, this[i], i, this);
        }
    }

    return acumulador;
};

Array.prototype.meuForEach = function (callback, thisArg) {
    for (let i = 0; i < this.length; i++) {
        if (i in this) {
            callback.call(thisArg, this[i], i, this);
        }
    }
};

console.log('meuMap:', numeros.meuMap(n => n * 2));
console.log('map nativo:', numeros.map(n => n * 2));

console.log('meuFilter (ímpares):', numeros.meuFilter(n => n % 2));
console.log('filter nativo (ímpares):', numeros.filter(n => n % 2));

console.log('meuReduce (soma):', numeros.meuReduce((acc, n) => acc + n, 0));
console.log('reduce nativo (soma):', numeros.reduce((acc, n) => acc + n, 0));

console.log('meuForEach (log):');
numeros.meuForEach(n => console.log('→', n));
