let handler = async (m, { conn, usedPrefix, command }) => {
let name = await conn.getName(m.sender)
let donar =`
*┏ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┇     「 𝐃𝐎𝐍𝐀𝐑 」*
*┣ ┅ ━━━━━━━━━━━━━ ┅ ━*
*┃ 𝙷𝙾𝙻𝙰 ${name} 💙
*┃*Si deseas comprar al bot para tu grupocontactame*
*┃ ➤ 𝙿𝙰𝚈𝙿𝙰𝙻: https://www.paypal.me/fronak
*┃ ∆  𝙲𝙾𝙽𝚃𝙰𝙲𝚃𝙰𝙼𝙴: wa.me/525516084309
*┗ ┅ ━━━━━━━━━━━━━ ┅ ━*
`.trim()
conn.sendHydrated(m.chat, donar, wm, null, 'https://www.paypal.me/fronak', '𝙿𝙰𝚈𝙿𝙰𝙻', null, null, [['𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '/menu']], m)}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|donar|apoyar$/i
export default handler
