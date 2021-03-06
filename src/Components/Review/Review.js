import { CRow } from '@coreui/react';
import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart/useCart';
import useProducts from '../../hooks/useProducts/useProducts';
import { clearTheCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Orderitems from '../OrderItems/OrderItems';
import Product from '../Product/Product';

const Review = () => {
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const navigate = useNavigate();
    const handlePlaceOrder = () => {
        // alert('Items Order completed');
        setCart([]);
        clearTheCart();
        // history.push('/placeorder');
        navigate('/placeorder');
    };
    //console.log(products, cart.length);
    return (
        <div>
            <div id='shopping-section' className='row pt-3'>
                <div id='products-section' className='col-md-9 col-12'>
                    <div>
                        <CRow md={{ cols: 2 }}>
                            {cart.map((product, idx) => (
                                <Orderitems
                                    key={product.key}
                                    product={product}
                                ></Orderitems>
                            ))}
                        </CRow>
                    </div>
                </div>
                <div id='cart-section' className='col-md-3 col-0 ps-2 '>
                    <Cart cart={cart}>
                        <button
                            className='btn btn-success mt-3'
                            onClick={() => handlePlaceOrder()}
                        >
                            Order Item
                        </button>
                    </Cart>
                </div>
            </div>
        </div>
    );
};

export default Review;
