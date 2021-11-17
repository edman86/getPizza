import Button from '../Button/Button';
import { AiFillStar } from 'react-icons/ai';
import './productCard.scss';

const ProductCard = ({ product, setOpen, setCurrentProduct }) => {
    
    const { name, imageRegular, descriptionShort, price, categories, popularity } = product;
    
    const title = name[0].toUpperCase() + name.slice(1);

    // opens the dialog with ditails of the product
    const handleOpen = () => {
        setOpen(true);
        setCurrentProduct(product);
    };

    return (
        <article className="card">
            <header className="card__header">
                <section className="card__image-container">
                    <img className="card__image" src={imageRegular} alt={name} />
                </section>
                <div className="card__rating">
                    <AiFillStar className="card__rating-star" />
                    <span className="card__rating-label">{popularity}</span>
                </div>
                <h3 className="card__title">{title}</h3>
            </header>
            <main className="card__content">
                <p className="card__description">{descriptionShort}</p>
                <ul className="card__categories">
                    {categories
                        .filter(categorie => categorie.toLowerCase() !== 'all')
                        .map((categorie, index) => {
                        return (
                            <li key={index} className="card__category-item">
                                {categorie}
                            </li>
                        )
                    })}
                </ul>
            </main>   
            <footer className="card__footer">
                <h4 className="card__price">{`$${price}`}</h4>
                <Button variant="outlined" rounded handleClick={handleOpen}>Select</Button>
            </footer>
        </article>
    );
};

export default ProductCard;