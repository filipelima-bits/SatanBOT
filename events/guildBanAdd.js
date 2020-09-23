// Este evento dispara no instante em que um membro sofre uma punição

const moment = require('moment');
const Discord = require('discord.js');

module.exports = async (client, member) => {
    const messageBanOne = new Discord.MessageEmbed()
        .setColor('#fa230f')
        .setTitle('Aurevoir ❗')
        .setDescription(`${member} banido do servidor!!
        Leia as regras que estão no canal de #°๑ˑ₍🧸₎│orientações para evitar situações como essas.`)
        .setFooter(`${member.user.username}`,`${member.user.displayAvatarURL}`)
        .setTimestamp()

    const messageBanTwo = new Discord.MessageEmbed()
        .setColor('#fa230f')
        .setTitle('Martelado ❗')
        .setDescription(`${member} banido do servidor!!
        Leia as regras que estão no canal de #°๑ˑ₍🧸₎│orientações para evitar situações como essas.`)
        .setFooter(`${member.username}`,`${member.displayAvatarURL}`)
        .setTimestamp()

    const messageBanThree  = new Discord.MessageEmbed()
        .setColor('#fa230f')
        .setTitle('Pensou que sairia impune? jamais ❗')
        .setDescription(`${member} banido do servidor!!
        Leia as regras que estão no canal de #°๑ˑ₍🧸₎│orientações para evitar situações como essas.`)
        .setFooter(`${member.user.username}`,`${member.user.displayAvatarURL}`)
        .setTimestamp()

    const messageBanFour = new Discord.MessageEmbed()
        .setColor('#fa230f')
        .setTitle('Alguém pisou na bola ❗')
        .setDescription(`${member} banido do servidor!!
        Leia as regras que estão no canal de #°๑ˑ₍🧸₎│orientações para evitar situações como essas.`)
        .setFooter(`${member.user.username}`,`${member.user.displayAvatarURL}`)// Erros aqui nas váriaveis
        .setTimestamp()

    let choice = Math.floor(Math.random() * 4);

    if (choice === 0) {
        member.guild.channels.get(process.env.TESTCHANNEL).send(messageBanOne).catch();
    } else if (choice === 1) {
        member.guild.channels.get(process.env.TESTCHANNEL).send(messageBanTwo).catch();
    } else if (choice === 2) {
        member.guild.channels.get(process.env.TESTCHANNEL).send(messageBanThree).catch();
    } else {
        member.guild.channels.get(process.env.TESTCHANNEL).send(messageBanFour).catch();
    };
}