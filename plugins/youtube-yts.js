import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { text }) => {
  if (!text) throw 'Â¿Que buscas?'
  const { video, channel } = await youtubeSearch(text)
  let teks = [...video, ...channel].map(v => {
    switch (v.type) {
      case 'video': return `
ð *${v.title}* (${v.url})
â Duracion: ${v.durationH}
â²ï¸ Subido: ${v.publishedTime}
ðï¸ ${v.view} views
      `.trim()
      case 'channel': return `
ð *${v.channelName}* (${v.url})
ð§âð¤âð§ _${v.subscriberH} (${v.subscriber}) Subscriber_
ð¥ ${v.videoCount} video
`.trim()
    }
  }).filter(v => v).join('\n\n========================\n\n')
  m.reply(teks)
}
handler.help = ['', 'earch'].map(v => 'yts' + v + ' <pencarian>')
handler.tags = ['tools']
handler.command = /^yts(earch)?$/i

export default handler
