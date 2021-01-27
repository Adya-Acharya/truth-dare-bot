const { MessageEmbed } = require('discord.js');
module.exports = {
    name : 'truth',
    execute(client,message,args){
        let question = client.truths[Math.floor(Math.random() * client.truths.length)];
        const embed = new MessageEmbed()
        .setTitle('Truth')
        .setDescription(question)
        .setColor('RANDOM')
        message.channel.send(embed);
    }
}