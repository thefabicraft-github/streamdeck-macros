import * as express from 'express';
import * as ks from 'node-key-sender';
import * as fs from 'fs';
import functions = require("./functions.json");

const app = express();

app.get("/", (req, res) => {
    res.json({ online: true });
})

app.get("/send/:function", async (req, res) => {
    if (functions.includes(req.params.function)) {
        fs.writeFileSync('./key.txt', req.params.function)
        ks.sendKey('f24');
        res.send("OK")
    }
        else console.log("It didn't!")
})

app.listen(8081, () => console.log("App is running on port 8081"))