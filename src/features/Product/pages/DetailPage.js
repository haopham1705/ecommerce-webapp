import {
  Box,
  Container,
  Grid,
  LinearProgress,
  makeStyles,
  Paper
} from '@material-ui/core'
import { addToCart } from 'features/Cart/cartSlice'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Route, Switch, useRouteMatch } from 'react-router'
import AddToCartForm from '../components/AddToCartForm'
import ProductAdditional from '../components/ProductAdditional'
import ProductDecription from '../components/ProductDecription'
import ProductInfo from '../components/ProductInfo'
import ProductMenu from '../components/ProductMenu'
import ProductThumbnail from '../components/ProductThumbnail'
import ProductReviews from './../components/ProductReviews'
import useProductDetail from './../hooks/useProductDetail'

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: theme.spacing(3)
  },
  left: {
    width: '400px',
    padding: theme.spacing(1.5),
    borderRight: `1px solid ${theme.palette.grey[300]}`
  },
  right: {
    flex: '1 1 0',
    padding: theme.spacing(1.5),
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  }
}))

export default function DetailPage() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const math = useRouteMatch()
  const { params, url } = math
  const { productId } = params

  const { product, loading } = useProductDetail(productId)

  if (loading) {
    return (
      <Box>
        <LinearProgress />
      </Box>
    )
  }

  const handleAddToCart = (values) => {
    const action = addToCart({
      id: product.id,
      product,
      quantity: values.quantity
    })
    console.log(action)
    dispatch(action)
  }

  return (
    <Box>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item className={classes.left}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item className={classes.right}>
              <ProductInfo product={product} />
              <AddToCartForm onAddToCart={handleAddToCart} />
            </Grid>
          </Grid>
        </Paper>
        <ProductMenu />
        <Switch>
          <Route exact path={url}>
            <ProductDecription product={product} />
          </Route>
          <Route exact path={`${url}/additional`}>
            <ProductAdditional product={product} />
          </Route>
          <Route exact path={`${url}/reviews`}>
            <ProductReviews product={product} />
          </Route>
        </Switch>
      </Container>
    </Box>
  )
}
