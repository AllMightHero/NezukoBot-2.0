import { canLevelUp, xpRange } from '../lib/levelling.js'
import { levelup } from '../lib/canvas.js'

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        throw `
Nivel *${user.level} (${user.exp - min}/${xp})*
Necesitas *${max - user.exp}* mas!
`.trim()
    }
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    if (before !== user.level) {
        let teks = `Felicidades ${conn.getName(m.sender)} nuevo 🧬nivel`
        let str = `
${teks} 
• 🧬Nivel anterior : ${before}
• 🧬Nuevo Nivel : ${user.level}
• Hora : ${new Date().toLocaleString('id-ID', { timeZone: 'Mexico City' })}
*_Cuanto más interactúes con los bots, mayor será tu nivel_*
`.trim()
        try {
            const img = await levelup(teks, user.level)
            conn.sendFile(m.chat, img, 'levelup.jpg', str, m)
        } catch (e) {
            m.reply(str)
        }
    }
}

handler.help = ['levelup']
handler.tags = ['xp']

handler.command = /^level(|up)$/i

export default handler