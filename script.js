const botao = document.getElementById('botao');

const btn_masculino = document.querySelector('.btn_sexo_masculino .simbolo_masculino');
const btn_feminino = document.querySelector('.btn_sexo_feminino .simbolo_feminino');
const corFundoMasc = document.querySelector('.btnMasc');
const corFundoFem = document.querySelector('.btnFem')
const texto_dados = document.querySelector('.texto_dados');
const altura = document.getElementById('altura');
const peso = document.querySelector('#peso');
const resultado = document.querySelector('.resultado');
const texto_imc = document.querySelector('.texto_imc');


const imagem = document.querySelector('.imagem');



// TELA INICIAL
texto_dados.hidden = false;
imagem.hidden = false;


function alternarSelecao(elementoClicado, elementoDesmarcado){
    elementoClicado.style.backgroundColor = '#004DEF';
    elementoDesmarcado.style.backgroundColor = '#021323';
}

// VARIÁVEL SEXO
let sexo = ''

// CLICK NO BOTÃO PARA GUARDAR O VALOR NA VARIÁVEL SEXO
btn_masculino.addEventListener('click', function(){
    sexo = 'Masculino';
    alternarSelecao(corFundoMasc, corFundoFem);
    
});

// CLICK NO BOTÃO PARA GUARDAR O VALOR NA VARIÁVEL SEXO
btn_feminino.addEventListener('click', function(){
    sexo = 'Feminino';
    alternarSelecao(corFundoFem, corFundoMasc);
});


botao.addEventListener('click', function(){


    //PEGANDO O VALORES DIGITADOS
    const valorAltura = Number(altura.value);
    const valorPeso = Number(peso.value);

    //VERIFICANDO SE O SEXO FOI ESCOLHIDO

    if(sexo === ''){
        alert('Selecione Masculino ou Feminino');
        return;
    }
    // VERIFICANDO SE A ALTURA E O PESO SÃO ZERO, OU SE, REALMENTE, SÃO NÚMEROS
    if(valorAltura <= 0 || valorPeso <= 0 || Number.isNaN(valorAltura) || Number.isNaN(valorPeso)){
        alert('Digite uma altura e um peso válidos!');
        return;
    }



    //CÁLCULO DO IMC
    const imc = valorPeso / (valorAltura * valorAltura);
    const resIMC = imc.toFixed(2).replace('.', ',')

    
    texto_dados.style.padding = "5px 0 0 7px"; 

    //MOSTRA O RESULTADO

    if(imc <= 18.5){
        texto_dados.innerHTML = `
        Sexo: ${sexo}<br>
        Altura: ${valorAltura}m<br>
        Peso: ${valorPeso}kg
        `;
        imagem.innerHTML = '<img src="images/img_abaixo_do_peso.png" width="100%" height="100%">';
        texto_imc.innerHTML = `
            <span>${categoria[0].weight}</span>
            <h5>${categoria[0].texto}</h5>
        `;
    }else 
        if(imc >= 18.5 && imc <= 24.9){
            texto_dados.innerHTML = `
            Sexo: ${sexo}<br>
            Altura: ${valorAltura}m<br>
            Peso: ${valorPeso}kg
            `;
            imagem.innerHTML = '<img src="images/img_peso_normal.png" style="width:100%; height:100%">';
            texto_imc.innerHTML = `
                <span>${categoria[1].weight}</span>
                <h5>${categoria[1].texto}</h5>
            `;
        }else
            if(imc >= 25.0 && imc <= 29.9){
                texto_dados.innerHTML = `
                Sexo: ${sexo}<br>
                Altura: ${valorAltura}m<br>
                Peso: ${valorPeso}kg
                `;
                imagem.innerHTML = '<img src="images/img_acima_do_peso.png" style="width:100%; height:100%">';
                texto_imc.innerHTML = `
                    <span>${categoria[2].weight}</span>
                    <h5>${categoria[2].texto}</h5>
                `;
            }else
                if(imc >= 30.0 && imc <= 34.9){
                    texto_dados.innerHTML = `
                    Sexo: ${sexo}<br>
                    Altura: ${valorAltura}m<br>
                    Peso: ${valorPeso}kg
                    `;
                    imagem.innerHTML = '<img src="images/img_obeso.png" width="100%" height="100%">';
                    texto_imc.innerHTML = `
                        <span>${categoria[3].weight}</span>
                        <h5>${categoria[3].texto}</h5>
                    `;
                }else{
                    texto_dados.innerHTML = `
                    Sexo: ${sexo}<br>
                    Altura: ${valorAltura}m<br>
                    Peso: ${valorPeso}kg
                    `;
                    imagem.innerHTML = '<img src="images/img_obeso_morbido.png" style="width:100%; height:100%">';
                    texto_imc.innerHTML = `
                        <span>${categoria[4].weight}</span>
                        <h5>${categoria[4].texto}</h5>
                    `;
                }        

    resultado.innerHTML = resIMC;
});


