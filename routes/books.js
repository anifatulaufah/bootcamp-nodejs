const express = require('express')
const router = express.Router()
const { create, getAll, getDetail } = require("../actions/books")
const { isString } = require("lodash")

router.post("/", async (req, res) => {
    try {
        if (isString(data) === true){
            let data = await create(req)
            return res.status(200).json({
                status: "success",
                data,
                message: "Book created successfully!"
            })
        }
        
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

//     let data = create(req)

//     if(isString(data) === true) {
//         return res.status(400).json({
//             status: "error",
//             message: data
//         })
//     }

//     return res.status(200).json({
//         status: "success",
//         data,
//         message: "Book created successfully!"
//     })
// })

router.get("/", async (req, res) => {
    try {
        let data = await getAll(id)

        return res.status(200).json({
            status: "success",
            data,
            message: "Get book detail successfully!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})

router.get("/:id", async (req, res) => {
    try {
        let { id } = req.params
        let data = await getDetail(id)

        return res.status(200).json({
            status: "success",
            data,
            message: "Get book detail successfully!"
        })
    } catch(err) {
        return res.status(400).json({
            status: "error",
            message: err.message
        })
    }
})
//     let data = await getAll()

//     return res.send({
//         status: "success",
//         data,
//         message: "Get all book data"
//     })
// })

module.exports = router
