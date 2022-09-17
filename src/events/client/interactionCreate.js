const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');
const { GUILD_ID, CLIENT_ID, token } = require('../../../config.json');


module.exports = {
    name: 'interactionCreate',
    once: true,
    async execute(interaction, client) {
        if (interaction.isChatInputCommand()){
            const { commands } = client;
            const {commandName} = interaction
            const command = commands.get(commandName);
            if (!command) return;
            
            try {
                await command.execute(interaction, client);
            } catch (error){
                console.error(error);
                await interaction.reply({
                    content: 'Algo salio mal compita :c',
                    ephemeral: true
                });
            }
    

        }


        const rest = new REST({ version: '9'}).setToken(token);
        try {
            console.log('Started refreshing application (/) commands.');
        
            await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { 
                body: client.commandArray });
            
            console.log('Successfully reloaded application (/) commands.');
          } catch (error) {
            console.error(error);
          }
    }
}