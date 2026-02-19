const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Arslan_Tech,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function Zakariya_tech_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Zakariya_Tech = Zakariya_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Zakariya_Tech.ev.on('creds.update', saveCreds)
			Qr_Code_By_Zakariya_Tech.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_Zakariya_Tech.sendMessage(Qr_Code_By_Zakariya_Tech.user.id, { text: 'Zakariya-Tech~' + b64data });
	
				   let Zakariya_Tech_TEXT = `
╔════════════════════◇
║『 SESSION CONNECTED』
║ ✨Zakariya-Tech🔷
║ ✨Zakariya OFFICIAL🔷
╚════════════════════╝


---

╔════════════════════◇
║『 YOU'VE CHOSEN Zakariya-Tech 』
║ -Set the session ID in Heroku:
║ - SESSION_ID: 
╚════════════════════╝
╔════════════════════◇
║ 『••• _V𝗶𝘀𝗶𝘁 𝗙𝗼𝗿_H𝗲𝗹𝗽 •••』
║❍ 𝐎𝐰𝐧𝐞𝐫: 923102392745
║❍ 𝐑𝐞𝐩𝐨: https://github.com/Arslan-MD/Arslan_MD 
║❍ 𝐖𝐚𝐆𝗿𝐨𝐮𝐩: https://whatsapp.com/channel/0029Vb7EAm1ISTkPVEl7za0m
║❍ 𝐖𝐚𝐂𝐡𝐚𝐧𝐧𝐞𝐥: https://whatsapp.com/channel/0029Vb7EAm1ISTkPVEl7za0m
║ ☬ ☬ ☬ ☬
╚═════════════════════╝
𒂀 Enjoy Zakariya-Tech


---

Don't Forget To Give Star⭐ To My Repo
______________________________`;
	 await Qr_Code_By_Zakariya_Tech.sendMessage(Qr_Code_By_Zakariya_Tech.user.id,{text:Zakariya_Tech_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_Zakariya_Tech.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					Zakariya_Tech_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await Arslan_MD_QR_CODE()
});
module.exports = router
