import { useState, useEffect, useRef } from "react";
import SwitchButton from "../SwitchButton/SwitchButton";
import Button from "../Button/Button";
import { calculatePrice } from "../../utilities/calculatePrice";
import { MdClose } from 'react-icons/md';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import './productDialog.scss';

const ProductDialog = ({
    isOpen,
    setOpen,
    productType = null,
    id,
    name,
    imageRegular,
    imageThin,
    description,
    price,
    buttonsData

}) => {
    
    const [isOnClosing, setOnClosing] = useState(false);
    // sizeValue property is for pizza
    const [sizeValue, setSizeValue] = useState('medium');
    // doughValue property is for pizza too 
    const [doughValue, setDoughValue] = useState('regular');

    const backdropRef = useRef();
    const dispatch = useDispatch();
    
    // price will depends on product size (if product is pizza)
    let calcPrice = calculatePrice(price, sizeValue);
    
    const handleClose = (e) => {
        // Starts animation of closing dialog.
        // After the animation ends, it will close the dialog
        setOnClosing(true);
    };

    const addProductToCart = () => {
        // adding product to cart
        dispatch(addToCart({
            id: id, 
            name: name,
            image: imageRegular, 
            price: calcPrice, 
            size: sizeValue,
            dough: doughValue
        }));
        setOnClosing(true);
    };
    
    useEffect(() => {
        // This code is responsible for closing the component 
        // when the user clicks outside of the dialog box.
        
        let element = backdropRef.current;
        
        function outsideClick(e) {
            if (e.target === element) {
                setOnClosing(true);
            }
        }
        element.addEventListener('click', outsideClick);

        return () => {
            element.removeEventListener('click', outsideClick);
        }
    }, []);
    
    useEffect(() => {
        // This code responsible for closing animation
        
        let timeoutId;
        
        // if isOnClosing is true - closing animation is starts
        if (isOnClosing) {
            timeoutId = setTimeout(() => {
                // when closing animation is done
                setOnClosing(false);
                // handle dialog close
                setOpen(false);
            }, 300);
        }

        return () => {
            clearTimeout(timeoutId);
        } 
    }, [isOnClosing]);

    useEffect(() => {
        // Disable of document body scrolling,
        // while the dialog component is open.
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isOpen]);

    return (
        <div className={`backdrop ${isOpen && 'is-open'}`} ref={backdropRef}>
            <article className={`product-dialog ${isOnClosing && 'on-closing'}`}>
                <button
                    className="product-dialog__close-btn"
                    onClick={handleClose}
                >
                    <MdClose size="2.5em" />
                </button>
                <section className="product-dialog__image-container">
                    <img 
                        className="product-dialog__image" 
                        src={doughValue === 'regular' ? imageRegular : imageThin} 
                        alt={name} 
                    />
                </section>
                <section className="product-dialog__content">
                    <h2 className="product-dialog__title">{name}</h2>
                    <h3 className="product-dialog__subtitle">
                        {productType === 'pizza' ? `${sizeValue} pizza with ${doughValue} dough` : ''}
                    </h3>
                    <p className="product-dialog__description">{description}</p>
                    <section className="product-dialog__buttons">
                        {productType === 'pizza' && <SwitchButton 
                            buttons={buttonsData.pizzaSizes}
                            startIndex="1"
                            setValue={setSizeValue} 
                        />}
                        {productType === 'pizza' && <SwitchButton 
                            buttons={buttonsData.doughType}
                            startIndex="0"
                            setValue={setDoughValue} 
                        />}
                    </section>
                    <footer className="product-dialog__footer">
                        <h3 className="product-dialog__price">{`$${calcPrice}`}</h3>
                        <Button
                            variant="contained"
                            handleClick={addProductToCart}
                        >
                            Add to cart
                        </Button>
                    </footer>
                </section>
            </article>
        </div>
    );
};

export default ProductDialog;