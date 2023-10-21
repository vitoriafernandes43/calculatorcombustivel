//alert('js carregado');
//console.log('JS carregado!');

function calcularCombustivel(){

   var etanol = document.querySelector('#etanol'); 
   var gasolina = document.querySelector('#gasolina'); 
   var areaResult = document.querySelector('#result');
    
  // console.log(Etanol.value);
  // console.log(Gasolina.value);

   //Verificar se os valores são difrentes de vazio.
   if(etanol.value != '' && gasolina.value != ''){

    areaResult.style.display= 'block';

        //Executar o cálculo.
        var resultado = etanol.value / gasolina.value;
         // console.log(resultado.toFixed(2));

    if(resultado<= 0.7){
       // alert('Abasteça com Etanol');
       areaResult.innerHTML= '<span>Abasteça com:<br> <strong>Etanol</strong</span>';
    }else{
       // alert('Abasteça com Gasolina');
       areaResult.innerHTML= '<span>Abasteça com:<br> <strong>Gasolina</strong</span>';
    }
   }else{
    alert('Preencha todos os campos!');
   }

}

