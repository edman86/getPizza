import './preloadedProductCard.scss';

const PreloadedProductCard = () => {
    // This component is rendered instead of the ProductCard component
    // when the web page has just loaded but data of products 
    // has not yet been received from the server (firebase).
    
    return (
        <article className="pre-card">
            <header className="pre-card__header">
                <section className="pre-card__image-container">
                    <div className="pre-card__loading-content" />
                </section>
                <h3 className="pre-card__title">
                    <div className="pre-card__loading-content" />
                </h3>
            </header>
            <main className="pre-card__content"></main>
            <footer className="pre-card__footer">
                <h4 className="pre-card__price"></h4>
                <div className="pre-card__button"variant="outlined">
                    <div className="pre-card__loading-content" />
                </div>
            </footer>
        </article>
    );
};

export default PreloadedProductCard;