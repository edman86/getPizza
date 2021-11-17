import { db } from '../../firebase';
import { collection, getDocs, query, where, orderBy, limit } from 'firebase/firestore';

export const setPizzas = (pizzas) => ({
    type: 'SET_PIZZAS',
    payload: pizzas
});

export const setLoaded = (isLoaded) => ({
    type: 'SET_LOADED',
    payload: isLoaded
});

// async action
export const fetchProducts = (product, filterCategory, orderByValue, dir) => (dispatch) => {

    // sets isLoaded to false for display preloadedProductCard
    // instead of ProductCard component while data is fetching
    dispatch(setLoaded(false));

    // getting products
    const getPizza = async () => {
        if (product === 'pizza') {
            
            // getting filtered and sorted data
            const q = query(collection(db, 'pizza'), 
                where('categories', 'array-contains', filterCategory),
                orderBy(orderByValue, dir));

            const data = await getDocs(q);
            dispatch(setPizzas(data.docs.map(doc => ({ ...doc.data(), id: doc.id }))));
        } 

        // sets isLoaded to true for display product cards
        dispatch(setLoaded(true));
    };

    getPizza();
};