import React from 'react';
import './Product.css'

const Product = (props) => {



    // console.log(props);
    const {img, name, price, seller, ratings} =props.product;
    return (
        <div className='single-product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <p>{name}</p>
            <p>Price: ${price}</p>
            <p><small>Brand: {seller}</small></p>
            <small>Ratings: {ratings}</small>
            <div className='cart-btn'><button onClick={() => props.buttonClick(props.product)}>Add to Cart</button></div>
        </div>
    );
};

export default Product;