module.exports = {
    name : 'help',
    execute(client,message,args){
        message.channel.send(`
        **LIST OF ALL COMMANDS**
${client.prefix}truth -> to get a truth question
${client.prefix}dare -> to get a dare
${client.prefix}help -> to view this message

**Made by:** ArmoredVortex#8513
**Contributers:** Devansh#6106, Adya Acharya#0532 
        `)
    }
}