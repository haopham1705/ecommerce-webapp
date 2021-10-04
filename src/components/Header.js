import {
  AppBar,
  Badge,
  Box,
  Button,
  Dialog,
  DialogActions,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons'
import AccountBoxIcon from '@material-ui/icons/AccountBox'
import ArrowDropDownSharpIcon from '@material-ui/icons/ArrowDropDownSharp'
import { ModeSign } from 'constants/mode-sign'
import { Login, Register } from 'features/Auth'
import { logout } from 'features/Auth/userSlice'
import { cartItemsCountSelector } from 'features/Cart/selectors'
import { useSnackbar } from 'notistack'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  link: {
    color: 'white'
  },
  logged: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  redirect: {
    textTransform: 'unset'
  },
  personLog: {
    backgroundColor: '#2e40a2'
  },
  menuItem: {
    color: 'white'
  }
}))

export default function Header(props) {
  const { isLoggedIn } = props
  const { enqueueSnackbar } = useSnackbar()
  const dispatch = useDispatch()
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const [mode, setMode] = useState(ModeSign.LOGIN)
  const [anchorEl, setAnchorEl] = useState(null)
  const cartItemsCount = useSelector(cartItemsCountSelector)

  const handleShowMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  const handleRedirectLogin = () => {
    setMode(ModeSign.LOGIN)
  }

  const handleRedirectRegister = () => {
    setMode(ModeSign.REGISTER)
  }

  const handleLogout = () => {
    const action = logout()

    dispatch(action)
    enqueueSnackbar('Logout successfully!', { variant: 'success' })
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <NavLink className={classes.link} to="/">
              P - Shop
            </NavLink>
          </Typography>
          {!isLoggedIn ? (
            <>
              <Button color="inherit" onClick={handleClickOpen}>
                <div className={classes.logged}>
                  <AccountBoxIcon className={classes.menuButton} />
                  <span style={{ textTransform: 'none' }}>Đăng nhập / Đăng ký</span>
                </div>
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="form-dialog-title"
                disableBackdropClick
              >
                {mode === ModeSign.REGISTER && (
                  <>
                    <Register />
                    <Box textAlign="right" className={classes.menuButton}>
                      <Button
                        className={classes.redirect}
                        onClick={handleRedirectLogin}
                        color="primary"
                      >
                        Bạn đã có tài khoản? Đăng nhập ngay
                      </Button>
                    </Box>
                  </>
                )}
                {mode === ModeSign.LOGIN && (
                  <>
                    <Login />
                    <Box textAlign="right" className={classes.menuButton}>
                      <Button
                        className={classes.redirect}
                        onClick={handleRedirectRegister}
                        color="primary"
                      >
                        Bạn chưa có tài khoản? Đăng ký ngay
                      </Button>
                    </Box>
                  </>
                )}
                <DialogActions>
                  <Button onClick={handleClose} color="primary">
                    Đóng
                  </Button>
                </DialogActions>
              </Dialog>
            </>
          ) : (
            <div style={{ textAlign: 'right' }}>
              <Button style={{ marginRight: '10px' }}>
                <NavLink className={classes.menuItem} to="/products">
                  Sản phẩm
                </NavLink>
              </Button>
              <NavLink to="/cart" className={classes.menuItem}>
                <IconButton aria-label="show 4 new mails" color="inherit">
                  <Badge badgeContent={cartItemsCount} color="secondary">
                    <ShoppingCart />
                  </Badge>
                </IconButton>
              </NavLink>
              <Button
                color="inherit"
                className={classes.personLog}
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleShowMenu}
              >
                <AccountBoxIcon />
                <ArrowDropDownSharpIcon />
              </Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleCloseMenu}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  )
}
