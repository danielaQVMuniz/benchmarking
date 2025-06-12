import Toolbar from '@mui/material/Toolbar'
import AppBar from '@mui/material/AppBar'
import { FC } from 'react'
import Typography from '@mui/material/Typography'

export const Header: FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography
          variant="h1"
          component="div"
          sx={{ fontSize: '20px', fontWeight: 500 }}
        >
          Energy Benchmarking
        </Typography>
      </Toolbar>
    </AppBar>
  )
}
