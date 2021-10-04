import { Tab, Tabs } from '@material-ui/core'
import React from 'react'

export default function ProductSort(props) {
  const { onSortChange, currentSort } = props

  const handleSortChange = (e, valueSort) => {
    onSortChange?.(valueSort)
  }

  return (
    <Tabs
      indicatorColor="primary"
      textColor="primary"
      aria-label="disabled tabs example"
      onChange={handleSortChange}
      value={currentSort}
    >
      <Tab label="Giá thấp" value="salePrice:ASC" />
      <Tab label="Giá cao" value="salePrice:DESC" />
    </Tabs>
  )
}
