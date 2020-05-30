import * as express from 'express';
import * as robot from 'robotjs';
import functions = require("./functions.json");

const app = express();

app.get("/", (req, res) => {
    res.json({ online: true });
})

app.get("/send/:function", (req, res) => {
    if (functions.includes(req.params.function)) {
        robot.keyTap("audio_pause")
        console.log("It worked!")
    }
        else console.log("It didn't!")
})

app.listen(8081, () => console.log("App is running on port 8081"))