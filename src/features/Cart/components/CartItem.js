import { Box, makeStyles, Typography } from '@material-ui/core'
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { formatPrice } from 'utils'
import { removeFromCart } from '../cartSlice'
import './quantityField.css'
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  boxImg: {
    marginRight: '1rem',
    width: '20%'
  },
  typo: {
    width: '50%'
  },
  price: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  salePrice: {
    fontWeight: 'bold'
  },
  originalPrice: {
    fontSize: '.9rem',
    '& > span:nth-child(1)': {
      color: 'grey',
      textDecoration: 'line-through'
    }
  },
  quantity: {
    display: 'flex',
    '& > button': {
      width: '30px',
      height: '30px'
    }
  },
  quantityField: {
    width: '30px',
    height: '30px',
    padding: '0 2px',
    dispay: 'flex',
    justifyContent: 'center'
  },
  remove: {
    color: '#303f9f',
    cursor: 'pointer',
    '&:hover': {
      color: 'red',
      textDecoration: 'underline'
    }
  }
}))

export default function CartItem({ item, onCountChange }) {
  const classes = useStyles()
  const dispatch = useDispatch()
  const [value, setValue] = useState(() => {
    return item.quantity
  })
  const { product } = item
  const thumbnailUrl = product.thumbnail
    ? `${STATIC_HOST}${product.thumbnail?.url}`
    : THUMBNAIL_PLACEHOLDER

  const handleCountChange = (e) => {
    const newValue = e.target.value

    if (newValue >= 0) {
      setValue(newValue)
      onCountChange({
        id: product.id,
        quantity: newValue
      })
    }
  }

  const handleDecrement = () => {
    const newValue = value - 1

    if (newValue >= 0) {
      setValue(newValue)
      onCountChange({
        id: product.id,
        quantity: newValue
      })
    }
  }

  const handleIncrement = () => {
    const newValue = value + 1

    if (newValue >= 0) {
      setValue(newValue)
      onCountChange({
        id: product.id,
        quantity: newValue
      })
    }
  }

  const handleRemoveItem = () => {
    const action = removeFromCart(product.id)
    
    dispatch(action)
  }

  return (
    <Box className={classes.root}>
      <Box className={classes.boxImg}>
        <img src={thumbnailUrl} alt={product.name} width="100%" />
      </Box>
      <Box className={classes.typo}>
        <Typography>{product.shortDescription}</Typography>
        <span className={classes.remove} onClick={handleRemoveItem}>Xóa</span>
      </Box>
      <Box className={classes.price}>
        <span className={classes.salePrice}>{formatPrice(product.salePrice)}</span>
        {product.promotionPercent > 0 && (
          <span className={classes.originalPrice}>
            <span>{`${formatPrice(product.originalPrice)}`}</span>
            <span>{` | -${product.promotionPercent}%`}</span>
          </span>
        )}
      </Box>
      <Box className={classes.quantity}>
        <button onClick={handleDecrement}>-</button>
        <input
          className={classes.quantityField}
          type="number"
          value={value}
          onChange={handleCountChange}
        />
        <button onClick={handleIncrement}>+</button>
      </Box>
    </Box>
  )
}
