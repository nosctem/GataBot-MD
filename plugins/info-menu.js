let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
const sections = [
{
title: `𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐎𝐏𝐂𝐈𝐎𝐍𝐄𝐒`,
rows: [
{title: "✨ | 𝚆𝙴𝙻𝙲𝙾𝙼𝙴", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰 𝙴𝙽 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix}estado`},
{title: "🌎 | 𝙼𝙾𝙳𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙴 𝚅𝚄𝙴𝙻𝚅𝙴 𝙳𝙴 𝚄𝚂𝙾 𝙿𝚄𝙱𝙻𝙸𝙲𝙾 𝚈/𝙾 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix + command} public`},
{title: "🥵 | 𝙼𝙾𝙳𝙾 𝙷𝙾𝚁𝙽𝚈", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 +𝟷𝟾", rowId: `${usedPrefix + command} modohorny`},
{title: "🔗 | 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙻 𝙰𝙽𝚃𝙸 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂 𝙳𝙴 𝚆𝙷𝙰𝚃𝚂𝙰𝙿𝙿", rowId: `${usedPrefix + command} antilink`},   
{title: "🔗 | 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 𝟸", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙴𝙻 𝙰𝙽𝚃𝙸 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝚀𝚄𝙴 𝙸𝙽𝙸𝙲𝙸𝙰𝙽 𝙴𝙽 𝙷𝚃𝚃𝙿𝚂", rowId: `${usedPrefix + command} antilink2`},    
{title: "🔎 | 𝙳𝙴𝚃𝙴𝙲𝚃", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰𝚂 𝙽𝙾𝚃𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽𝙴𝚂 𝙳𝙴 𝙽𝚄𝙴𝚅𝙰 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽 𝙴𝙽 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix + command} detect`},      
{title: "❗ | 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙰𝚂 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝙲𝙸𝙾𝙽𝙴𝚂 𝙿𝙰𝚁𝙰 𝚂𝙰𝙲𝙰𝚁 𝙶𝙴𝙽𝚃𝙴 𝙳𝙴 𝙶𝚁𝚄𝙿𝙾𝚂", rowId: `${usedPrefix + command} restrict`},    
{title: "☑️ | 𝙰𝚄𝚃𝙾𝚁𝙴𝙰𝙳", description: "𝙼𝙰𝚁𝙲𝙰 𝙰𝚄𝚃𝙾𝙼𝙰𝚃𝙸𝙲𝙰𝙼𝙴𝙽𝚃𝙴 𝙻𝙰𝚂 𝙲𝙾𝙽𝚅𝙴𝚁𝚂𝙰𝙲𝙸𝙾𝙽𝙴𝚂 𝙲𝙾𝙼𝙾 𝙻𝙴𝙸𝙳𝙾", rowId: `${usedPrefix + command} autoread`},
{title: "🔊 | 𝙰𝚄𝙳𝙸𝙾𝚂", description: "𝙰𝙲𝚃𝙸𝚅𝙰 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾𝚂 𝚂𝙸𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾", rowId: `${usedPrefix + command} audios`},
{title: "👾 | 𝙰𝚄𝚃𝙾𝚂𝚃𝙸𝙲𝙺𝙴𝚁", description: "𝚃𝙾𝙳𝙰𝚂 𝙻𝙰𝚂 𝙸𝙼𝙰𝙶𝙴𝙽𝙴𝚂, 𝚅𝙸𝙳𝙴𝙾𝚂 𝙾 𝙴𝙽𝙻𝙰𝙲𝙴𝚂 𝙴𝙽𝚅𝙸𝙰𝙳𝙾𝚂 𝚂𝙴 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝙽 𝙴𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁", rowId: `${usedPrefix + command} autosticker`},
{title: "💬 | 𝙿𝙲𝙾𝙽𝙻𝚈", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙲𝙷𝙰𝚃 𝙿𝚁𝙸𝚅𝙰𝙳𝙾", rowId: `${usedPrefix + command} pconly`},
{title: "🏢 | 𝙶𝙲𝙾𝙽𝙻𝚈", description: "𝙴𝙻 𝙱𝙾𝚃 𝚂𝙾𝙻𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁𝙰 𝙰 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚂𝙸 𝙴𝚂 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾", rowId: `${usedPrefix + command} gconly`},
]}, ]
//let name = await conn.getName(m.sender)
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)

const listMessage = {
text: ' ',
footer: `
╭━━━〔 *${wm}* 〕━━⬣
┃🌟🌟🌟🌟🌟🌟🌟🌟🌟
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💗 *¡Hola | Hi!* ${username}
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃🌟🌟🌟🌟🌟🌟🌟🌟🌟
╰━━━━━〔 𓃠 *${vs}* 〕━━━━━⬣

╭━━━━━━━━━━━━━━━━━━━⬣
┃ *PRESIONE ESTE MENSAJE PARA IR AL MENÚ.*
┃ *PRESS THIS MESSAGE TO GO TO THE MENU.*
┃┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
┃💫➺ _${usedPrefix}gruposgb | grupos | groupgb_
┃💫➺ _${usedPrefix}cuentasgatabot | cuentasgb | accounts_
┃💫➺ _${usedPrefix}estado | heygata | status_
┃💫➺ _${usedPrefix}infogata | infobot_
┃💫➺ _${usedPrefix}listagrupos | grouplist_
┃💫➺ _${usedPrefix}velocidad | ping_
┃💫➺ _${usedPrefix}creadora | owner_
┃💫➺ _Bot_ 
╰━━━━━━━━━━━━━━━━━━━⬣
${wm}`,
title: null,
buttonText: "𝙋𝙍𝙀𝙎𝙄𝙊𝙉𝙀 𝘼𝙌𝙐Í | 𝙋𝙍𝙀𝙎𝙎 𝙃𝙀𝙍𝙀",
sections }

await conn.sendMessage(m.chat, listMessage)
}
//conn.sendButton(m.chat, `🗂️ 𝐎𝐏𝐂𝐈𝐎𝐍: ${type} 
//🎚️ 𝐄𝐒𝐓𝐀𝐃𝐎: ${isEnable ? '𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾' : '𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾'}
//📣 𝐏𝐀𝐑𝐀: ${isAll ? '𝙴𝚂𝚃𝙴 𝙱𝙾𝚃' : isUser ? '' : '𝙴𝚂𝚃𝙴 𝙲𝙷𝙰𝚃'}`, author, null, [[`${isEnable ? '✖️ 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 ✖️' : '✔️ 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 ✔️'}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`], ['👾 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻 👾', '.menu']],m)}

handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['group', 'owner']
handler.command = /^(mmyy)$/i
export default handler
