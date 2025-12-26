import { Product } from "./types";

export function ProductCard({product}: { product: Product }) {
    return <div className="product-card">
        <div className="row first-row">
            <button className="is-saved">
                {
                    product.isSaved ? <img src="/images/icons/heart-filled.svg" alt="Saved" /> : <img src="/images/icons/heart.svg" alt="Saved" />
                }
            </button>
        </div>
        <img src={product.image} alt={product.name}  style={{marginTop: 'auto'}}/>

        <div className="row" style={{marginTop: 'auto'}}>
            <div className="column">
                <h6 className="name">{product.name}</h6>
                <p className="description">{product.description}</p>
            </div>
            <div className="column">
                <h3 className="price">€{product.price}</h3>
                <button className="add-to-cart">Add to cart</button>
            </div>
        </div>
    </div>
}