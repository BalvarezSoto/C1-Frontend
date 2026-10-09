import { useState } from 'react'
import { Typography, Paper } from '@mui/material'

import FormularioGuerreros from '../components/FormularioGuerreros'
import TablaGuerreros from '../components/TablaGuerreros'

function EjercitodeMordor() {
    const [guerreros, setGuerreros] = useState([])

    const registrarGuerrero = (guerrero) => {
    setGuerreros((listaAnterior) => [
        ...listaAnterior,
        { ...guerrero, id: listaAnterior.length + 1 }
    ])
    }

    const eliminarGuerrero = (id) => {
        setGuerreros((listaAnterior) =>
        listaAnterior.filter((guerrero) => guerrero.id !== id)
        )
    }

    return (  
        <>
            <Typography variant="h4" component="h1" textAlign="center" fontWeight="bold" sx={{ mb: 1 }} >
                Ejército de Mordor
            </Typography>

            <div className="row g-4 mb-4" sx={{ bgcolor: '#232323' }}>
                <div >
                    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                        <Typography variant="h5" sx={{ mb: 3 }}>
                        Ingresar Guerrero
                        </Typography>

                        <FormularioGuerreros onRegistrar={registrarGuerrero} />
                    </Paper>
                </div>
            </div>
            <></>
            <div className="row g-4" sx={{ bgcolor: '#232323' }}>
                <div sx={{ bgcolor: '#232323' }}>
                    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
                        <Typography variant="h5" sx={{ mb: 3 }}>
                            Despliegue del Ejército
                        </Typography>

                        <TablaGuerreros guerreros={guerreros} onEliminar={eliminarGuerrero} />
                    </Paper>
                </div>
            </div>
        </>
    )
}

export default EjercitodeMordor
