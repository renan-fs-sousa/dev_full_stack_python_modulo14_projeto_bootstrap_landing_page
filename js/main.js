$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
    });

    $('#telefone').mask('(00) 0000-00000',{placeholder: '(   )'});

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Campo nome é obrigatório',
            email: 'Campo e-mail é obrigatório',
            mensagem: 'Campo mensagem é obrigatório'
        }
    })
})