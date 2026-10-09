
import { useState } from 'react'
import { TextField, RadioGroup, Radio, FormControl, FormControlLabel, FormLabel, Slider, Select, MenuItem, InputLabel, Rating, Button, Box, Typography } from '@mui/material'

function FormularioGuerreros({ onRegistrar }) {
  const [nombre, setNombre] = useState('')
  const [tipo, setTipo] = useState('Orco')
  const [nivel, setNivel] = useState(50)
  const [categoria, setCategoria] = useState('')
  const [amenaza, setAmenaza] = useState(0)

  const limpiarFormulario = () => {
    setNombre('')
    setTipo('Orco')
    setNivel(50)
    setCategoria('')
    setAmenaza(0)
  }

  const manejarEnvio = (event) => { event.preventDefault()
    const nuevoGuerrero = {
      nombre: nombre.trim(),
      tipo,
      nivel,
      categoria,
      amenaza
    }

    onRegistrar(nuevoGuerrero)
    limpiarFormulario()
  }

  return (
    <Box
      component="form"
      onSubmit={manejarEnvio}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 3
      }}
    >
      <TextField
        label="Nombre del guerrero"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        required
        fullWidth
      />

      <FormControl required>
        <FormLabel>Tipo de guerrero</FormLabel>

        <RadioGroup row value={tipo} onChange={(e) => setTipo(e.target.value)}>
          <FormControlLabel value="Orco" control={<Radio />} label="Orco"/>

          <FormControlLabel value="Uruk" control={<Radio />} label="Uruk"/>
        </RadioGroup>
      </FormControl>

      <Box>
        <Typography gutterBottom>
          Nivel de combate: {nivel}
        </Typography>

        <Slider
          value={nivel}
          onChange={(_, nuevoNivel) => setNivel(nuevoNivel)}
          min={1}
          max={100}
          step={1}
          valueLabelDisplay="auto"
          marks={[
            { value: 1, label: '1' },
            { value: 50, label: '50' },
            { value: 100, label: '100' }
          ]}
          aria-label="Nivel de combate"
        />
      </Box>

      <FormControl fullWidth required>
        <InputLabel id="categoria-label">
          Categoría / Rango
        </InputLabel>

        <Select
          labelId="categoria-label"
          label="Categoría / Rango"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          required
        >
          <MenuItem value="Capitán">Capitán</MenuItem>
          <MenuItem value="Berserker">Berserker</MenuItem>
          <MenuItem value="Explorador">Explorador</MenuItem>
          <MenuItem value="Asediador">Asediador</MenuItem>
        </Select>
      </FormControl>

      <FormControl required>
        <FormLabel>Nivel de amenaza / furia</FormLabel>

        <Rating value={amenaza} onChange={(_, nuevoValor) => {setAmenaza(nuevoValor ?? 0)}} size="large" max={5}/>

        <Typography variant="caption" color="text.secondary">
          Selecciona entre 1 y 5 estrellas.
        </Typography>
      </FormControl>

      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{
          bgcolor: '#42362a',
          '&:hover': { bgcolor: '#29251f' }
        }}
      >
        Registrar Guerrero
      </Button>
    </Box>
  )
}

export default FormularioGuerreros