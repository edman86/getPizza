import { useState } from "react";
import ProductsList from "../components/ProductsList/ProductsList";
import ProductDialog from "../components/ProductDialog/ProductDialog";
import Sidebar from "../components/Sidebar/Sidebar";
import { useSelector } from 'react-redux';

const pizzaButtons = {
    pizzaSizes: ['small', 'medium', 'large'],
    doughType: ['regular', 'thin']
}

const MainPage = () => {
    
    // state for ProductDialog
    const [isDialogOpen, setDialogOpen] = useState(false);

    // When user clicks on one of the product cards, 
    // this current product is saved here.
    const [currentProduct, setCurrentProduct] = useState({
        id: '',
        name: '',
        imageRegular: '',
        imageThin: '',
        description: '',
        descriptionShort: '',
        price: '',
        productType: ''
    });
    
    // get data from redux for spreading to child components
    const pizzas = useSelector(state => state.products.pizzas);
    const isLoaded = useSelector(state => state.products.isLoaded);
    
    return (
        <>
            <ProductsList
                productType="pizza"
                products={pizzas}
                setOpen={setDialogOpen}
                setCurrentProduct={setCurrentProduct}
                isLoaded={isLoaded}
            />
            <ProductDialog
                isOpen={isDialogOpen}
                setOpen={setDialogOpen}
                buttonsData={pizzaButtons}
                {...currentProduct}
            />
            <Sidebar />
        </>
    );
};

export default MainPage;