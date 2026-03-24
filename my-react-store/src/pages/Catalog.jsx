import Product from "../components/Product"
import "./Catalog.css";
import { useEffect, useState } from "react";
import DataService from "../services/DataService";

function Catalog(){
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]); 
    const [productsToShow, setProductsToShow] = useState([]);
    // const products = [];

    function loadCatalog(){
        let cleats = ["Cleats"];
        let service = new DataService();
        let data = service.getProducts();
        setProducts(data);
        setCategories(cleats);
    }

    useEffect(()=> {
        // Load your data here
        let service = new DataService();
        let data = service.getProducts();
        setProducts (data);
        loadCatalog();
    }, []);  // We specify how many times this effect runs

    function filter(category){
        let list = [];
        // find products that match the category
        //create the for loop to travel the array and filter the products
        // we already have the products in the products variable
        for (let i=0; i<products.length; i++) {
            let prod = products[i];
            if(prod.category === category){
                list.push(prod);
            }
        }
        setProductsToShow(list);  
    }

    function clearFilter(){
        setProducts(products);
    }
    
    return(
        <div className="catalog">
            <h1>Our amazing cleats catalog</h1>
            {/* please render back all the produts */}
            {/* you need ti create a function that clear the filter */}
            <button className="btn btn-info" onClick={clearFilter}>All</button>
            {categories.map (cat => <button key ={cat} onClick={()=> filter(cat)}>{cat}</button>)}
            {/* for(i=0;i<categories.length;i++)
            let cat = categories[i];
            <button>{cat}</button> */}
            {productsToShow.map(prod => <Product key={prod._id} data = {prod}/>)}
        
        </div>
    );
}
export default Catalog;