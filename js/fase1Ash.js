function fase1Ash()
{
    var tentativas = 2;
    
    while(tentativas>0)
    {
        var resposta = prompt("Escolha o boné que Ash usará em sua jornada: \na - Boné A\nb - Boné B\nc - Boné C");

        if(resposta=='c' || resposta =='C')
        {
            alert("Agora Ash tem seu boné");
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
        window.location.href = "../HTML/fase2Ash.html";
    }
}