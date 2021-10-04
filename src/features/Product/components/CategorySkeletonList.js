import { Box } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import React from 'react'

export default function CategorySkeletonList({ length }) {
  return (
    <Box>
      {Array.from(new Array(length)).map((x, index) => {
        return (
          <Box key={index} padding={1}>
            <Skeleton width="50%" />
          </Box>
        )
      })}
    </Box>
  )
}
