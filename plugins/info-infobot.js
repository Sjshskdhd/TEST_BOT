import { generateWAMessageFromContent } from '@adiwajshing/baileys'
import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict, antiCall, antiprivado, modejadibot } = global.db.data.settings[conn.user.jid] || {}
const { autoread, gconly, pconly, self } = global.opts || {}
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
╠═〘 𝐈𝐍𝐅𝐎 𝐃𝐄𝐋 𝐁𝐎𝐓 〙 ═
╠
╠➥ [🤴🏻] صاحب البوت: *𝘋𝘙𝘈𝘒𝘌𝘕*
╠➥ [#️⃣] *رقم صاحب البوت:201275658375*
╠➥ [🎳] البادية الخاصة بي البوت: *${usedPrefix}*
╠➥ [🔐] الدردشات الخاصة: *${chats.length - groups.length}*
╠➥ [🦜] دردشات المجموعات: *${groups.length}* 
╠➥ [💡] مجموع كل الشاتات: *${chats.length}* 
╠➥ [🚀] البوت يعمل من: *${uptime}*
╠➥ [🎩] المستخدمين: *${totalreg} 𝚗𝚞𝚖𝚎𝚛𝚘𝚜*
╠➥ [☑️] القراءة التلقائية: ${autoread ? '*مفعل*' : '*غير مفعل*'}
╠➥ [❗] الحد: ${restrict ? '*مفعل*' : '*غير مفعل*'} 
╠➥ [💬] فقط: ${pconly ? '*مفعل*' : '*غير مفعل*'}
╠➥ [🏢] جكونلي: ${gconly ? '*مفعل*' : '*غير مفعل*'}
╠➥ [🌎] الوضع: ${self ? '*خاص*' : '*عام*'}
╠➥ [💬] 𝙰𝙽𝚃𝙸𝙿𝚁𝙸𝚅𝙰𝙳𝙾: ${antiprivado ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'}
╠➥ [🤖] 𝙼𝙾𝙳𝙴𝙹𝙰𝙳𝙸𝙱𝙾𝚃: ${modejadibot ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'}
╠➥ [📵] منع الاتصال بي البوت: ${antiCall ? '*مفعل*' : '*غير مفعل*'}
╠➥ [👨‍🦯] 𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳: 
╠  *${speed} ms* 
╠
╠═〘  𝘉𝘖𝘛 𝘋𝘙𝘈𝘒𝘌𝘕〙 ═
`.trim() 
let aa = { quoted: m, userJid: conn.user.jid }
let res = generateWAMessageFromContent (m.chat, {liveLocationMessage: {degreesLatitude: 0, degreesLongitude: 0, caption: info, secuenceNumber: "0", contextInfo: {mentionedJid: conn.parseMention()}}}, aa)
conn.relayMessage(m.chat, res.message, {})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|infobot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
