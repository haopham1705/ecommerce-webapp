import {
  FormControl,
  FormHelperText,

  InputLabel,
  OutlinedInput
} from '@material-ui/core'
import React from 'react'
import { Controller } from 'react-hook-form'

export default function QuantityField(props) {
  const { form, name, label } = props
  const { control } = form

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({
          field: { onChange, onBlur, value, name },
          fieldState: { invalid, isTouched, error }
        }) => {
          return (
            <>
              <FormControl  error={isTouched && invalid} fullWidth variant="outlined">
                <InputLabel>{label}</InputLabel>
                <OutlinedInput
                  name={name}
                  error={invalid}
                  type="number"
                  label={label}
                  labelWidth={70}
                  onChange={onChange}
                  value={value}
                  onBlur={onBlur}
                />
              </FormControl>
              <FormHelperText error={invalid}>{error?.message}</FormHelperText>
            </>
          )
        }}
      />
    </div>
  )
}
