import "./products.css";
import { Hero } from "./Hero";
import { ProductsList } from "./ProductsList";

export default function Products() {
    return <div className="products-page">
        <Hero />

        <ProductsList />
    </div>
}