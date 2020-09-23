// Esse evento será disparado no instante em que o bot estiver online

module.exports = async (client) => {
    console.log(`O bot ${client.user.username} está online agora em ${client.guilds.cache.size} servidores e com um total de ${client.users.cache.size} usuários!`);

    client.user.setActivity(`${process.env.GAME}`, {type: "PLAYING"});
};