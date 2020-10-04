// Este evento dispara no instante em que um membro sofre uma punição

const Discord = require('discord.js');

module.exports = (client, guild, user) => {
    guild.fetchAuditLogs({ type: 22  }).then(logs => {
		// GuildAuditLogsEntry for this user and type
		if (user.id == logs.entries.first().target.id) {
			banMember = logs.entries.first().target
			let modlog = client.channels.cache.get(process.env.TESTCHANNEL);
			if (!modlog) return console.log(chalk.redBright("Canal de logs de moderação não existe!!"));
            
            var embedBan = new Discord.MessageEmbed()
				// .addField('Action', "Ban", true)
				.setColor('#fa1b1b')
				.setTimestamp()
				.setTitle('Membro banido !!')
				.setDescription(`O membro **${banMember.tag}** foi banido pelo staffer **${logs.entries.first().executor.tag}**`)
                .setFooter(`${banMember.tag}`, banMember.displayAvatarURL());
            
            modlog.send({embed: embedBan}).catch();
		     
        }
    });
};