const express = require('express');
//import data from './data';
const data = require('./data');


const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

app.get('/',(req,res)=> res.send('Hello From homepage'));
// app.use('/api',userroutes);
// app.use('/api',productsrouter);

app.get("/api", (req,res) => {
    res.send([{
        _id:"1",
        name: "slim shirt",
        category:"Shirt",
        image: "/images/d1.jpg",
        price: 60,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        discription:"sadf",
        status:"T"
    },
    {
        _id:"2",
        name: "slim shirt",
        category:"Shirt",
        image: "/images/d1.jpg",
        price: 60,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10,
        discription:"sadf",
        status:"T"
    },
    {
        _id:"3",
        name: "slim shirt",
        category:"Shirt",
        image: "/images/d1.jpg",
        price: 60,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10
    },
    {
        _id:"4",
        name: "slim shirt",
        category:"Pants",
        image: "/images/d1.jpg",
        price: 60,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10
    },
    {
        _id:"5",
        name: "slim shirt",
        category:"Pants",
        image: "/images/d1.jpg",
        price: 60,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10
    },
    {
        _id:"6",
        name: "slim Pants",
        category:"Pants",
        image: "/images/d1.jpg",
        price: 60,
        brand: 'Nike',
        rating: 4.5,
        numReviews: 10
    }
])
});

app.listen(PORT, ()=> console.log('server on port: http://localhost${'+ PORT +'}'));
