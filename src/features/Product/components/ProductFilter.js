import { Box } from '@material-ui/core'
import React from 'react'
import FilterByCategory from './Filters/FilterByCategory'
import FilterByPrice from './Filters/FilterByPrice'
import FilterByService from './Filters/FilterByService'

export default function ProductFilter(props) {
  const { onFilterChange, filters } = props

  const handleCategoryChange = (category) => {
    const newFilters = {
      'category.id': category.id
    }
    
    onFilterChange?.(newFilters)
  }

  const handlePriceChange = (values) => {
    onFilterChange?.(values)
  }

  const handleServiceChange = (values) => {
    onFilterChange?.(values)
  }

  return (
  <Box>
    <FilterByCategory onCategoryChange={handleCategoryChange} />
    <FilterByPrice onPriceChange={handlePriceChange} />
    <FilterByService filters={filters}  onServiceChange={handleServiceChange} />
  </Box>
    )
}
