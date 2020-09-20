if (process.version.slice(1).split('.'[0]) < 8) throw new Error('Node superior a 8.0.0 é necessário para essa execução. Atualize seu Node.');

require('dotenv').config();

const Discord = require('discord.js');
const { readdirSync } = require('fs');
const Enmap = require('enmap');
const client = new Discord.Client();

client.commands = new Enmap();
client.startTime = Date.now();

const cmdFiles = readdirSync('./commands/');
console.log('log', `Carregando total de ${cmdFiles.length} comandos do bot.`)

cmdFiles.forEach(f => {
    try {
        const props = require(`./commands/${f}`);
        if (f.split('.').slice(-1)[0] !== 'js') return;

        console.log('log', `Carregando comando: ${props.help.name}`);

        if (props.init) props.init(client);

        client.commands.set(props.help.name, props);
        if (props.help.aliases) {
            props.alias = true;
            props.help.aliases.forEach(alias => client.commands.set(alias, props));
        }
    } catch (e) {
        console.log(`Não foi possível executar o comando ${f}: ${e}`);
    }
});

const evtFiles = readdirSync('./events/');
console.log('log', `Carregando total de ${evtFiles.length} eventos.`);
evtFiles.forEach(f => {
    const eventName = f.split('.')[0];
    const  event = require(`./events/${f}`);

    client.on(eventName, event.bind(null, client));
});

client.login(process.env.AUTH_TOKEN);
// O trecho do código accima vai iniciar o bot.