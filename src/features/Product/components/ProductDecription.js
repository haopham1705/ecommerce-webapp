import { Paper } from '@material-ui/core'
import React from 'react'
import DOMPurify from 'dompurify'

export default function ProductDecription({ product }) {
  const safeDecription = DOMPurify.sanitize(product.description)

  return (
    <Paper elevation={0} style={{padding: '15px'}}>
      <div dangerouslySetInnerHTML={{ __html: safeDecription }} />
    </Paper>
  )
}
