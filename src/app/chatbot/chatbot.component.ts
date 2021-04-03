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
      ["te amo", "eu te amo"],
      ["obrigado", "valeu", "thanks", "thx", "obrigada", "vlw"],
      ["boa noite"],
      ["boa tarde"],
      ["bom dia"],
      ["quais sao seus produtos", "o que voces vendem", "o que voce vende"]
  ];

  respostas = [
      ["Oi!", "Olá!"],
      ["Estou bem, e você?", "Ótima, e você?", "Hmmm, estou ótima. Como você está?"],
      ["Aguarde um momento, estamos te redirecionando para uma atendente..."],
      ["Eu também amo todos os clientes da Efeito Eco <3"],
      ["De nada :)"],
      ["Boa noite"],
      ["Boa tarde"],
      ["Bom dia"],
      ["Para descobrir nossos maravilhosos produtos, <a routerLink='/produtos'>clique aqui</a>"]
  ];

  alternativas = [
      "Não entendi o que você disse :(",
      "Você pode repetir, por favor?",
      "Tente dizer novamente, por favor",
      `Você pode tentar falar com um de nossos colaboradores <a href="#">clicando aqui</a>`
  ];

  synth = window.speechSynthesis;

  botaoAtivado: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  botaoTransparente() {
    if(!this.botaoAtivado) {
      let botao: any = document.getElementById("botao-chatbot");
      botao.style.opacity = "0.5";
      botao.style.transform = "translateY(+3px)";
    }
  }

  botaoOpaco() {
    let botao: any = document.getElementById("botao-chatbot");
    botao.style.opacity = "1";
    botao.style.transform = "translateY(-3px)";
  }

  mostrarChat() {
    let chatChatbot:any = document.getElementById("chat-chatbot");
    let displayChatbot = getComputedStyle(chatChatbot).display;

    if(displayChatbot == "none") {
      chatChatbot.style.display = "block";
      this.botaoAtivado = true;
    } else {
      chatChatbot.style.display = "none";
      this.botaoAtivado = false;
    }
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
    divUsuario.innerHTML = `
      <div style="display: flex; width: 100%; flex-direction: row-reverse; margin-top: 10px;">
        <div style="padding: 4px 6px 4px 6px; border-radius: 4px; border: 1px solid rgba(0, 0, 0, .5); display: inline-block; max-width: 80%">
          <span>
            ${entrada}
          </span>
        </div>
      </div>`;
    divMensagens?.appendChild(divUsuario);

    let divBot = document.createElement("div");
    divBot.id = "div-texto-bot";
    divBot.className = "resposta-bot";
    let textoBot: string = "Digitando..."
    divBot.innerHTML = `
      <div style="display: flex; width: 80%; margin-top: 10px;">
        <div style="padding: 4px 6px 4px 6px; border-radius: 4px; border: 1px solid rgba(0, 0, 0, .5); display: inline-block;">
          <span>
            ${textoBot}
          </span>
        </div>
      </div>`;
    divMensagens?.appendChild(divBot);

    divMensagens.scrollTop = divMensagens?.scrollHeight - divMensagens?.clientHeight;

    setTimeout(() => {
      textoBot = `${produto}`
      divBot.innerHTML = `
        <div style="display: flex; width: 80%; margin-top: 10px;">
          <div style="padding: 4px 6px 4px 6px; border-radius: 4px; border: 1px solid rgba(0, 0, 0, .5); display: inline-block;">
            <span>
              ${textoBot}
            </span>
          </div>
        </div>`;
    divMensagens?.appendChild(divBot);

      this.voz(produto)
    }, 1200)
  }

  saida(entrada: string) {
    let produto;

    let texto = entrada.toLowerCase().trim();
    texto = texto
    .replace(/ um /g, "")
    .replace(/olá/g, "ola")
    .replace(/você/g, "voce")
    .replace(/vocês/g, "voces")
    .replace(/são/g, "sao")
    .replace(/ uma /g, "")
    .replace(/vc/g, "voce")
    .replace(/vcs/g, "voces")
    .replace(/está/g, "ta")
    .replace(/esta/g, "ta");

    if(this.compare(this.falasUsuario, this.respostas, texto)) {
      produto = this.compare(this.falasUsuario, this.respostas, texto);
    } else {
      produto = this.alternativas[Math.floor(Math.random() * this.alternativas.length)];
    }

    this.adicionarChat(entrada, produto);
  }

}