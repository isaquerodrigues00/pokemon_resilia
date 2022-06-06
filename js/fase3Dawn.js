function fase3Dawn()
{
    var tentativas = 2;
    
    while(tentativas>0)
    {
        var resposta = prompt("Para ser uma top coordenadora Dawn precisa de \na - Insígnias \nb - Fitas \nc - Troféus ");

        if(resposta=='b' || resposta =='B')
        {
            alert("Dawn já tem o que precisa para competir");
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
        window.location.assign("../html/telafinal.html");
    }
}