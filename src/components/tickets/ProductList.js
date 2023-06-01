import { useEffect, useState } from "react"
import "./Product.css"

export const ProductList = () => {
    const [products, setProducts] = useState([])

    useEffect(
        () => {
            fetch(`http://localhost:8088/products`)
            .then(response => response.json())
            .then((productArray) => {
                setProducts(productArray)
            })
            },
        []
    )
    return <>
        <h2>List of Products</h2>

        <article className="products">
            {
                products.map(
                    (product) => {
                        return <section className="product" key={product.id}>
                            <header>{product.name}</header>
                            <footer>{product.price}</footer>
                        </section>
                    }
                )
            }
        </article>
    </>
}