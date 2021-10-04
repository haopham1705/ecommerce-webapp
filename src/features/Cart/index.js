import { Box, Container, Grid, makeStyles, Paper } from '@material-ui/core'
import ButtonField from 'components/form-controls/ButtonField'
import { cartItemsCountSelector } from 'features/Cart/selectors'
import { React } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setQuantity } from './cartSlice'
import CartList from './components/CartList'
import Pay from './components/Pay'
import { cartTotalSelector } from './selectors'

const useStyles = makeStyles((theme) => ({
  root: {},
  left: {
    width: '70%'
  },
  right: {
    flex: '1 1 0'
  },
  pd20: {
    padding: theme.spacing(1),
  },
  countBox: {
    marginBottom: theme.spacing(2),
    display: 'inline-block'
  },
  count: {
    color: 'grey',
    fontSize: '1rem'
  }
}))

export default function CartFeature() {
  const classes = useStyles()
  const cartTotal = useSelector(cartTotalSelector)
  const cartItemCount = useSelector(cartItemsCountSelector)
  const cartItems = useSelector((state) => state.cart.cartItems)
  const dispatch = useDispatch()

  const handleCountChange = (value) => {
    const action = setQuantity({
      ...value,
      quantity: Number.parseInt(value.quantity)
    })

    dispatch(action)
  }

  return (
    <Box pt={4}>
      <Container>
        <Box component="span" className={classes.countBox}>
          GIỎ HÀNG{' '}
          <Box
            className={classes.count}
            component="span"
          >{`(${cartItemCount} sản phẩm)`}</Box>
        </Box>
        <Grid container spacing={1}>
          <Grid className={classes.left} item>
            <CartList
              onCountChange={handleCountChange}
              cartTotal={cartTotal}
              cartItemCount={cartItemCount}
              cartItems={cartItems}
            />
          </Grid>
          <Grid className={classes.right} item>
            <Paper elevation={0} className={classes.pd20}>
              <Pay cartTotal={cartTotal} />
            </Paper>
            <Box>
              <ButtonField text="Tiến hành đặt hàng" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
