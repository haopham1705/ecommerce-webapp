import { Box, Chip, makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    margin: theme.spacing(2, 0),
    '& > li': {
      margin: 0,
      padding: theme.spacing(1)
    }
  }
}))

const filtersList = [
  {
    id: 1,
    getLabel: (filters) => 'Giao hàng miễn phí',
    isActive: (filters) => filters.isFreeShip,
    isVisible: () => true,
    isRemovable: false,
    onRemove: () => {},
    onToggle: (filters) => {
      const newFilters = { ...filters }

      if (newFilters.isFreeShip) {
        delete newFilters.isFreeShip
      } else {
        newFilters.isFreeShip = true
      }

      return newFilters
    }
  },
  {
    id: 2,
    getLabel: () => 'Có khuyến mãi',
    isActive: () => true,
    isVisible: (filters) => Object.keys(filters).includes('isPromotion'),
    isRemovable: true,
    onRemove: (filters) => {
      const newFilters = { ...filters }
      delete newFilters.isPromotion

      return newFilters
    },
    onToggle: (filters) => {}
  },
  {
    id: 3,
    getLabel: (filters) => `Từ ${filters.salePrice_gte} đến ${filters.salePrice_lte}`,
    isActive: (filters) => true,
    isVisible: (filters) =>
      Object.keys(filters).includes('salePrice_lte') &&
      Object.keys(filters).includes('salePrice_gte'),
    isRemovable: true,
    onRemove: (filters) => {},
    onToggle: (filters) => {}
  }
]

export default function FilterViewer({ filters, onViewerChange }) {
  const classes = useStyles()

  return (
    <Box component="ul" className={classes.root}>
      {filtersList
        .filter((filter) => filter.isVisible(filters))
        .map((x) => {
          return (
            <li key={x.id}>
              <Chip
                label={x.getLabel(filters)}
                color={x.isActive(filters) ? 'primary' : 'default'}
                clickable={!x.isRemovable}
                onClick={
                  x.isRemove
                    ? null
                    : () => {
                        const newFilters = x.onToggle(filters)

                        onViewerChange?.(newFilters)
                      }
                }
                onDelete={
                  x.isRemovable
                    ? () => {
                        const newFilters = x.onRemove(filters)

                        onViewerChange?.(newFilters)
                      }
                    : null
                }
              />
            </li>
          )
        })}
    </Box>
  )
}
