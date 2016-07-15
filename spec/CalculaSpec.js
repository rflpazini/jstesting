describe('Calculadora', function() {
    var calculadora,
    	a,
    	b;
    
    //Inicia as variáveis antes de executar qualquer rotina de teste
    beforeEach(function() {
    	calculadora = new Calculadora();
    	a = 5;
    	b = 6;
    });

    //Teste que verificará se nosso método está retornando a soma correta
    it('deve somar DOIS números', function() {
        expect(calculadora.soma(a, b)).toEqual(a + b);
    });

    //Teste de soma de números flutuantes
    it('deve somar DOIS números FLUTUANTES', function() {
    	expect(calculadora.soma(0.1, 0.2)).toEqual(0.3);
    });
    
    it('deve gerar um ERRO ao receber uma String como parâmetro', function() {
    	expect(function() {
    		calculadora.soma(2, 'teste')
    	}).toThrowError(Error);
    });
});
