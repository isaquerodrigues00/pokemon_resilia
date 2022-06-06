function fase1Dawn()
{
    var tentativas = 2;
    
    while(tentativas>0)
    {
        var resposta = prompt("Escolha o melhor pokémon para Dawn: \na - Turtwig \nb - Chimchar \nc - Piplup ");

        if(resposta=='c' || resposta =='C')
        {
            alert("Dawn já tem um pokémon para ser uma top coordenadora");
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
        window.location.href = "../HTML/fase2Dawn.html";
    }
}