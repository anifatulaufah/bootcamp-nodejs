const express = require('express')
const app = express()
const array_sort = require("./lib/sorting-array")
const conditional = require("./lib/condition")

// for parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    return res.send(`Welcome to the beginning of nothingness`)
})

app.get("/task1", (req, res) => {
    let colors = ["Red", "Blue", "Yellow", "Green"]
    console.log("Before ", colors)

    let result = array_sort.ascending_sorting(colors)
    console.log("After ", result)

    return res.send(result)
})

app.get("/task2", (req, res) => {
    let colors = ["Red", "Blue", "Yellow", "Green"]
    console.log("Before ", colors)

    let result = array_sort.descending_sorting(colors)
    console.log("After ", result)

    return res.send(result)
})

/**
 * How to using query parameter:
 * 
 * http://your_url:your_port/your_route?q=your_value
 * or type in Query Params when using postman
 * key      | value
 * q        | your_value
 */
app.get("/task3", (req, res) => {
    let q = req.query.q
    console.log("First value ", q)

    let result = conditional.equal(q)

    return res.send(result)
})

app.get("/task4", (req, res) => {
    let today = new Date().getDay()
    console.log("Today ", today)

    let result = conditional.day(today)

    return res.send(result)
})

app.post("/task5", (req, res) => {
    let number = req.body.number
    console.log("section1 ", typeof number)
    number = parseInt(number)
    console.log("section2 ", typeof number)

    let result = conditional.compare(number)

    return res.send(result)
})

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})
