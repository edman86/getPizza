import ProductCard from "../ProductCard/ProductCard";
import Grid from "../Grid/Grid";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import SortDialog from "../SortDialog/SortDialog";
import PreloadedProductCard from "../PreloadedProductCard/PreloadedProductCard";
import './productsList.scss';

const ProductsList = ({ productType, products, setOpen, setCurrentProduct, isLoaded }) => {
    return (
        <section className="products">
            <header className="products__header">
                <Grid container>
                    <h2 className="products__title">{productType}</h2>
                </Grid>
            </header>
            <Grid container direction="column">

                <section className="filters">
                    {productType === 'pizza' && (
                        <Grid container justify="space-between" align="center" width="100%">
                            <Grid item mt="0">
                                <CategoryFilter />
                            </Grid>
                            <Grid item mt="0">
                                <SortDialog />
                            </Grid>
                        </Grid>
                    )}
                </section>

                <section className="products__list">
                    <Grid container wrap="wrap">
                        {isLoaded ? (products.map(product => {
                            return (
                                <Grid key={product.id} item gridCard>
                                    <ProductCard product={product} setOpen={setOpen} setCurrentProduct={setCurrentProduct} />
                                </Grid>
                            );
                        })) : (Array(8).fill(1).map((item, index) => {
                            return (
                                <Grid key={index} item gridCard>
                                    <PreloadedProductCard />
                                </Grid>
                            );
                        }))}
                    </Grid>
                </section>
            </Grid>
        </section>
    );
};

export default ProductsList;