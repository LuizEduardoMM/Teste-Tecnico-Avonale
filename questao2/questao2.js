
function calculocomtodos(numero){
   //checando todos os números e somando os ímpares.


    var contador=0;
    var soma=0;
    if(numero<0){
        while (contador>=numero){
            if (contador%2!==0){
                soma=soma+contador;
            }
            contador--;}
        console.log(soma);
        return;
    }
    while (contador<=numero){
    if (contador%2!==0){
        soma=soma+contador;
    }
    contador++;}
    console.log(soma);

}
function calculocomimpares(numero) {
    //checando apenas os ímpares, cortando metade do processo da 1a solução para números a partir de 3 ou -3.
    var contador=1;
    var soma=0;
    if(numero<0){
        contador=-1
        while (contador>=numero){
            soma=soma+contador;
            contador=contador-2;
        }
        console.log(soma);
        return;
    }
    while (contador<=numero){
        soma=soma+contador;
        contador=contador+2;
    }
    console.log(soma);
}

function calculocomprogressaoaritmetica(numero){
    //aqui nao temos um laço se repetindo ou n vezes sendo n o número, ou n/2 para apenas os ímpares, e sim uma fórmula matemática
    //que em uma só execução oferece a resposta correta.
    var ultimoimpar=0;
    var soma=0;
    if(numero%2===0){
        ultimoimpar=numero-1;
        soma=((1+ultimoimpar)/2)*(numero/2);
    }
    if(numero<0&&numero%2!==0){
        ultimoimpar=numero;
        soma=(((1+ultimoimpar)/2)-1)*(((numero-1)/2));
    }
    else if (numero>0&&numero%2!==0) {
        ultimoimpar=numero;
        soma=(((1+ultimoimpar)/2))*(((numero-1)/2)+1);
    }
if(numero<0){
    console.log(soma*-1);
    return
}
    console.log(soma);
}
const numero=8000;
calculocomtodos(numero);
calculocomimpares(numero);
calculocomprogressaoaritmetica(numero);
