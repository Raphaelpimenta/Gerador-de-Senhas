function pegaSenha(){

    var caracteres = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]"
    var senhaLength = 16;
    var novaSenha = "";

    for ( var i=0; i<senhaLength; i++){
        var numeroAleatorio = Math.floor( Math.random() * caracteres.length);
        novaSenha += caracteres.substring(numeroAleatorio, numeroAleatorio+1);
    }

    document.querySelector("#senha").value = novaSenha;
}
