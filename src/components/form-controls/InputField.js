import { TextField } from '@material-ui/core'
import { Controller } from 'react-hook-form'

export default function InputField(props) {
  const { form, name, label } = props
  const { control } = form

  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: {onChange, onBlur, value, name },
        fieldState: { invalid, isTouched, error }
      }) => {
        return (
          <TextField
            name={name}
            error={isTouched && invalid}
            helperText={error?.message}
            label={label}
            variant="outlined"
            fullWidth
            value={value}
            onChange={onChange}
            onBlur={onBlur}
          />
        )
      }}
    />
  )
}
