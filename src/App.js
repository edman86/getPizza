import { useEffect } from "react";
import Header from "./components/Header/Header";
import MainPage from "./pages/MainPage";
import CartPage from "./pages/CartPage";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from './redux/actions/productsActions';

function App() {
    const dispatch = useDispatch();

    // Reciving value of current filter and sort type from redux
    // to filter and sort data from server by this values. 
    const currentCategoryFilter = useSelector(state => state.filters.currentCategoryFilter);
    const currentSortType = useSelector(state => state.filters.currentSortType);

    useEffect(() => {
        // The useEffect monitors the changes in 
        // currentCategoryFilter and currentSortType
        // variables and, when they change, makes a rerender, 
        // which causes a request for data from the server 
        // with new filtering and sorting parameters.

        // fetching data
        dispatch(fetchProducts('pizza', currentCategoryFilter, currentSortType.name, currentSortType.direction));
        
    }, [currentCategoryFilter, currentSortType]);

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/">
                    <Route index element={<MainPage />} />
                    <Route path="cart" element={<CartPage />} />
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                                <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Route>
            </Routes>
        </div>
    );
}

export default App;