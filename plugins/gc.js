let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hola, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con los demas*

*β€ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/C9G2Gpz4SbP7nS953qJlNC
`.trim(), wm, media, [['πΈπ π°π» πΌπ΄π½π πΏππΈπ½π²πΈπΏπ°π»', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
