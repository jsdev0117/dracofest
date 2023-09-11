import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import MainCard from '../components/MainCard'
import UploadIcon from '@mui/icons-material/Upload';
import SendIcon from '@mui/icons-material/Send';

const Entradas = () => {
  return (
    <div className='p-4'>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div>Entradas</div>
        </Grid>
        <Grid item xs={12}>
          <div className='p-20'>
            <MainCard>
              <Grid container spacing={3} alignItems={'center'}>
                <Grid align='left' item xs={6}>
                  Nombre:
                </Grid>
                <Grid align='right' item xs={6}>
                  <TextField size='small' fullWidth placeholder='Naruto Uzumaki'/>
                </Grid>

                <Grid align='left' item xs={6}>
                  Correo:
                </Grid>
                <Grid align='right' item xs={6}>
                  <TextField size='small' fullWidth placeholder='hokage@gmail.com'/>
                </Grid>

                <Grid align='left' item xs={6}>
                  Cedula:
                </Grid>
                <Grid align='right' item xs={6}>
                  <TextField size='small' fullWidth placeholder='V29675874'/>
                </Grid>

                <Grid align='left' item xs={6}>
                  Comprobante:
                </Grid>
                <Grid align='right' item xs={6}>
                  <Button variant='outlined' startIcon={<UploadIcon/>} color='info' fullWidth>
                    subir
                  </Button>
                </Grid>

                <Grid item xs={12} align='center'>
                  <Button variant='outlined'>
                    Enviar
                  </Button>
                </Grid>
              </Grid>
            </MainCard>
          </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default Entradas