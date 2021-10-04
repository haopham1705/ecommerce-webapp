import { Box, Grid } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import React from 'react'

export default function ProductSkeletonList({ length }) {
  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => {
          return (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
              <Box padding={1}>
                <Skeleton variant="rect" width="100%" height={200} />
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Grid>
          )
        })}
      </Grid>
    </Box>
  )
}
