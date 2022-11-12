const { package } = require('../model/package')

//insert a package
const addpackage = async(req, res) => {
    try {
        const addprod = new package({
            package_description: req.body.package_description,
            price: req.body.price,
            category: req.body.category
        })
        let insertprod = await addprod.save();
        let message = "Package Insert successfully"
        res.send({
            message: message,
            data: insertprod
        })
    } catch (e) {
        res.send(e)
        console.log(e)
    }
}

//get all product
const allproduct = async(req, res) => {
    try {
        const allprod = await product.find({})
        res.send(allprod)
    } catch (e) {
        console.log(e)
        res.send(e)
    }
}

//delete product
const deleteproduct = async(req, res) => {
    try {
        let _id = req.query.id
        const getstdspe = await product.findByIdAndDelete(_id)
        res.send("Delete Successfully")
    } catch (e) {
        console.log(e)
        res.send(e)
    }
}

module.exports = { addpackage, allproduct, deleteproduct }