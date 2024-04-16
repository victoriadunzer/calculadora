function calcular(){
    var primeiroNum= parseFloat(document.getElementById('primeiroNum').value);
    var segundoNum= parseFloat(document.getElementById('segundoNum').value);
    var operacao= document.getElementById('operacao').value;
    var resultado;

    switch (operacao) {
        case 'adicao':
            resultado = primeiroNum + segundoNum;
            break;
        case 'subtracao':
            resultado = primeiroNum - segundoNum;
            break;
        case 'multiplicacao':
            resultado = primeiroNum * segundoNum
            break;
        case 'divisao':
            if (segundoNum===0) {
                alert('Não é possível dividir um número por 0');
                break;
            }else {
                resultado = primeiroNum / segundoNum
                break;
            }
        default:
            alert('Escolha uma opção válida');
            break;
    }
    var result = document.getElementById('mostrarResultado');
    result.innerHTML = resultado;
}