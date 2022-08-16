const fs = require('fs');
const qrcode = require('qrcode-terminal');
const { Client, LocalAuth } = require('whatsapp-web.js');
const client = new Client({
    authStrategy: new LocalAuth({ clientId: "client" })
});
client.on('qr', (qr) => {
    console.log('QR received', qr);
    qrcode.generate(qr, {small: true});
});
client.on('message', message => {
    console.log(message.body);
});
client.initialize();
client.on('ready', () => {
    console.log('Client is ready');
});
    client.on('message', message => {
        client.getChats().then(chats => {
            const myGroup = chats.find(
                (chat) => chat.name === 'Hackathon'
            );
            if(myGroup.name === 'Hackathon') {
                var message1 = (message.body).toLowerCase()
                .replace(/[ÀÁÂÃÄÅ]/g,"A")
                .replace(/[àáâãäå]/g,"a")
                .replace(/[ÈÉÊË]/g,"E")
                .replace(/[ÒÓÔÕ]/g,"O")
                .replace(/[ÙÚÛ]/g,"U")
                .replace(/[^a-zA-Z0-9 ]/g, "")
                var message2 = message1.split(' ');
                console.log(message2)
                if(message2.includes('esta', 0) && (message2.includes('dormir'))){
                    setTimeout(() => {
                        client.sendMessage(message.from, 'A dormir o caralho! Quem fez tudo fui eu!!')
                    }, 3000)
                 } else if(message2.includes('fizeram', 0)) {
                     setTimeout(() => {
                        client.sendMessage(message.from, 'A tua prima!')
                    }, 3000)
                } else if(message2.includes('fazem',0) && message2.includes('que')) {
                    setTimeout(() => {
                       client.sendMessage(message.from, 'HEHEHE')
                    }, 3000)
                } else if(message2.includes('arrancas')) {
                    setTimeout(() => {
                       client.sendMessage(message.from, 'Oh Daniel, assim podes ir ter com a Lurdes e deixas o primo a falar com a tua mulher')
                    }, 3000)
                } else if(message2.includes('afhalifhalfhalifhaf')) {
                    setTimeout(() => {
                       client.sendMessage(message.from, 'Que?!')
                    }, 5000)
                    }
                }
        });
    });