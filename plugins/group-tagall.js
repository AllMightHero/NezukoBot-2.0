let handler = async(m, { isOwner, isAdmin, conn, text, participants }) => {
  if (!(isAdmin || isOwner)) {
                global.dfail('admin', m, conn)
                throw false
                }
  let teks = `${text ? text : ''}\n┌─ 「 Etiquetando a todos los miembros 」\n`
  for (let mem of participants) {
  teks += `│• @${mem.id.split('@')[0]}\n`}
  teks += `└─────\n\n*NezukoBot*
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <message>']
handler.tags = ['group']
handler.command = /^(tagall)$/i
handler.admin = true
handler.group = true
export default handler
