import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import './Product.css'

const GET_ALL_PRODUCTS = "https://fakestoreapi.com/products"

export function Product() {
	const { id } = useParams()
	const [product, setProduct] = useState()
	const [error, setError] = useState(false)

	useEffect(() => {
		fetch(`${GET_ALL_PRODUCTS}/${id}`)
			.then(res => {
				if (!res.ok) {
					throw new Error('Producto no encontrado');
				}
				return res.json();
			})
			.then(data => {
				setProduct(data)
			})
			.catch(error => {
				setError(true);
				console.error(error);
			});
	}, [id])

	return (
		<div>
			{error ? (
				<>
					<h3>Producto no encontrado</h3>
					<br /> <br />
					<Link to={`/`} className="pd-volver">VOLVER</Link>
				</>
			) : (
				product ? (
					<div className='pd'>
						<h1>{product.title}</h1>
						<div className="pd-container">
							<img src={product.image} alt={product.title} />
							<div>
								<p className="pd-description">{product.description}</p>
								<p className="pd-price">Price: ${product.price}</p>
							</div>
						</div>
						<br /> <br />
						<Link to={`/`} className="pd-volver">VOLVER</Link>
					</div>
				) : (
					<h3>Cargando...</h3>
				)
			)}
		</div>
	)
}