let handler =  m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat [085608625102]
╰────

╭─「 Donasi • Non Pulsa 」
│ • Gopay [085608625102]
│ • Dana [085608625102]
│ • Ovo [085608625102]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
