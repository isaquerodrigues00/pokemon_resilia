function fase3Goh()
{
    var tentativas = 2;
    
    while(tentativas>0)
    {
        var resposta = prompt("Qual é o tipo do lendário? \na - Fogo \nb - Psíquico \nc -Água ");

        if(resposta=='b' || resposta =='B')
        {
            alert("Goh está indo atrás do seu sonho agora");
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