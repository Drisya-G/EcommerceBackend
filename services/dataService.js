//import db
const { Mongoose } = require('mongoose')
const db = require('./db')

//get all products from database
const getAllProducts = () => {
    //to fetch all products from mongoDB
    return db.Product.find().then(             //Product-model
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    Products: result
                }
            }
            else {
                return {
                    status: false,
                    statusCode: 402,
                    message: 'not found'
                }
            }

        }
    )
}

//addtowishlist
const addtowishlist = (id, title, price, description, image) => {
    return db.Wishlist.findOne({ id }).then(
        (result) => {
            if (result) {
                return {
                    status: false,
                    statusCode: 401,
                    message: 'product already exists'

                }
            }
            else {
                const newProduct = new db.Wishlist({
                    id,
                    title,
                    price,
                    description,
                    image

                })
                newProduct.save()
                return {
                    status: true,
                    statusCode: 200,
                    message: 'product added successfully'
                }
            }

        }

    )



}

// get wishlist
const getwishlist = () => {
    return db.Wishlist.find().then(             //Product-model
        (result) => {
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    Products: result

                }
            }
            else {
                return {
                    status: false,
                    statusCode: 402,
                    message: 'Your wishlist is Empty'
                }
            }

        }
    )

}


//delete wishlist
const deleteitem=(id)=>{
    return db.Wishlist.deleteOne({id}).then(
        (result)=>{
            if (result) {
                return {
                    status: true,
                    statusCode: 200,
                    message:'Product deleted Successfully'

                }
            }
            else {
                return {
                    status: false,
                    statusCode: 402,
                    message: 'Product Cannot Deleted'
                }
            }
            
        }
    )
}

module.exports = {
    getAllProducts,
    addtowishlist,
    getwishlist,
    deleteitem
}