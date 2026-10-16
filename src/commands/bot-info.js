const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');
const package = require('../../package.json');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('bot-info')
        .setDescription('關於機器人'),
    async execute (interaction, client) {
        const aboutEmbed = new MessageEmbed()
            .setColor('#FFFFFF')
            .setTitle('喝個搖搖')
            .setURL('https://github.com/sky9154/Discord-Drink-Menu-Bot')
            .setDescription('Discord 手搖飲料菜單搜尋機器人')
            .addFields({
                    name: 'Bot Name',
                    value: `\`${client.user.tag}\``,
                    inline: true
                }, {
                    name: 'NodeJS',
                    value: `\`v${package.engines['node']}\``,
                    inline: true
                }, {
                    name: 'DiscordJS',
                    value: `\`${package.dependencies['discord.js'].replace('^', 'v')}\``,
                    inline: true
                })
            .setImage('docs/images/logo.png')
            .setTimestamp()
            .setFooter({
                text: 'Copyright © 2022 oF',
                iconURL: 'https://cdn.discordapp.com/attachments/858423378029314088/1005732194532216842/author.png'
            });

		const aboutButtons = new MessageActionRow()
        .addComponents(
            new MessageButton()
                .setLabel('𝗚𝗜𝗧𝗛𝗨𝗕')
                .setURL('https://github.com/sky9154/Discord-Drink-Menu-Bot')
                .setStyle('LINK')
                .setEmoji('<a:blobreach:983792417998266468>'),

            new MessageButton()
                .setURL('https://discord.com/api/oauth2/authorize?client_id=998893788799963226&permissions=8&scope=applications.commands%20bot')
                .setStyle('LINK')
                .setLabel('𝗜𝗡𝗩𝗜𝗧𝗘 𝗠𝗘')
                .setEmoji('<a:blobreach:984878616338890812>'),
        );

        await interaction.reply({
            embeds: [aboutEmbed],
            components: [aboutButtons]
        });
    }
};