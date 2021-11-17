import { MdClose } from 'react-icons/md';
import pizzaDelivery from '../../assets/pizza-delivery.gif';
import { useNavigate } from 'react-router';
import './successDialog.scss';

const SuccessDialog = ({ isOpen, setOpen }) => {
    
    const navigate = useNavigate();
    
    const handleClose = () => {
        setOpen(false);
        navigate('/');
    };

    return (
        <div className={`backdrop ${isOpen && 'is-open'}`}>
            <article className="success-dialog">
                <button
                    className="success-dialog__close-btn"
                    onClick={handleClose}
                >
                    <MdClose size="2.5em" />
                </button>
                <h1 className="success-dialog__title">
                    Your pizza is on the way!
                </h1>
                <img 
                    className="success-dialog__image" 
                    src={pizzaDelivery} 
                    alt="pizza delivery" 
                />
            </article>
        </div>
    );
};

export default SuccessDialog;