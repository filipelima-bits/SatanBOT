// O evento dispara quando entra um membro no servidor

const moment = require('moment');
const Discord = require('discord.js');

module.exports = async (client, member) => {
    
    // Proteção contra selfbots

    const daysSinceCreation = moment().diff(moment(member.user.createdAt), 'days');
    const domaincount = member.user.username.match(/\b((?=[a-z0-9-]{1,63}\.)(xn--)?[a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,63}\b/);
    if (domaincount > 0 || daysSinceCreation < 3) return (() => {
        member.send('Hey, você foi kickado automáticamente do servidor por suspeitas de divulgação / contas com menos de 3 dias não podem entrar ao servidor').catch();
        member.kick('Autokick: Divulgação ou conta muito recente!').catch();
    });

    
}