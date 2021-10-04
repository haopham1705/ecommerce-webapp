import {
  Box,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Typography
} from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2)
  }
}))

export default function FilterByService({ onServiceChange, filters }) {
  const services = [
    {
      id: 1,
      label: 'Có khuyến mãi',
      value: 'isPromotion'
    },
    {
      id: 2,
      label: 'Miễn phí vận chuyển',
      value: 'isFreeShip'
    }
  ]

  const classes = useStyles()
  const handleServiceChange = (e) => {
    const checked = e.target.checked
    const name = e.target.name

    const newValues = {
      [name]: checked
    }

    onServiceChange?.(newValues)
  }

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DỊCH VỤ</Typography>
      <ul>
        {services.map((service) => {
          return (
            <li key={service.value}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={Boolean(filters[service.value])}
                    name={service.value}
                    color="primary"
                    onChange={handleServiceChange}
                  />
                }
                label={service.label}
              />
            </li>
          )
        })}
      </ul>
    </Box>
  )
}
