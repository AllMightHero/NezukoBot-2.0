let handler = async (m, { conn, text }) => {
    if (!text) throw 'A quien quieres banear?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Etiquetalo'
    let users = global.db.data.users
    users[who].banned = true
    conn.reply(m.chat, `Usuario baneado`, m)
}
handler.help = ['ban']
handler.tags = ['owner']
handler.command = /^ban$/i
handler.rowner = true

export default handler