// O evento dispara quando entra um membro no servidor

const moment = require('moment');
const Discord = require('discord.js');

module.exports = async (client, member) => {
    const daysSinceCreation = moment().diff(moment(member.user.createdAt), 'days');
    const domaincount = member.user.username.match(/\b((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}\b/);
    if (domaincount > 0 || daysSinceCreation < 3) return (() => {
        member.send('Hey, você foi kickado automáticamente do servidor por suspeitas de divulgação. Contas com menos de 3 dias não podem entrar ao servidor também').catch();
        member.kick('Autokick: Divulgação ou conta muito recente!').catch();
    });

    const welcomeMessage = new Discord.MessageEmbed()
        .setThumbnail(`${member.displayAvatarURL}`)
        .setColor('#fa1b1b')
        .setTitle('🎈 Bem-vindo(a)!')
        .setDescription(`
        -ˏˋ Olá ${member}, seja bem-vindo(a)! ˎˊ-  

        ╭─► 🎀 | **Passe nos canais abaixo:**
        ╰────────────────────
        
        ┌───────────────────┐
        ┇● #°๑ˑ₍📋₎│registro ➩ Registre-se!
        ┇● #°๑ˑ₍🧸₎│orientações ➩ Veja as orientações!
        ┇● #°๑ˑ₍🌈₎│cores ➩ Cores para nick!
        ┇● #°๑ˑ₍🏓₎│pings ➩ Para notificações!
        └───────────────────┘

        `)
        .setFooter(`${member} (id: ${member.id})`, member.displayAvatarURL())
        .setTimestamp()

        client.channels.cache.get(process.env.TESTCHANNEL).send(welcomeMessage).catch();
}