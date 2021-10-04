import { Box, Link, makeStyles } from '@material-ui/core'
import React from 'react'
import { NavLink, useRouteMatch } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& > li': {
      padding: theme.spacing(2, 4)
    },
    '& > li > a': {
      color: theme.palette.grey[700],
    },
    '& > li > a.active': {
      color: theme.palette.primary.main,
      textDecotation: 'underline'
    },
  },
}))

export default function ProductMenu(props) {
  const math = useRouteMatch()
  const { url } = math
  const classes = useStyles()

  return (
    <Box component="ul" className={classes.root}>
      <li>
        <Link component={NavLink} to={url} exact>
          Mô tả
        </Link>
      </li>
      <li>
        <Link component={NavLink} to={`${url}/additional`} exact>
          Thông tin thêm
        </Link>
      </li>
      <li>
        <Link component={NavLink} to={`${url}/reviews`} exact>
          Đánh giá
        </Link>
      </li>
    </Box>
  )
}
