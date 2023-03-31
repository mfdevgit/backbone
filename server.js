import express from "express"
import connectDatabase from "./db/connection.js"
import { getGradientAll, createGradientOne, updateGradientCopies, removeGradientOne } from "./controllers/gradients.js"
import { checkAuth } from "./middlewares/checkAuth.js"

const app = express()
app.use(express.json())
connectDatabase()

app.get("/", (req, res) => {
    res.status(200).send("I'm working, honey. Ask me later.")
})
app.get("/gradients", getGradientAll)
app.patch("/gradients/:id", updateGradientCopies)
app.post("/gradients", checkAuth, createGradientOne)
app.delete("/gradients/:id", checkAuth, removeGradientOne)

app.listen(5000, err => {
    if (err) {
        return console.log(err)
    } else {
        console.log("Server STARTED")
    }
})
