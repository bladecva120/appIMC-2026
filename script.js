const botao = document.getElementById('btn_calcular');

const btn_masculino = document.querySelector('.btn_sexo_masculino .simbolo_masculino');
const btn_feminino = document.querySelector('.btn_sexo_feminino .simbolo_feminino');
const corFundoMasc = document.querySelector('.btnMasc');
const corFundoFem = document.querySelector('.btnFem')
const texto_dados = document.querySelector('.texto_dados');
const altura = document.getElementById('altura');
const peso = document.querySelector('#peso');
const resultado = document.querySelector('.resultado');
const textoImc = document.querySelector('.texto_imc');
const sub_campo_texto = document.querySelector('.sub_campo_texto');


const imagem = document.querySelector('.imagem');



// TELA INICIAL
texto_dados.hidden = false;
imagem.hidden = false;


function alternarSelecao(elementoClicado, elementoDesmarcado){
    if(elementoClicado){
        elementoClicado.style.backgroundColor = '#004DEF';
    }
    if(elementoDesmarcado){
        elementoDesmarcado.style.backgroundColor = '#021323';
    }
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
    textoImc.style.displa = 'none'

    
    // FUNÇÃO QUE DESTACA PALAVRAS DO OBJETO DO ARRAY
function destacarPalavras(texto){
    for(let palavra in palavrasDestaque){
        texto = texto.replaceAll(
            palavra,
            `<span style="color:#0f0; font-weight:bold" class="${palavrasDestaque[palavra]}">${palavra}</span>`
        );
    }
    return texto;
}

    //MOSTRA O RESULTADO

    if(imc <= 18.5){
        texto_dados.innerHTML = `
        Sexo: ${sexo}<br>
        Altura: ${valorAltura}m<br>
        Peso: ${valorPeso}kg
        `;
        imagem.innerHTML = '<img src="images/img_abaixo_do_peso.png" width="100%" height="100%">';
        textoImc.innerHTML = `
            <span>${categoria[1].weight}</span>
            <h5>${destacarPalavras(categoria[1].texto)}</h5>
        `;
    }else 
        if(imc >= 18.5 && imc <= 24.9){
            texto_dados.innerHTML = `
            Sexo: ${sexo}<br>
            Altura: ${valorAltura}m<br>
            Peso: ${valorPeso}kg
            `;
            imagem.innerHTML = '<img src="images/img_peso_normal.png" style="width:100%; height:100%">';
            textoImc.innerHTML = `
                <span>${categoria[2].weight}</span>
                <h5>${destacarPalavras(categoria[2].texto)}</h5>
            `;
        }else
            if(imc >= 25.0 && imc <= 29.9){
                texto_dados.innerHTML = `
                Sexo: ${sexo}<br>
                Altura: ${valorAltura}m<br>
                Peso: ${valorPeso}kg
                `;
                imagem.innerHTML = '<img src="images/img_acima_do_peso.png" style="width:100%; height:100%">';
                textoImc.innerHTML = `
                    <span>${categoria[3].weight}</span>
                    <h5>${destacarPalavras(categoria[3].texto)}</h5>
                `;
            }else
                if(imc >= 30.0 && imc <= 34.9){
                    texto_dados.innerHTML = `
                    Sexo: ${sexo}<br>
                    Altura: ${valorAltura}m<br>
                    Peso: ${valorPeso}kg
                    `;
                    imagem.innerHTML = '<img src="images/img_obeso.png" width="100%" height="100%">';
                    textoImc.innerHTML = `
                        <span>${categoria[4].weight}</span>
                        <h5>${destacarPalavras(categoria[4].texto)}</h5>
                    `;
                }else{
                    texto_dados.innerHTML = `
                    Sexo: ${sexo}<br>
                    Altura: ${valorAltura}m<br>
                    Peso: ${valorPeso}kg
                    `;
                    imagem.innerHTML = '<img src="images/img_obeso_morbido.png" style="width:100%; height:100%">';
                    textoImc.innerHTML = `
                        <span>${categoria[5].weight}</span>
                        <h5>${destacarPalavras(categoria[5].texto)}</h5>
                    `;
                }        

    resultado.innerHTML = resIMC;
});

const btn_limpar = document.getElementById('btn_limpar');
btn_limpar.addEventListener('click', function(){
    corFundoMasc.style.backgroundColor = "#021323";
    corFundoFem.style.backgroundColor = "#021323";
    sexo = '';
    altura.value = "";
    peso.value = "";
    resultado.innerHTML = "00,00";
    textoImc.innerHTML = `
        <span>${categoria[0].textoIMC}</span>
        <h5>${categoria[0].texto}</h5>
    `;
    
    
    sub_campo_texto.innerHTML = `
        <div class="texto_dados" style="height:55%">
            <img src="images/img_faixas.png" style="width: 100%; height: 100%">
        </div>
        <div class="imagem" style="height:45%">
            <img src="images/img_faixa_classificacao.png" style="width:100%; height:100%">
        </div>
    `;
});