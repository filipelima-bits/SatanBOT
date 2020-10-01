// Este evento dispara no instante em que um membro sofre uma punição

const Discord = require('discord.js');

module.exports = (client, guild, user) => {
    guild.fetchAuditLogs({ type: 22  }).then(logs => {
		// GuildAuditLogsEntry for this user and type
		if (user.id == logs.entries.first().target.id) {
			banMember = logs.entries.first().target
			let modlog = client.channels.cache.get(process.env.MODLOGS);
			if (!modlog) return console.log(chalk.redBright("Canal de logs de moderação não existe!!"));
            
            var embedBanOne = new Discord.MessageEmbed()
				.setColor('#fa1b1b')
				.setTimestamp()
                .addField('Action', "Ban", true)
                .setTitle('Aurevoir')
				.addField('Target', `${banMember.tag} `, true)
				.addField('Moderator', logs.entries.first().executor.tag, true)
				.addField('Reason', 'Please provide a reason for ban:', false)
                .setFooter(`Usuário banido (${banMember.id})`, banMember.displayAvatarURL());
                
            var embedBanTwo = new Discord.MessageEmbed()
				.setColor('#fa1b1b')
				.setTimestamp()
                .addField('Action', "Ban", true)
                .setTitle('Alguém aprontou em...')
				.addField('Target', `${banMember.tag} `, true)
				.addField('Moderator', logs.entries.first().executor.tag, true)
				.addField('Reason', 'Please provide a reason for ban:', false)
                .setFooter(`Usuário banido (${banMember.id})`, banMember.displayAvatarURL());
            
            var embedBanThree = new Discord.MessageEmbed()
				.setColor('#fa1b1b')
				.setTimestamp()
                .addField('Action', "Ban", true)
                .setTitle('Culpado!')
				.addField('Target', `${banMember.tag} `, true)
				.addField('Moderator', logs.entries.first().executor.tag, true)
				.addField('Reason', 'Please provide a reason for ban:', false)
				.setFooter(`Usuário banido (${banMember.id})`, banMember.displayAvatarURL());
            
            var embedBanFour = new Discord.MessageEmbed()
				.setColor('#fa1b1b')
				.setTimestamp()
                .addField('Action', "Ban", true)
                .setTitle('Pensou que sairia impune? jamais!')
				.addField('Target', `${banMember.tag} `, true)
				.addField('Moderator', logs.entries.first().executor.tag, true)
				.addField('Reason', 'Please provide a reason for ban:', false)
				.setFooter(`Usuário banido (${banMember.id})`, banMember.displayAvatarURL());
            
            let choice = Math.floor(Math.random() * 4);

            if (choice === 0) {
                modlog.send({embed: embedBanOne}).catch();
            } else if (choice === 1) {
                modlog.send({embed: embedBanTwo}).catch();
            } else if (choice === 2) {
                modlog.send({embed: embedBanThree}).catch();
            } else {
                modlog.send({embed: embedBanFour}).catch();
		    } 
        }
    });
};