class Calculadora {
    soma(a, b) {
        let result;

        // Verifica se os tipos dos arguentos que recebemos
        // são do tipo 'number'. Caso não forem, iremos retornar um erro
        if (typeof a != 'number' || typeof b != 'number') {
            throw new Error("Os valores devem ser apenas números");
        }

        result = a + b;

        // Verifica se o resultado da soma convertido em inteiro não é igual ao resultado
        // se isso for verdade, convertemos o número para float e limitamos o mesmo
        // para apenas duas casas depois da vírgula
        if (parseInt(result) != result) {
            result = parseFloat(result.toFixed(2));
        }

        return result;
    }
}
