const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Regresa la latencia'),
    async execute (interaction, client){
        const message = await interaction.deferReply({
            fetchReply: true
        });

        const newMessage =`LATENCIA: ${client.ws.ping}\nPing del cliente: ${message.createdTimestamp - interaction.createdTimestamp}`;
        await interaction.editReply({
            content: newMessage
        });
    }
        
}