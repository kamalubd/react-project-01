import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Collections.css'
import {addToDb, getStoredCart} from '../../utilities/fakedb'

const Collections = () => { 
    
    const [products, setProducts] = useState([]);
    
    useEffect( () =>{        
    fetch ('products.json')
    .then (res => res.json())
    .then (data => setProducts(data))
    } ,[]);

    // cart data import from local storage

    useEffect(() => {
        const storedCart = getStoredCart();
        const savedCart = [];
        for (const id in storedCart){
            const addedProduct = products.find(product => product.id === id);

            if(addedProduct){

                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);

            }

            console.log(addedProduct);
        }
        setCart(savedCart);
    }, [products])

    // button inter-action

    const [cart, setCart] = useState([])

    const buttonClick = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);

    }
    
    return (
        <div className='collection-comp'>
            <div className="products-container">
            {
            products.map(product => <Product 
                product = {product}
                buttonClick = {buttonClick}
                key ={product.id}></Product>)
            }

            </div>

            <div>
                <h3>Order Summry</h3>
                Seleteced Items: {cart.length}
            </div>
            
        </div>
    );
};

export default Collections;