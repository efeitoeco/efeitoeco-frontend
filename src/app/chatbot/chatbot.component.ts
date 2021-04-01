import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chatbot',
  templateUrl: './chatbot.component.html',
  styleUrls: ['./chatbot.component.css']
})
export class ChatbotComponent implements OnInit {

  

  falasUsuario = [
      ["oi", "eae", "ola", "iai", "olá"],
      ["tudo bem", "como voce ta", "tudo bem com voce"],
      ["meu pedido ta atrasado", "atraso", "pedido atrasado", "pedido em atraso", "atrasado"],
      ["te amo", "eu te amo"]
  ];

  respostas = [
      ["Oi!", "Olá!"],
      ["Estou bem, e você?", "Ótima, e você?", "Hmmm, estou ótima. Como você está?"],
      ["Aguarde um momento, estamos te redirecionando para uma atendente..."],
      ["Eu também amo todos os clientes da Efeito Eco <3"]
  ];

  alternativas = [
      "Não entendi o que você disse :(",
      "Você pode repetir, por favor?",
      "Tente dizer novamente, por favor"
  ];

  synth = window.speechSynthesis;

  constructor() { }

  ngOnInit(): void {
  }

  enviarMsg() {
    let inputUsuario: any = document.getElementById("fala-usuario");
    let entrada = inputUsuario.value;
    inputUsuario.value = "";
    this.saida(entrada);
  }

  compare(arrayEntrada: any, arrayResposta: any, varString: string) {
    let resposta;
    let encontrouResposta: boolean = false;
    for(let i = 0; i < arrayEntrada.length; i++) {
      for(let j = 0; j < arrayEntrada[i].length; j++) {
        if(arrayEntrada[i][j] == varString) {
          let respostas = arrayResposta[i];
          resposta = respostas[Math.floor(Math.random() * respostas.length)];
          encontrouResposta = true;
          break;
        }
      }
      if(encontrouResposta) break;
    }
    return resposta;
  }

  voz(textoString: string) {
    let vozBot = new SpeechSynthesisUtterance(textoString);
    vozBot.text = textoString;
    vozBot.lang = "pt-BR";
    vozBot.volume = 1;
    vozBot.rate = 1;
    vozBot.pitch = 1;
    this.synth.speak(vozBot);
  }

  adicionarChat(entrada: any, produto: any) {
    let divMensagens: any = document.querySelector(".mensagens");

    let divUsuario = document.createElement("div");
    divUsuario.id = "chat-usuario";
    divUsuario.className = "chat-usuario";
    divUsuario.innerHTML = `<span>${entrada}</span>`;
    divMensagens?.appendChild(divUsuario);

    let divBot = document.createElement("div");
    let textoBot = document.createElement("span");
    divBot.id = "div-texto-bot";
    divBot.className = "resposta-bot";
    textoBot.innerText = "Digitando...";
    divBot.appendChild(textoBot);
    divMensagens?.appendChild(divBot);

    divMensagens.scrollTop = divMensagens?.scrollHeight - divMensagens?.clientHeight;

    setTimeout(() => {
      textoBot.innerText = `${produto}`;
      this.voz(produto)
    }, 1500)
  }

  saida(entrada: string) {
    let produto;

    let texto = entrada.toLowerCase().trim();
    texto = texto
    .replace(/ um /g, "")
    .replace(/olá/g, "ola")
    .replace(/você/g, "voce")
    .replace(/ uma /g, "")
    .replace(/vc/g, "voce")
    .replace(/está/g, "ta")
    .replace(/esta/g, "ta");

    if(this.compare(this.falasUsuario, this.respostas, texto)) {
      produto = this.compare(this.falasUsuario, this.respostas, texto);
    } else if(texto.match(/obrigado/gi)) {
      produto = "De nada =)"
    } else {
      produto = this.alternativas[Math.floor(Math.random() * this.alternativas.length)];
    }

    this.adicionarChat(entrada, produto);
  }

}
