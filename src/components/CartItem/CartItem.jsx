import { MdClose } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import './cartItem.scss';

const CartItem = ({ id, name, image, size, dough, price, priceSum, count, increase, decrease, remove }) => {
    
    // current product
    const product = {id, name, size, dough, price, priceSum, count}

    const handleIncrease = () => {
        increase(product)
    };

    const handleDecrease = () => {
        decrease(product)
    };

    const handleRemove = () => {
        remove(product)
    }
    
    return (
        <li className="cart-item">
            <div className="cart-item__image-container">
                <img className="cart-item__image" src={image} alt={name} />
            </div>
            <h2 className="cart-item__title">{name}</h2>
            <span className="cart-item__size">{`${size} size`}</span>
            <span className="cart-item__dough">{`${dough} dough`}</span>
            <div className="cart-item__counter">
                <AiOutlineMinus className="counter-btn" onClick={handleDecrease} />
                <span className="counter-label">{count}</span>
                <AiOutlinePlus className="counter-btn" onClick={handleIncrease} />
            </div>    
            <h3 className="cart-item__price">{`$${priceSum}`}</h3>
            <button className="cart-item__remove" onClick={handleRemove}>
                <MdClose size="2rem" />
            </button>
        </li>
    );
};

export default CartItem;