import { useEffect, useState } from 'react'
import productApi from 'api/productApi'

export default function useProductDetail(productId) {
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        setLoading(true)
        const response = await productApi.get(productId)

        setProduct(response)
      } catch (error) {
        console.log('Failed to fetch product: ', error)
      }

      setLoading(false)
    }

    fetchProductById()
  }, [productId])

  return {
    product,
    loading
  }
}
