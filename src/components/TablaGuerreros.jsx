import { Table, TableHead, TableBody, TableRow, TableCell, TableContainer, Chip, Button, Rating, Typography } from '@mui/material'

function TablaGuerreros({ guerreros, onEliminar }) {
  if (guerreros.length === 0) {
    return (
      <Typography color="text.secondary" sx={{ py: 3 }}>
        Todavía no hay guerreros en el ejército.
      </Typography>
    )
  }

  return (
    <TableContainer>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell><strong>Nombre</strong></TableCell>
            <TableCell><strong>Tipo</strong></TableCell>
            <TableCell><strong>Rango</strong></TableCell>
            <TableCell align="center"><strong>Nivel</strong></TableCell>
            <TableCell><strong>Amenaza</strong></TableCell>
            <TableCell><strong>Acción</strong></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {guerreros.map((e) => (
            <TableRow key={e.id} hover>
              <TableCell>{e.nombre}</TableCell>

              <TableCell>
                <Chip
                  label={e.tipo}
                  color={e.tipo === 'Orco' ? 'success' : 'error'}
                  size="small"
                />
              </TableCell>

              <TableCell>{e.categoria}</TableCell>

              <TableCell align="center">
                {e.nivel}
              </TableCell>

              <TableCell>
                <Rating
                  value={e.amenaza}
                  readOnly
                  size="small"
                  max={5}
                />
              </TableCell>

              <TableCell>
                <Button
                  variant="contained"
                  color="error"
                  size="small"
                  onClick={() => onEliminar(e.id)}
                  sx={{ minWidth: 175 }}
                >
                  Asesinado por la aparición
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TablaGuerreros