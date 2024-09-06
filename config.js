const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("94711451319")
global.mongodb = process.env.MONGODB_URI || "'postgres://vajiratech_user:oSIFl2xmSojMZ0rkzdd0g0W6msuVTpNN@dpg-cpd7fjv109ks73e5gtig-a.frankfurt-postgres.render.com/vajiratech' : process.env.POSTGRESQL_URL,"
global.port= process.env.PORT || 5000
global.email = 'sam@sec.live'
global.github = 'https://github.com/Nadeenpoorna-max/NADEEN-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/nadeenpoorna' // add your username
global.devs = '94711451319';
global.website = 'https://youtue.com/@DINKA_FILMS' //wa.me/+94762280384
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://ibb.co/7KCpHZ3'
module.exports = {
  OPENAI_API_KEY:process.env.OPENAI_API_KEY || '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',
  botname: process.env.BOT_NAME || 'NADEEN-MD',
  dl_limit: process.env.DL_SIZE || '2000',
  art: process.env.AUTO_RESTART || 'true',
  sudo: process.env.SUDO || '94711451319',
  alivepic: process.env.ALIVE_IMG || 'https://telegra.ph/file/c7ce95554df8fcfa85680.jpg',
  alivemsj: process.env.ALIVE_MSJ || "` *👨‍💻 ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ 👨‍💻* `",
  ownername:process.env.OWNER_NAME || 'NADEEN',
  sessionName: process.env.SESSION_ID || 'DId1QayS#szwnz9YoB7DyuRZ6_xC5UcK3kIvAEmQr6zefezlDnTc',
  author: process.env.PACK_INFO.split(";")[0] || 'NADEEN', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'fuck,huth,fucking,huththa,huththo,hukanna,fucked,pakaya,pako,ponnaya,ponnayo,kariya,kariyo,huththaa,hutta',
  alwaysonline: process.env.ALWAYS_ONLINE || 'true',
  antifake : process.env.FAKE_COUNTRY_CODE || '92',
  readmessage: process.env.READ_MESSAGE || true,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || 'put your herokuapp name',
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || 'put your heroku_api_key',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || "*👋 Hello!* ✫💫👨‍💻I am `NADEEN-MD`💫✫\n\n*Hey there!*\n\n 👨🏻‍💻 *Bot Developed by *@NADEEN POORNA*\n🖤 *яυηтιмє : 1 hour, 6 minutes, 43 seconds\n⚙ Type *.menu* to get the bot's command list. \n\n*𝐻𝑒𝓇𝑒'𝓈 𝓌𝒽𝒶𝓉 𝐼 𝒸𝒶𝓃 𝒹𝑜*\n💿 *Download Songs & Videos*\n📰 *Fetch Latest News*\n🎭 *Entertain with Fun Commands*\n🔧 *Manage Groups*\n\n*𝒮𝓉𝒶𝓎 𝒸𝑜𝓃𝓃𝑒𝒸𝓉𝑒𝒹 𝒶𝓃𝒹 𝑒𝓃𝒿𝑜𝓎 𝓉𝒽𝑒 𝓈𝑒𝓇𝓋𝒾𝒸𝑒𝓈!*\n\n🎆POWERED BY : DINKA CREW\n> MANHIRU YUWAN\n_ > *©NADEEN- MD*_\n\n💻 *GitHub:* https://github.com/Nadeenpoorna-max/NADEEN-MD\n ` *👨‍💻 ɴᴀᴅᴇᴇɴ-ᴍᴅ ᴍᴀᴅᴇ ʙʏ ɴᴀᴅᴇᴇɴ ᴘᴏᴏʀɴᴀ 👨‍💻* `",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  VERSION: process.env.VERSION === undefined ? 'v.1.0.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'NADEEN-MD',
  WORKTYPE: process.env.WORK_TYPE === undefined ? 'public' : process.env.WORK_TYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
