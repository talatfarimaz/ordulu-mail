import ProductsStyle from "../Styles/ProductsStyle";
import ProductsSectionOne from "./Products/ProductsSectionOne";
import ProductsSectionTwo from "./Products/ProductsSectionTwo";
import {useRef} from "react";


function Products() {
    const classes = ProductsStyle();
    const ref = useRef();
    const handleGoSelectedProduct = (selectedProduct) => {
        ref.current.handleGoSelectedProduct(selectedProduct);
    }
    return (
        <div className={classes.bodyDivStyle}>
            <ProductsSectionOne handleGoSelectedProduct={handleGoSelectedProduct}/>
            <ProductsSectionTwo ref={ref}/>
        </div>
    );
}

export default Products;