function fase3Ash()
{
    var tentativas = 2;
    
    while(tentativas>0)
    {
        var resposta = prompt("Escolha uma região para sua Jornada: \na - Kanto  \nb - Hoenn  \nc - Sinnoh  ");

        if(resposta=='a' || resposta =='A')
        {
            alert("Ash está pronto para iniciar sua jornada e para um grande mestre ser!");
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