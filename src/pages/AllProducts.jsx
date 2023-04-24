import { useEffect, useState } from 'react'
import './AllProducts.css'
import { ProductCard } from '../components/ProductCard'

const GET_ALL_PRODUCTS = "https://fakestoreapi.com/products"

export function AllProducts() {
  const [products, setProducts] = useState()
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch(GET_ALL_PRODUCTS)
      .then(res => res.json())
      .then(data => {
        setProducts((data))
      })
  }, [])

  const handleSearch = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <div>
        <h1>ALL PRODUCTS</h1>
        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Buscar producto..." />
        <div className='pd-all-container'>
          {products ? <ProductCard products={products} searchTerm={searchTerm}/> : <h3 className='pd-loading'>Cargando...</h3>}
        </div>
      </div>
    </>
  )
}
