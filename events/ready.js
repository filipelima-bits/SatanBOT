// Esse evento será disparado no instante em que o bot estiver online

module.exports = async (client) => {
    console.log(`Bot ${client.user.username} online agora! Tenho ${client.users.cache.size} usuário(s) e estou em um total de ${client.guilds.cache.size} servidores!`);

    client.user.setActivity(`${process.env.GAME}help`, {type: "PLAYING"});
};