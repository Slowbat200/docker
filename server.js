const express = require("express")
const app = express()

app.use(express.static("public"))
app.set("view engine", "ejs")

app.get("/",(req, res)=>{
    console.log("OK")
    res.status(200).send("Pro zobrazení jména dopište do URL adresy toto: /user/Slowbat")
})

app.get("/user/:name",(req, res)=>{
    console.log("user")
    res.status(200).render("user", {name: "Slowbat"})
})
app.listen(8080)