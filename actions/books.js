const Book = require("../models/book")
const { isInteger } = require("lodash")
const User = require("../models/user.model")

const create = async (req) => {
    let { title, description, price, author } = req.body
    price = parseInt(price)

    var insert_data = {
        title,
        description,
        price,
        author
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
    let query = await Book.find({})
        .populate([
            {
                path: 'author',
                model: User
            }
        ]).exec()
    console.log(`Result ${query}`)

    return query
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
const update = async (id, updated_data) => {
    let { title, description, price, author, fresh } = updated_data
    let opts = {
        new: fresh === "true" ? true : false
    }
    let data = {
        title,
        description,
        price,
        author
    }

    try {
        let query = await Book.findOneAndUpdate({
            _id: id
        }, data, opts).exec()

        return query
    } catch(err) {
        throw err
    }
}

const destroy = async (id) => {
    try {
        let query = await Book.findOneAndDelete({
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
    getDetail,
    update,
    destroy
}
