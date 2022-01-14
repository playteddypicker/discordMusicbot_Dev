const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('setstatus')
		.setDescription('나만쓸거야')
		.addStringOption(option =>
			option
				.setName('setstatusmsg')
				.setDescription('asdf')
				.setRequired(true)),
	async execute(interaction){
		if(interaction.member.id != '653157614452211712') return interaction.reply('쓰지마세요.');

		const msg = interaction.options.getString('setstatusmsg');
		interaction.client.user.setActivity(`${msg}`, {type: 'PLAYING'});
		interaction.reply('설정완료');
	}
}
