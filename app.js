
const express = require('express')
const app = express()
require("./db") // database connection

/**
 * Import routes files
 */
const index_routes = require("./routes/index")
const book_routes = require("./routes/books")

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`Welcome to the beginning of nothingness`)
})

/**
 * Set routes imported
 */
app.use("/index", index_routes)
app.use("/book", book_routes)

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})


// const express = require('express')
// const app = express()
// const task_condition = require("./lib/task_condition")
// const loop_for = require('./lib/loop/loop-for')
// const loop_foreach = require('./lib/loop/loop-foreach')
// const loop_map = require('./lib/loop/loop-map')
// const map_object = require('./lib/loop/loop_map_object')

// // for parsing application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }))

// app.get('/', (req, res) => {
//     return res.send(`Welcome to the beginning of nothingness`)
// })

// app.get("/task1", (req, res) => {
//     let key1 = req.query.key1
//     let key2 = req.query.key2

//     let result = task_condition.task1(key1, key2)

//     return res.send(result)
// })

// app.post("/task2", (req, res) => {
//     let { nama, email } = req.body
//     let result = task_condition.task2(nama, email)

//     return res.send(result)
// })
// app.get("/loop-for", (req, res) => {
//     // let data = ["Red", "Blue", "Green"]

//     let data = {
//         warna1: "Red",
//         warna2: "Blue",
//         warna3: "Green"
//     }
//     let result = loop_for(data)
//     return res.send(result)
// })

// app.get("/loop-foreach", (req, res) => {
//     let data = ["Red", "Blue", "Green"]
//     let result = loop_foreach(data)

//     return res.send(result)
// })

// app.get("/loop-map", (req, res) => {
//     let data = ["Red", "Blue", "Green"]
//     let result = loop_map(data)

//     return res.send(result)
// })
// app.get('/object-loop', (req, res) => {
//     let data = [
//         {
//             name: "Red",
//             note: "Danger"
//         },
//         {
//             name: "Yellow",
//             note: "Warning"
//         },
//         {
//             name: "Green",
//             note: "Success"
//         }
//     ]

//     let result = map_object(data)

//     return res.send(result)
// })
// app.listen(3300, () => {
//     console.log(`Example app listening on port 3300`)
// })
