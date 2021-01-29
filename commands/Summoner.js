const Discord = require('discord.js');
const fetch = require('node-fetch');
const { RIOTAPIKEY } = require('../config.json');

module.exports = {

    name: 'summoner',
    description: 'Pulls summoner information',
    usage: '<region> <summoner name>',
    args: true,
    guildOnly: true,

    async execute(message, args) {

        const region = args[0];
        const inName = args[1];

        if (args[0] === undefined || args[1] === undefined) return message.reply('Usage: -summoner <region> <summoner name>');

        try {

            // NA
            if (region === 'NA' || region === 'na') {
                const { accountId, name, id, summonerLevel } = await fetch(`https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${inName}?api_key=${RIOTAPIKEY}`).then(response => response.json());
                console.log('First fetch completed');

                const NAResponse = await fetch(`https://na1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${RIOTAPIKEY}`).then(response => response.json());
                console.log('Second fetch completed');

                console.log(NAResponse);

                if (NAResponse === undefined || NAResponse.length == 0) {
                    const embed = new Discord.MessageEmbed()
                    .setColor(0x00AE86)
                    .setAuthor('Chineser', 'https://i.gyazo.com/thumb/1200/c3f5dbb6c885e84ca376dce711db2c2a-png.jpg')
                    .setTitle('Player Profile')
                    .addFields({ name: 'Summoner Name', value: `${name}` })
                    .addFields({ name: 'Summoner Level', value: `${summonerLevel}` })
                    .addFields({ name: 'Ranked Solo / Duo', value: 'Unranked' });

                    message.channel.send(embed);
                }

                else {
                    const queueType = NAResponse[0].queueType;
                    const rank = NAResponse[0].rank;
                    const tier = NAResponse[0].tier;
                    const leaguePoints = NAResponse[0].leaguePoints;
                    const wins = NAResponse[0].wins;
                    const losses = NAResponse[0].losses;

                    let winRatio = 100 * (wins / (wins + losses));
                    winRatio = winRatio.toFixed(0);

                    console.log(NAResponse);

                    if (queueType === 'RANKED_SOLO_5x5') {
                        const embed = new Discord.MessageEmbed()
                        .setColor(0x00AE86)
                        .setAuthor('Chineser', 'https://i.gyazo.com/thumb/1200/c3f5dbb6c885e84ca376dce711db2c2a-png.jpg')
                        .setTitle('Player Profile')
                        .addFields({ name: 'Summoner Name', value: `${name}` })
                        .addFields({ name: 'Summoner Level', value: `${summonerLevel}` })
                        .addFields({ name: 'Ranked Solo / Duo', value: `${tier} ${rank} ${leaguePoints} LP` })
                        .addFields({ name: 'Win / Loss Ratio', value: `${wins}W / ${losses}L | ${winRatio}%` });

                        message.channel.send(embed);
                    }

                    else if (queueType === 'RANKED_FLEX_SR') {
                        const embed = new Discord.MessageEmbed()
                        .setColor(0x00AE86)
                        .setAuthor('Chineser', 'https://i.gyazo.com/thumb/1200/c3f5dbb6c885e84ca376dce711db2c2a-png.jpg')
                        .setTitle('Player Profile')
                        .addFields({ name: 'Summoner Name', value: `${name}` })
                        .addFields({ name: 'Summoner Level', value: `${summonerLevel}` })
                        .addFields({ name: 'Ranked Flex 5V5', value: `${tier} ${rank} ${leaguePoints} LP` })
                        .addFields({ name: 'Win / Loss Ratio', value: `${wins}W / ${losses}L | ${winRatio}%` });

                        message.channel.send(embed);
                    }
                }
            }

            // EUW
            else if (region === 'EUW' || region === 'euw') {
                const { accountId, name, id, summonerLevel } = await fetch(`https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${inName}?api_key=${RIOTAPIKEY}`).then(response => response.json());
                console.log('First fetch completed');

                const EUResponse = await fetch(`https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${RIOTAPIKEY}`).then(response => response.json());
                console.log('Second fetch completed');

                console.log(EUResponse);

                if (EUResponse === undefined || EUResponse.length == 0) {
                    const embed = new Discord.MessageEmbed()
                    .setColor(0x00AE86)
                    .setAuthor('Chineser', 'https://i.gyazo.com/thumb/1200/c3f5dbb6c885e84ca376dce711db2c2a-png.jpg')
                    .setTitle('Player Profile')
                    .addFields({ name: 'Summoner Name', value: `${name}` })
                    .addFields({ name: 'Summoner Level', value: `${summonerLevel}` })
                    .addFields({ name: 'Ranked Solo / Duo', value: 'Unranked' });

                    message.channel.send(embed);
                }

                else {
                    const queueType = EUResponse[0].queueType;
                    const rank = EUResponse[0].rank;
                    const tier = EUResponse[0].tier;
                    const leaguePoints = EUResponse[0].leaguePoints;
                    const wins = EUResponse[0].wins;
                    const losses = EUResponse[0].losses;

                    let winRatio = 100 * (wins / (wins + losses));
                    winRatio = winRatio.toFixed(0);

                    console.log(EUResponse);

                    if (queueType === 'RANKED_SOLO_5x5') {
                        const embed = new Discord.MessageEmbed()
                        .setColor(0x00AE86)
                        .setAuthor('Chineser', 'https://i.gyazo.com/thumb/1200/c3f5dbb6c885e84ca376dce711db2c2a-png.jpg')
                        .setTitle('Player Profile')
                        .addFields({ name: 'Summoner Name', value: `${name}` })
                        .addFields({ name: 'Summoner Level', value: `${summonerLevel}` })
                        .addFields({ name: 'Ranked Solo / Duo', value: `${tier} ${rank} ${leaguePoints} LP` })
                        .addFields({ name: 'Win / Loss Ratio', value: `${wins}W / ${losses}L | ${winRatio}%` });

                        message.channel.send(embed);
                    }

                    else if (queueType === 'RANKED_FLEX_SR') {
                        const embed = new Discord.MessageEmbed()
                        .setColor(0x00AE86)
                        .setAuthor('Chineser', 'https://i.gyazo.com/thumb/1200/c3f5dbb6c885e84ca376dce711db2c2a-png.jpg')
                        .setTitle('Player Profile')
                        .addFields({ name: 'Summoner Name', value: `${name}` })
                        .addFields({ name: 'Summoner Level', value: `${summonerLevel}` })
                        .addFields({ name: 'Ranked Flex 5V5', value: `${tier} ${rank} ${leaguePoints} LP` })
                        .addFields({ name: 'Win / Loss Ratio', value: `${wins}W / ${losses}L | ${winRatio}%` });

                        message.channel.send(embed);
                    }
                }
            }

            // KR
            else if (region === 'KR' || region === 'kr') {
                const { accountId, name, id, summonerLevel } = await fetch(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/${inName}?api_key=${RIOTAPIKEY}`).then(response => response.json());
                console.log('First fetch completed');

                const KRResponse = await fetch(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=${RIOTAPIKEY}`).then(response => response.json());
                console.log('Second fetch completed');

                console.log(KRResponse);

                if (KRResponse === undefined || KRResponse.length == 0) {
                    const embed = new Discord.MessageEmbed()
                    .setColor(0x00AE86)
                    .setAuthor('Chineser', 'https://i.gyazo.com/thumb/1200/c3f5dbb6c885e84ca376dce711db2c2a-png.jpg')
                    .setTitle('Player Profile')
                    .addFields({ name: 'Summoner Name', value: `${name}` })
                    .addFields({ name: 'Summoner Level', value: `${summonerLevel}` })
                    .addFields({ name: 'Ranked Solo / Duo', value: 'Unranked' });

                    message.channel.send(embed);
                }

                else {
                    const queueType = KRResponse[0].queueType;
                    const rank = KRResponse[0].rank;
                    const tier = KRResponse[0].tier;
                    const leaguePoints = KRResponse[0].leaguePoints;
                    const wins = KRResponse[0].wins;
                    const losses = KRResponse[0].losses;

                    let winRatio = 100 * (wins / (wins + losses));
                    winRatio = winRatio.toFixed(0);

                    console.log(KRResponse);

                    if (queueType === 'RANKED_SOLO_5x5') {
                        const embed = new Discord.MessageEmbed()
                        .setColor(0x00AE86)
                        .setAuthor('Chineser', 'https://i.gyazo.com/thumb/1200/c3f5dbb6c885e84ca376dce711db2c2a-png.jpg')
                        .setTitle('Player Profile')
                        .addFields({ name: 'Summoner Name', value: `${name}` })
                        .addFields({ name: 'Summoner Level', value: `${summonerLevel}` })
                        .addFields({ name: 'Ranked Solo / Duo', value: `${tier} ${rank} ${leaguePoints} LP` })
                        .addFields({ name: 'Win / Loss Ratio', value: `${wins}W / ${losses}L | ${winRatio}%` });

                        message.channel.send(embed);
                    }

                    else if (queueType === 'RANKED_FLEX_SR') {
                        const embed = new Discord.MessageEmbed()
                        .setColor(0x00AE86)
                        .setAuthor('Chineser', 'https://i.gyazo.com/thumb/1200/c3f5dbb6c885e84ca376dce711db2c2a-png.jpg')
                        .setTitle('Player Profile')
                        .addFields({ name: 'Summoner Name', value: `${name}` })
                        .addFields({ name: 'Summoner Level', value: `${summonerLevel}` })
                        .addFields({ name: 'Ranked Flex 5V5', value: `${tier} ${rank} ${leaguePoints} LP` })
                        .addFields({ name: 'Win / Loss Ratio', value: `${wins}W / ${losses}L | ${winRatio}%` });

                        message.channel.send(embed);
                    }
                }
            }
        }

        catch (error) {
            console.error(error);
            message.reply('Summoner is not ranked or does not exist.');
        }

    },

};