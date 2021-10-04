import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { formatPrice } from 'utils'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(2),
  },
  description: {
    margin: theme.spacing(2, 0)
  },
  priceBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
    display: 'inline-block'
  },
  salePrice: {
    fontSize: theme.typography.h3.fontSize,
    marginRight: theme.spacing(3)
  },
  originalPrice: {
    marginRight: theme.spacing(2),
    textDecoration: 'line-through'
  }
}))

export default function ProductInfo({ product }) {
  const classes = useStyles()

  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product

  return (
    <Box className={classes.root}>
      <Typography component="h1" variant="h4">
        {name}
      </Typography>
      <Typography variant="body2" className={classes.description}>
        {shortDescription}
      </Typography>
      <Box className={classes.priceBox}>
        {promotionPercent > 0 && (
          <>
            <Box component="span" className={classes.originalPrice}>
              {formatPrice(originalPrice)}
            </Box>
            <Box component="span">{`-${product.promotionPercent}%`}</Box>
          </>
        )}
        <Box component="span" className={classes.salePrice}>
          {formatPrice(salePrice)}
        </Box>
      </Box>
    </Box>
  )
}
