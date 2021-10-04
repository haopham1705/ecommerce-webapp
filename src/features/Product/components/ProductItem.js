import { Box, Typography } from '@material-ui/core'
import React from 'react'
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index'
import { useHistory } from 'react-router'
import { formatPrice } from 'utils';

export default function ProductItem({ product }) {
  const history = useHistory()

  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER


  const handleProductClick = () => {
    if (!product) return

    history.push(`/products/${product.id}`)
  }

  return (
    <Box padding={1} onClick={handleProductClick}>
      <Box padding={1} minHeight="200px">
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </Box>
      <Typography variant="body2">{product.name}</Typography>
      <Typography variant="body2">
        <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
          {formatPrice(product.salePrice)}
        </Box>
        {product.promotionPercent > 0 ? ` -${product.promotionPercent}%` : ''}
      </Typography>
    </Box>
  )
}
