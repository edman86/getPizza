import Button from "../Button/Button";
import Badge from "../Badge/Badge";
import { CgShoppingCart } from 'react-icons/cg';
import { useSelector } from "react-redux";
import './cartButton.scss';

const CartButton = () => {
    const cartTotalCount = useSelector(state => state.cart.totalCount);
    const cartTotalPrice = useSelector(state => state.cart.totalPrice);
    
    return (
        <Button variant="contained" rounded container >
            <span>{`$${cartTotalPrice}`}</span>
            <div className="cart-icon">
                <CgShoppingCart size={'1.5em'}/>
                {cartTotalCount > 0 && <Badge label={cartTotalCount} />}
            </div>
        </Button>
    );
};

export default CartButton;