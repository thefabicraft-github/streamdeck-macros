import * as express from 'express';

const app = express();

app.get("/", (req, res) => {
    res.json({ online: true });
})

app.listen(8081, () => console.log("App is running on port 8081"))