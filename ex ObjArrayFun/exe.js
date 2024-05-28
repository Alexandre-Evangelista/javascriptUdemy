

    function meuEscopo(){
        arrayPessoas= [];

        const form= document.querySelector('.form');
        const resultado = document.querySelector('.resultado')

        function criarOjetoPessoa(nome,sobrenome,peso,altura){
    
            let dadosPessoa = {
             nome,sobrenome,peso,altura   
            };
            arrayPessoas.push(dadosPessoa);
            console.log(dadosPessoa);
            
        };

        function recebendoEventoForm(evento){
            evento.preventDefault();
            const nome = form.querySelector('#nome').value;
            const sobrenome = form.querySelector('#sobrenome').value;
            const peso = form.querySelector('#peso').value;
            const altura = form.querySelector('#altura').value;
            criarOjetoPessoa(nome,sobrenome,peso,altura);
            resultado.textContent += (`${nome} ${sobrenome} ${peso} ${altura}`);
            
        };

        form.addEventListener('submit', recebendoEventoForm);

    };

