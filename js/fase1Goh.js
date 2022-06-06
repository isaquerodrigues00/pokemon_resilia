function fase1Goh()
{
    var tentativas = 2;
    
    while(tentativas>0)
    {
        var resposta = prompt("Escolha a melhor pokebola: \na - Pokebola \nb - Masterbola \nc - Ultrabola ");

        if(resposta=='b' || resposta =='B')
        {
            alert("Goh já sabe qual pokébola usar quando achar o Mew");
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
        window.location.href = "../HTML/fase2Goh.html";
    }
}