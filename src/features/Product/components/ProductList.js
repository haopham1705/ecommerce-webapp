import { Box, Grid } from '@material-ui/core'
import React from 'react'
import ProductItem from './ProductItem'

export default function ProductList({ productList }) {
  return (
    <Box>
      <Grid container>
        {productList.map((product) => {
          return (
            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
              <ProductItem product={product} />
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
