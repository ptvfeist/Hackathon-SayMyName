const express = require("express")
var cors = require('cors')
const app = express()

app.use(cors())

const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth({ clientId: "client" })
});

// Handling GET / request
app.use("/", (req, res, next) => {

    const client = new Client();
    client.on('qr', (qr) => {
        console.log('QR received', qr);
        //qrcode.generate(qr, { small: true });

        res.send(qr)
    });

    client.on('ready', () => {
        console.log('Client is ready');
    });


    client.initialize();

    mshHangler(client);

})



// Handling GET /hello request
app.get("/hello", (req, res, next) => {
    res.send("This is the hello response");
})

// Server setup
app.listen(3000, () => {
    console.log("Server is Running")
})


function mshHangler(client) {
client.on('message', message => {
    client.getChats().then(chats => {
        const myGroup = chats.find(
            (chat) => chat.name === 'Hackathon'
        );
        if (myGroup.name === 'Hackathon') {
            var message1 = (message.body).toLowerCase();
            var message1 = message1.replace(/[ÀÁÂÃÄÅ]/g, "A")
                .replace(/[àáâãäå]/g, "a")
                .replace(/[ÈÉÊË]/g, "E")
                .replace(/[éèê]/g, "e")
                .replace(/[ÒÓÔÕ]/g, "O")
                .replace(/[ÙÚÛ]/g, "U")
                .replace(/[^a-zA-Z0-9 ]/g, "")
            var message2 = message1.split(' ');
            console.log(message2)
            /*Greetings*/
            if(message2.includes('alo',0) || message2.includes('ola',0) || message2.includes('olaa',0) || message2.includes('olaaa',0) || message2.includes('olaaaa',0)
    || message2.includes('oi',0) || message2.includes('oii',0) || message2.includes('oiii',0) || message2.includes('oiiii',0)){
        var rand1 = Math.floor(Math.random()*5 +1);
        setTimeout(() => {
            switch(rand1){
                case 1:
                    client.sendMessage(message.from, 'Oi tudo bem?')
                    break;
                case 2:
                    client.sendMessage(message.from, 'Ola amor')
                    break;
                case 3:
                    client.sendMessage(message.from, 'Hey, paixão! :beijo_com_coração:')
                    break;
                case 4:
                    client.sendMessage(message.from, 'Ehhhh cariño')
                    break;
                case 5:
                    client.sendMessage(message.from, 'Eu amo o Aldino :coração_laranja:')
            }
        }, 3000);
    }
    if(message2.includes('tudo',0) && message2.includes('bem',0)){
        var rand1 = Math.floor(Math.random()*5 +1);
        setTimeout(() => {
            switch(rand1){
                case 1:
                    client.sendMessage(message.from, 'ya e contigo')
                    break;
                case 2:
                    client.sendMessage(message.from, 'Oi amor,ta tudo')
                    break;
                case 3:
                    client.sendMessage(message.from, ':gesto_ok::apontando_para_a_esquerda:')
                    break;
                case 4:
                    client.sendMessage(message.from, 'Dor de costas, preciso de uma massagem')
                    break;
                case 5:
                    client.sendMessage(message.from, 'Nem por isso, saudades do Aldino :coração_batendo:')
            }
        }, 3000);
    }
    if(message2.includes('como',0) && message2.includes('e',0)){
    setTimeout(() => {
        client.sendMessage(message.from, 'é grande :berinjela: ')
    }, 3000);
        }
    }
    if(message2.includes('bom',0) && message2.includes('dia',0)){
        var rand1 = Math.floor(Math.random()*5 +1);
        setTimeout(() => {
            switch(rand1){
                case 1:
                    client.sendMessage(message.from, 'bom dia amor')
                    break;
                case 2:
                    client.sendMessage(message.from, 'Oi amorzinho')
                    break;
                case 3:
                    client.sendMessage(message.from, 'Buenos dias')
                    break;
                case 4:
                    client.sendMessage(message.from, 'Wazzzaaaaa')
                    break;
                case 5:
                    client.sendMessage(message.from, 'Bom dia era se tivesse aqui o Aldino :olhos_de_coração:')
                    break;
            }
        }, 3000);
    }
    if(message2.includes('boa',0) && message2.includes('tarde',0)){
        var rand1 = Math.floor(Math.random()*5 +1);
        setTimeout(() => {
            switch(rand1){
                case 1:
                    client.sendMessage(message.from, 'boa tarde amorzinho, tudo bem?')
                    break;
                case 2:
                    client.sendMessage(message.from, 'oi oi')
                    break;
                case 3:
                    client.sendMessage(message.from, 'Buenas tardes')
                    break;
                case 4:
                    client.sendMessage(message.from, 'Wazzzaaaaa')
                    break;
                case 5:
                    client.sendMessage(message.from, 'Boa tarde era se tivesse aqui o Aldino :olhos_de_coração:')
                    break;
            }
        }, 3000);
    }
    if(message2.includes('boa',0) && message2.includes('noite',0)){
        var rand1 = Math.floor(Math.random()*5 +1);
        setTimeout(() => {
            switch(rand1){
                case 1:
                    client.sendMessage(message.from, 'boa noite amor')
                    break;
                case 2:
                    client.sendMessage(message.from, 'Tou com saudades tuas :feliz:')
                    break;
                case 3:
                    client.sendMessage(message.from, 'Buenas noches')
                    break;
                case 4:
                    client.sendMessage(message.from, 'Wazzzaaaaa')
                    break;
                case 5:
                    client.sendMessage(message.from, 'Boa noite era se tivesse aqui o Aldino :olhos_de_coração:')
                    break;
            }
        }, 3000);
    }
    /*Greetings*/
    /* Generic answers to generic questions  */
    if(message2.includes('tas',0) || message2.includes('estas', 0) && message2.includes('ai',0)){
        var rand1 = Math.floor(Math.random()*3 +1);
        setTimeout(() => {
            switch(rand1){
                case 1:
                    client.sendMessage(message.from, 'tou amor')
                    break;
                case 2:
                    client.sendMessage(message.from, 'ya, que se passa?')
                    break;
                case 3:
                    client.sendMessage(message.from, 'diz docinho')
                    break;
        }
        }, 3000);
}
    if((message2.includes('onde',0) && message2.includes('estas',0)) || (message2.includes('onde',0) && message2.includes('andas',0))){
        var rand1 = Math.floor(Math.random()*5 +1);
        setTimeout(() => {
            switch(rand1){
                case 1:
                    client.sendMessage(message.from, 'estou escondido na casa')
                    break;
                case 2:
                    client.sendMessage(message.from, 'não te tinha dito?')
                    break;
                case 3:
                    client.sendMessage(message.from, 'é surpresa')
                    break;
                case 4:
                    client.sendMessage(message.from, 'tou no trabalho')
                    break;
                case 5:
                    client.sendMessage(message.from, 'estou onde o Aldino estiver!')
        }
        }, 3000);
    }
    if((message2.includes('estas',0) || message2.includes('tas',0)) && message2.includes('com',0) && message2.includes('quem',0)){
        var rand1 = Math.floor(Math.random()*5 +1);
        setTimeout(() => {
            switch(rand1){
                case 1:
                    client.sendMessage(message.from, 'vim visitar a minha mae')
                    break;
                case 2:
                    client.sendMessage(message.from, 'estou com a malta')
                    break;
                case 3:
                    client.sendMessage(message.from, 'é surpresa')
                    break;
                case 4:
                    client.sendMessage(message.from, 'estou com a outra, haha jk :alegre::alegre::alegre::alegre:')
                    break;
                case 5:
                    client.sendMessage(message.from, 'Estou com o Aldino')
                    break;
        }
        }, 3000);
    }
    if(message2.includes('vamos',0) && (message2.includes('sair',0) || message2.includes('cinema',0) )){
       setTimeout(() => {
        client.sendMessage(message.from, 'ya vamos, ja te digo quando consigo')
       }, 3000);
    }
    if(message2.includes('vamos',0) && (message2.includes('filme',0))){
       setTimeout(() => {
        client.sendMessage(message.from, 'Queres ir ver qual?')
       }, 3000);
    }
    if(message2.includes('meu',0) && message2.includes('aniversario',0) ){
       setTimeout(() => {
        client.sendMessage(message.from, 'claro haha');
       }, 3000);
    }
    if(message2.includes('quando',0) && message2.includes('vamos',0) ){
       setTimeout(() => {
        client.sendMessage(message.from, 'quando tu quiseres :fogo:')
       }, 3000);
    }
    if((message2.includes('vem',0) || message2.includes('vens',0)) && message2.includes('casa',0) || message2.includes('ca',0) ){
       setTimeout(() => {
        client.sendMessage(message.from, 'Estou a ir, dá-me uma horinha')
       }, 3000);
    }
    if(message2.includes('como',0) && message2.includes('dia',0)){
       setTimeout(() => {
        client.sendMessage(message.from, 'melhor agora que me mandaste mensagem')
       }, 3000);
    }
    if(message2.includes('estas',0) && message2.includes('fazer',0)){
       setTimeout(() => {
        client.sendMessage(message.from, 'a pensar em ti <3')
       }, 3000);
    }
    if((message2.includes('andas',0) || message2.includes('andasme',0)) && (message2.includes('trair',0) || message2.includes('trairme',0))){
       setTimeout(() => {
        client.sendMessage(message.from, 'nao sejas tonta amor')
       }, 3000);
    }
    if((message2.includes('estas',0) || message2.includes('tas',0)) && message2.includes('vir',0)){
       setTimeout(() => {
        client.sendMessage(message.from, 'estou a sair de casa agora')
       }, 3000);
    }
    if((message2.includes('estas',0) || message2.includes('tas',0)) && message2.includes('atrasado',0)){
       setTimeout(() => {
        client.sendMessage(message.from, 'furei um pneu')
       }, 3000);
    }
    if(message2.includes('nao',0) && message2.includes('chegaste',0)){
       setTimeout(() => {
        client.sendMessage(message.from, 'furei um pneu')
       }, 3000);
    }
    if(message2.includes('estou',0) && message2.includes('vontade',0)){
       setTimeout(() => {
        client.sendMessage(message.from, 'hoje vou ai ;)')
       }, 3000);
    }
    if(message2.includes('que',0) && message2.includes('cheiro',0)){
       setTimeout(() => {
        client.sendMessage(message.from, 'passei no shopping, era uma amostra')
       }, 3000);
    }
    /* Generic answers to generic questions  */
    if(message2.includes('amote',0)){
       setTimeout(() => {
        client.sendMessage(message.from, 'Tambem te amo muito <3')
       }, 3000);
    }
    if(message2.includes('love',0) && message2.includes('you',0)){
       setTimeout(() => {
        client.sendMessage(message.from, 'tenho saudades tuas')
       }, 3000);
    }
    if(message2.includes('tenho',0) && message2.includes('saudades',0) && message2.includes('tuas',0)){
       setTimeout(() => {
        client.sendMessage(message.from, 'estou mortinho por estar contigo')
       }, 3000);
    }
    if(message2.includes('diz',0) && message2.includes('que',0)&& message2.includes('me',0)&& message2.includes('amas',0)){
       setTimeout(() => {
        client.sendMessage(message.from, 'oh amorzinho, mais do que a vida')
       }, 3000);
    }
    /* Generic answers to Movie questions */
    if(message2.includes('filme',0) || message2.includes('favorito')) {
        setTimeout(() => {
            client.sendMessage(message.from, 'Pode ser')
        }, 2000);
    }
    if((message2.includes('queres',0) || message2.includes('vamos',0)) && (message2.includes('jantar',0) && message2.includes('fora',0))){
        setTimeout(() => {client.sendMessage(message.from, 'pode ser mor')}, 1000);
        setTimeout(() => {client.sendMessage(message.from, 'vou levar-te a um restaurante especial ;)')}, 3000);
        setTimeout(() => {client.sendMessage(message.from, 'ocorreu um imprevisto mor, já te ligo')}, 5000);
    }
    if((message2.includes('queres',0) || message2.includes('vamos',0)) && (message2.includes('jantar',0) && message2.includes('mae',0))){
        setTimeout(() => {client.sendMessage(message.from, 'okaay, sabes que adoro jantar lá :*')}, 1000);
    }
})})};