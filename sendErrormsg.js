const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('senderrormsg')
		.setDescription('사용 금지')
		.addStringOption(option =>
			option
				.setName('guildid')
				.setDescription('do not use')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('toannounce')
				.setDescription('ㅅㅂ')
		 		.setRequired(true)),
	async execute(interaction){
		if(interaction.member.id != '653157614452211712') return interaction.reply('쓰지마세요.');
		const guildId = interaction.options.getString('guildid');
		const guild = await interaction.client.guilds.fetch(guildId);
		const msg = interaction.options.getString('toannounce');

		const msgchannel = await guild.channels.cache.find(ch => ch.type == 'GUILD_TEXT');
		msgchannel.send(msg);
		interaction.reply('성공적으로 보냄')
	}
}
