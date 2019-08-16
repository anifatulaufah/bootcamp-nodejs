const express = require('express')
const router = express.Router()
const Shop = require("../actions/shop.action")
const ShowShop = require("../actions/shops/show.action")
const ShopUpdate = require ("../actions/shop.update")
const ShopDelete = require ("../actions/shop.delete")


router.post("/", async (req, res, next) => {
    try {
        let data = await Shop.create(req)

        return res.status(201).json({
            status: "success",
            data,
            message: "Shop created successfully"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.get("/", async (req, res, next) => {
    try {
        let data = await Shop.all()

        return res.status(200).json({
            status: "success",
            data,
            message: "Get all shop data"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.get("/:id", async (req, res, next) => {
    try {
        let { id } = req.params
        let data = await new ShowShop(id).exec()
        console.log(`Type of ShowShop is ${typeof ShowShop}`)

        return res.status(200).json({
            status: "success",
            data,
            message: "Get detail of shop"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.put("/:id", async (req, res) => {
    let { id } = req.params
    let updated_data = {
        name: req.body.name,
        description: req.body.description,
        owner: req.body.owner,
        fresh: req.body.fresh
    }

    try {
        let data = await ShopUpdate.update(id, updated_data)

        return res.status(200).json({
            status: "success",
            data,
            message: "Shop data updated successfully!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})


router.delete("/:id", async (req, res) => {
    let { id } = req.params

    try {
        let data = await ShopDelete.destroy(id)

        return res.status(200).json({
            status: "success",
            data,
            message: "User data deleted successfully!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})



module.exports = router
