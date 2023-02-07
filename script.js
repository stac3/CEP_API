async function buscaEndereco (cep) {
    try {
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertido = await consultaCEP.json ();
        if(consultaCEPConvertido.erro) {
            throw Error('CEP não existente');
        }
        var cidade = document.getElementById('cidade');
        var endereco = document.getElementById('endereco');
        var estado = document.getElementById('estado');
        var bairro  = document.getElementById('bairro');

        cidade.value = consultaCEPConvertido.localidade;
        endereco.value = consultaCEPConvertido.logradouro;
        estado.value = consultaCEPConvertido.uf;
        bairro.value = consultaCEPConvertido.bairro;


        console.log(consultaCEPConvertido);
        return consultaCEPConvertido;
        
    }
    catch(erro) {
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));
