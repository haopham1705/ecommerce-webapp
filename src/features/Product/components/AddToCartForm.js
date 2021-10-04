import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button } from '@material-ui/core'
import QuantityField from 'components/form-controls/QuantityField'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

export default function AddToCartForm({ onAddToCart }) {
  const schema = yup.object().shape({
    quantity: yup
      .number()
      .min(1, 'Please enter at least 1')
      .required('Please enter quantity')
      .typeError('Please enter a number')
  })

  const form = useForm({
    defaultValues: {
      quantity: 1
    },
    mode: 'onChange',
    resolver: yupResolver(schema)
  })

  const handleAddToCart = (values) => {
    onAddToCart?.(values)
  }

  return (
    <Box width="200px">
      <form onSubmit={form.handleSubmit(handleAddToCart)}>
        <QuantityField form={form} name="quantity" label="Nhập số lượng" />
        <Button type="submit" variant="contained" color="primary" fullWidth size="large">
          Thêm
        </Button>
      </form>
    </Box>
  )
}
