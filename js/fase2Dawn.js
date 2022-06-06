function fase2Dawn()
{
    var tentativas = 2;
    
    while(tentativas>0)
    {
        var resposta = prompt("Escolha uma região para sua Jornada: \na - Kanto \nb - Hoenn \nc - Sinnoh ");

        if(resposta=='c' || resposta =='C')
        {
            alert("Dawn já sabe por onde vai viajar para disputar os torneios");
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
        window.location.href = "../HTML/fase3Dawn.html";
    }
}