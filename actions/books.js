const Book = require("../models/book")
const { isInteger } = require("lodash")

const create = async (req) => {
    let { title, description, price } = req.body
    price = parseInt(price)
    // console.log(`Value of price ${price}`)

    // if(isInteger(price) === false) {
    //     return "Wrong type of `price`"
    // }

    var insert_data = {
        title,
        description,
        price
    }

    let data = new Book(insert_data)
    // data.save()

    // return data
    try {
        await data.save()

        return data
    } catch(err) {
        throw err
    }

}

const getAll = async () => {
    // let query = await Book.find({}).exec()
    // console.log(`Result ${query}`)

    // return query
    try {
        let query = await Book.find({}).exec()
        console.log(`Result ${query}`)
        return query
    } catch(err) {
        throw err
    }
}

const getDetail = async (id) => {
    try {
        let query = await Book.findOne({
            _id: id
        }).exec()

        return query
    } catch(err) {
        throw err
    }
}
module.exports = {
    create,
    getAll,
    getDetail
}
