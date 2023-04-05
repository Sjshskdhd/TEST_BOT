let handler = async (m, { conn }) => {
let vn = './media/gay2.mp3'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/gay', {
avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
}), 'error.png', '*🏳️‍🌈 انت هو اكبر قاي في المجموعة 🏳️‍🌈*', m)
await await await conn.sendMessage(m.chat, { audio: { url: vn }, fileName: `error.mp3`, mimetype: 'audio/mp4', ptt: true }, { quoted: m })
}
handler.help = ['شاذ']
handler.tags = ['maker']
handler.command = /^(شاذ)$/i
export default handler
