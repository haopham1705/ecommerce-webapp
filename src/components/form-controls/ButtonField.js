import { Button } from '@material-ui/core'
import React from 'react'

export default function ButtonField(props) {
  const { classNameButton, text, disabled } = props

  return (
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classNameButton}
      disabled={disabled}
    >
      {text}
    </Button>
  )
}
