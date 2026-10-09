
import { AppBar, Toolbar, Typography, Box } from '@mui/material'
import EjercitodeMordor from '../containers/EjercitodeMordor'

function Layoutprincipal() {
  return (
    <Box sx={{ minHeight: '60vh', bgcolor: '#8A857B' }}>
      <AppBar position="static" sx={{ bgcolor: '#990000' }}>
        <Toolbar className="container">
          <Typography
            variant="h6"
            component="div"
            sx={{ fontWeight: 'bold', flexGrow: 1 }}
          >
            Anillo Único
          </Typography>

          <Typography
            variant="subtitle1"
            sx={{ textAlign: 'right', fontStyle: 'italic' }}
          >
            Uno para dominarlos a todos
          </Typography>
        </Toolbar>
      </AppBar>

      <main className="container py-4">
        <EjercitodeMordor />
      </main>
    </Box>
  )
}

export default Layoutprincipal