import { useState, useEffect, useRef } from 'react';
import CartItem from '../CartItem/CartItem';
import SuccessDialog from '../SuccessOrder/SuccessDialog';
import { useSelector, useDispatch } from 'react-redux';
import { increaseProductCount, decreaseProductCount, removeFromCart, makeOrder } from '../../redux/actions/cartActions';
import './cart.scss';

const Cart = () => {
    const [isSuccessDialogOpen, setSuccessDialogOpen] = useState(false);

    const cartItems = useSelector(state => state.cart.items);
    const cartTotalCount = useSelector(state => state.cart.totalCount);
    const cartTotalPrice = useSelector(state => state.cart.totalPrice);

    const dispatch = useDispatch();
    const footerRef = useRef();

    const increase = (product) => {
        dispatch(increaseProductCount(product));
    };

    const decrease = (product) => {
        dispatch(decreaseProductCount(product));
    };

    const remove = (product) => {
        dispatch(removeFromCart(product));
    };

    const handleOrder = () => {
        dispatch(makeOrder());
        setSuccessDialogOpen(true);
    };

    useEffect(() => {
        // To make the animation work every time when 
        // the counters (cartTotalCount and cartTotalPrice) is updated - turning off 
        // the display property of component 
        // for 10 milliseconds, then display it again. 
        // When it displayed, the animation starts playing.
        
        footerRef.current.style.display = 'none';
        
        setTimeout(() => {
            footerRef.current.style.display = 'block';
        }, 10);
        
    }, [cartTotalCount, cartTotalPrice]);

    return (
        <section className="cart">
            <header className="cart__header">
                <h1 className="cart__title">Cart</h1>
            </header>
            <main className="cart__container">
                <ul className="cart__list">
                    {cartItems.map((item, index) => {
                        return (
                            <CartItem 
                                key={index} 
                                {...item} 
                                increase={increase}
                                decrease={decrease}
                                remove={remove}
                            />
                        );
                    })}
                </ul>
            </main>
            <footer className="cart__footer" ref={footerRef}>
                <div className="cart__payment">
                    <h2 className="cart__total">
                        <span className="total-label">Total:</span>
                        <span className="total-info">
                            {cartTotalCount === 0 && 'Cart is empty'}
                            {cartTotalCount > 0 && `${cartTotalCount} ${cartTotalCount === 1 ? 'pizza' : 'pizzas'} for `}
                        </span>
                        <span className="total-price">{cartTotalCount > 0 && `$${cartTotalPrice}`}</span>
                    </h2>
                    <button
                        type="button"
                        className="cart__order-btn"
                        disabled={cartTotalCount === 0}
                        onClick={handleOrder}
                    >
                        Order now
                    </button>
                </div>
            </footer>

            <SuccessDialog isOpen={isSuccessDialogOpen} setOpen={setSuccessDialogOpen} />
        </section>
    );
};

export default Cart;