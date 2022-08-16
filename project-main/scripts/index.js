/*import { Client } from '../node_modules/whatsapp-web.js';
import qrcode from '../node_modules/qrcode-terminal';

//const { Client} = require('whatsapp-web.js');
//const qrcode = require('qrcode-terminal');

export const client = new Client();
client.on('qr', (qr) => {
    console.log('QR received', qr);
    qrcode.generate(qr, {small: true});
});
client.on('ready', () => {
    console.log('Client is ready');
});
client.initialize();
client.on('message', message => {
    console.log(message.body);
});
client.on('message', message => {
    if(message.body === '!ping') {
        message.reply('pong');
    }
});*/