import { Pagination } from '@material-ui/lab'
import React from 'react'

export default function ProductPagination(props) {
  const { count, page, onPageChange } = props

  const handlePageChange = (e, newPage) => {
    onPageChange?.(newPage)
  }

  return (
    <Pagination color="primary" count={count} page={page} onChange={handlePageChange} />
  )
}
