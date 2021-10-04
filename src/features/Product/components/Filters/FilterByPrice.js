import { yupResolver } from '@hookform/resolvers/yup'
import { Box, makeStyles, Typography } from '@material-ui/core'
import ButtonField from 'components/form-controls/ButtonField'
import InputField from 'components/form-controls/InputField'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  },
  form: {
    marginTop: theme.spacing(2)
  },
  formField: {
    display: 'flex',
  },
  field: {
    marginRight: theme.spacing(1)
  },
  buttonSubmit: {
    marginTop: theme.spacing(1)
  }
}))

export default function FilterByPrice({ onPriceChange }) {
  const classes = useStyles()

  const schema = yup.object().shape({
    salePrice_gte: yup
      .number()
      .typeError('Xin hãy nhập đúng định dạng số'),
    salePrice_lte: yup
      .number()
      .typeError('Xin hãy nhập đúng định dạng số')
  })

  const form = useForm({
    defaultValues: {
      salePrice_gte: 0,
      salePrice_lte: 0
    },
    resolver: yupResolver(schema)
  })

  const handlePriceChange = (values) => {
    onPriceChange?.(values)
  }

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">GIÁ</Typography>
      <form onSubmit={form.handleSubmit(handlePriceChange)} className={classes.form}>
        <Box className={classes.formField}>
          <InputField className={classes.field} label="Min" name="salePrice_gte" form={form} />
          <InputField label="Max" name="salePrice_lte" form={form} />
        </Box>
        <ButtonField classNameButton={classes.buttonSubmit} text="Áp dụng" />
      </form>
    </Box>
  )
}
