/**
 * Aplica a cor #BECCC3 no background do body da página
 */
 function background(){

    /**
     * Tarefa/Issue  1
     *
     * Desenvolva uma função capaz de trocar a cor do fundo da página, ou seja,
     * alterar o background do body para a cor #BECCC3.
     */
    // AQUI COMEÇA O MEU CÓDIGO
    document.body.style.backgroundColor = "#BECCC3";
    // AQUI TERMINA O MEU CÓDIGO
}

/**
 * Recupera os valores dos campos de texto cujo o id='fname' e id='lname'
 * e apresente o nome e o sobrenome de uma pessoa (separado por um espaço)
 * na div id='result'
 */
function show(){

     /**
      * Issue  2
      *
      * Recupera os valores dos campos de texto cujo o id='fname' e id='lname' e apresente o nome
      * e o sobrenome de uma pessoa (separado por um espaço) na div id='result'
      */

    // AQUI COMEÇA O MEU CÓDIGO
    let nome = document.getElementById("fname").value;
    let snome = document.getElementById("lname").value;

    let nome_completo = document.getElementById("result");

    nome_completo.textContent = (nome + " " + snome);

    // AQUI TERMINA O MEU CÓDIGO

}

/**
 * Filtra o array de objetos (data) de acordo com os caracteres
 * digitados no campo de texto id='name'
 */
function search(){

    var data = [{name: "Rodrigo"}, {name: "Ricardo"}, {name: "Fabio"}, {name: "Alex"}, {name: "Sílvia"}];
    //var data = ["Rodrigo", "Ricardo", "Fabio", "Alex", "Sílvia"];

    /**
     * Issue 3
     *
     * Utilizando o array (data) de objetos JSON acima, desenvolva um código que permita com que os
     * usuários procurem pelo nome de pessoas. Assim, quando o usuário digitar a letra 'r' no campo
     * de texto (id='name'), todas as pessoas que iniciarem com essa letra devem ser apresentados.
     * Consequentemente, quando for digitado 'ro' o sistema deve filtrar e apresentar na div com o
     * id='search' as pessoas cujo o nome inicia com 'ro'.
     *
     * Segue algumas funções que podem auxiliar na resolução da questão:
     *      substr - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/substr
     *      length - https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/length
     *      toUpperCase - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
     *
     * Além disso, a função removeAllChildren abaixo também pode ser útil para o desenvolvimento da solução
     */

    /*
    COMO DEVE FUNCIONAR
    https://github.com/rpmhub/cpw2-dom/issues/3
     */


    // AQUI COMEÇA O MEU CÓDIGO
    let pesquisa = document.getElementById("name").value;
    let resultado = document.getElementById("search");

    let mdata;
    let mdatalc;

    pesquisa = pesquisa.toUpperCase();

    console.log("DIGITADO: " + pesquisa);

    //mdata = data[0].name;
    //console.log("ARRAY " + mdata);

    /* APAGANDO OS VALORES QUE FORAM ADICIONADOS AO DIV search */
    removeAllChildren(resultado);

    /* TRATANDO O CAMPO COMO VAZIO PARA NÃO RETORNAR TODOS OS VALORES CASO O CAMPO ESTEJA VAZIO */
 /*   if (pesquisa == "null")
        {
            console.log("NULO ");
            removeAllChildren(resultado);        
                } */
 //   else{

        for(let i = 0 ; i < data.length ; i++)
            {
                console.log("ARRAY NA POSICAO i " + data[i].name);
                mdata = data[i].name;
                mdatalc = mdata.toUpperCase();

                for(let j = 0 ; j < mdata.length ; j++)
                    {
                        console.log("SUBSTRING: " + mdata.substring(0,j) );
                        if(mdatalc.substring(0,j) == pesquisa)
                            {
                                console.log("MATCH");
                                var ndiv = document.createElement("div");
                                ndiv.appendChild(document.createTextNode(mdata));
                                            
                                resultado.appendChild(ndiv);
                                
                                    }

                            }
                
                console.log("\n\n");
                    
                    }

            }


    // AQUI TERMINA O MEU CÓDIGO



//}

/**
 * Remove todos os filhos de um nó
 *
 * @param {*} node Um objeto HTML Node
 */
function removeAllChildren(node){
    while (node.hasChildNodes()) {
        node.removeChild(node.firstChild);
    }
}
