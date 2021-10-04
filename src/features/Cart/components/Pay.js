import { Box, makeStyles } from '@material-ui/core'
import ButtonField from 'components/form-controls/ButtonField'
import React from 'react'
import { formatPrice } from './../../../utils/common'

const useStyles = makeStyles((theme) => ({
  box: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'grey'
  }
}))

export default function Pay({ cartTotal }) {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.box} style={{ marginBottom: '2rem' }}>
        <span>Tạm tính</span>
        <span style={{ color: 'black' }}>{formatPrice(cartTotal)}</span>
      </Box>
      <Box className={classes.box}>
        <span>Thành tiền</span>
        <span style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
          <span style={{ color: '#FE3E3A', fontWeight: 'bold', fontSize: '2rem' }}>
            {formatPrice(cartTotal)}
          </span>
          <span>(Đã bao gồm VAT nếu có)</span>
        </span>
      </Box>
    </Box>
  )
}
