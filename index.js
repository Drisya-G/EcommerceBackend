//server creation

//1  import express
const express=require('express');

//5  import cors
const cors=require('cors');

//2 using express create an application
const app=express();

//3   set up port number
app.listen(3005,()=>{
    console.log('Express listening on the port 3005');
})

//4  use json parser for server application
app.use(express.json());

//6    using cors specify origin to the server (integration)
app.use(cors({
    origin:'http://localhost:4200'
}))

const dataService=require('./services/dataService')


//api to get all products
app.get('/all-products',(req,res)=>{
    dataService.getAllProducts()
    .then(result=>{
        res.status(result.statusCode).json(result)
    })
})

//api to addtowishlist
app.post('/addtowishlist',(req,res)=>{
    console.log(req.body);
    dataService.addtowishlist(req.body.id,req.body.title,req.body.price,req.body.description,req.body.image).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )

})


//api for getting wishlist
app.get('/getwishlist',(req,res)=>{
    dataService.getwishlist().then(
        (result)=>{
            res.status(result.statusCode).json(result)
        }
    )
})

//delete wishlist
app.delete('/deletewish/:id',(req,res)=>{
    dataService.deleteitem(req.params.id).then(
        (result)=>{
            res.status(result.statusCode).json(result)
        } 
    )
})


