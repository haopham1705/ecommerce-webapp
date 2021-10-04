import { Box, makeStyles, Paper } from '@material-ui/core'
import React from 'react'
import CartItem from './CartItem'

const useStyles = makeStyles((theme) => ({
  pd20: {
    padding: theme.spacing(1)
  }
}))

function CartList(props) {
  const classes = useStyles()

  const { cartItems, onCountChange } = props

  const handleCountChange = (value) => {
    onCountChange?.(value)
  }

  const renderCartItem = cartItems.map((item) => {
    return <CartItem key={item.id} item={item} onCountChange={handleCountChange} />
  })

  return (
    <Paper elevation={0} className={classes.pd20}>
      <Box component="ul">{renderCartItem}</Box>
    </Paper>
  )
}

export default React.memo(CartList)
