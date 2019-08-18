const ShopModel = require("../models/shop.model")

class ShopUpdate {
    static async update(id, updated_data) {
        let { name, description, owner, fresh } = updated_data
        let opts = {
            new: fresh === "true" ? true : false
        }
        let data = {
            name,
            description,
            owner
        }

        try {
            let query = await ShopModel.findOneAndUpdate({
                _id: id
            }, data, opts).exec()

            return query
        } catch(err) {
            throw err
        }

        }

    static async all() {
        try {
            let data = await ShopModel.find({}).exec()

            return data
        } catch(err) {
            throw err
        }
    }

    hello() {
        return 'Hello Shop!'
    }
}

module.exports = ShopUpdate