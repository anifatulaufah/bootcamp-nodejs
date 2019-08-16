const ShopModel = require("../models/shop.model")

class ShopDelete {
    static async destroy(id) {
        try {
            let query = await ShopModel.findOneAndDelete({
                _id: id
            }).exec()
    
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

module.exports = ShopDelete