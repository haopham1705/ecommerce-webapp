import { Box, makeStyles, Typography } from '@material-ui/core'
import categoryApi from 'api/categoryApi'
import React, { useEffect, useState } from 'react'
import CategorySkeletonList from '../CategorySkeletonList'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    '& > h6': {
      fontWeight: '600'
    }
  },
  menu: {
    '& > li': {
      marginTop: theme.spacing(1),
      transition: 'all .25s',
      '& > p': {
        fontWeight: '500'
      },
      '&:hover': {
        color: theme.palette.primary.main,
        cursor: 'pointer'
      }
    }
  }
}))

export default function FilterByCategory({ onCategoryChange }) {
  const [categoryList, setCategoryList] = useState([])
  const [loading, setLoading] = useState(true)

  const classes = useStyles()

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const categoryList = await categoryApi.getAll()

        setLoading(false)
        setCategoryList(
          categoryList.map((category) => {
            return {
              id: category.id,
              name: category.name
            }
          })
        )
      } catch (error) {
        console.log('Failed to fetch category list: ', error)
      }
    }

    fetchCategory()
  }, [])

  const handleCategoryChange = (category) => {
    onCategoryChange?.(category)
  }

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>

      {loading ? (
        <CategorySkeletonList length={6} />
      ) : (
        <ul className={classes.menu}>
          {categoryList.map((category) => {
            return (
              <li key={category.id} onClick={() => handleCategoryChange(category)}>
                <Typography variant="body2">{category.name}</Typography>
              </li>
            )
          })}
        </ul>
      )}
    </Box>
  )
}
