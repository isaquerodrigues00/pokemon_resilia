function fase2Ash()
{
    var tentativas = 2;
    
    while(tentativas>0)
    {
        var resposta = prompt("Escolha o Pokémon que acompanhará Ash  em sua jornada: \na - Pikachu  \nb - Caterpie  \nc - Eevee  ");

        if(resposta=='a' || resposta =='A')
        {
            alert("Vai Pikachu, choque do trovão");
            break;
        }
        else{
            tentativas--;
            alert("Resposta incorreta. Tente novamente, você ainda possui "+ tentativas +" tentativa");
        }
    }
    if (tentativas==0){
        window,location.href = "../HTML/final.html";
    }
    else{
        window.location.assign("../HTML/fase3Ash.html");
    }
}