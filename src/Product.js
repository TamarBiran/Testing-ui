import React, { useState,useContext } from "react";



const products = [
    { "name": "peach", "price": 7 , "category" : "fruit"},
    { "name": "apple", "price": 7 , "category" : "fruit"},
    { "name": "orange", "price": 6 , "category" : "fruit"},
    { "name": "grape", "price": 13 , "category" : "fruit"},
    { "name": "pear", "price": 9 , "category" : "fruit"},
    { "name": "berry", "price": 15 , "category" : "fruit"},
    { "name": "tomato", "price": 4 , "category" : "vegetables"},
    { "name": "cucumber", "price": 3  , "category" : "vegetables"},
    { "name": "pepper", "price": 5  , "category" : "vegetables"},
    { "name": "batata", "price": 6  , "category" : "vegetables"},
    { "name": "potato", "price": 3  , "category" : "vegetables"},
    { "name": "chocolate", "price": 6  , "category" : "sweets" },
    { "name": "shugi", "price": 4 , "category" : "sweets" },
    { "name": "bamba", "price": 3 , "category" : "sweets" },
    { "name": "bisli", "price": 3 , "category" : "sweets" }
];


function Product(props) {

    function HidingExpensiveProducts(){
        setProductsCategory(products.filter(product => product.category === props.category && product.price<7));
    }

    const [productsCategory,setProductsCategory] = useState(products.filter(product => product.category === props.category));
    let id = 1;
    let count = productsCategory.length;
    return (
        <div>
            <h1>Products from the {props.category} category</h1>
            <ul>
                {productsCategory.map(product =>
                    <li key={id++}>Name:{product.name} | Price:{product.price}</li>
                )}
         </ul>
            {count > 5 ? <h3>Many products</h3> : ''}
            <button onClick={HidingExpensiveProducts}>Hide products priced above 7</button>
        </div>
    );

}
export default Product
