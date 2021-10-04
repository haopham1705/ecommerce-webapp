import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'

export default function PasswordField(props) {
  const { form, name, label } = props
  const { control } = form

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword)
  }

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
              <FormControl error={isTouched && invalid} fullWidth variant="outlined">
                <InputLabel>{label}</InputLabel>

                <OutlinedInput
                  name={name}
                  error={invalid}
                  type={showPassword ? 'text' : 'password'}
                  label={label}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
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
