function fase2Goh()
{
    var tentativas = 2;
    
    while(tentativas>0)
    {
        var resposta = prompt("Qual a melhor forma de conseguir todos os pokémons? \na - Batalhar e Capturar \nb - Evoluir \nc - Sair Jogando Pokebolas ");

        if(resposta=='c' || resposta =='C')
        {
            alert("Goh vai jogar muitas pokébolas");
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
        window.location.href = "../HTML/fase3Goh.html";
    }
}