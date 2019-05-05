import React, { Component } from 'react';
import { Grid,Button,Toolbar,AppBar } from '@material-ui/core';

class Menu extends Component {
    render() {
        return(
            <div>
                <AppBar position="static">
                    <Toolbar>
                        <Grid container>
                            <Grid item xs={11}>
                                <Button color="inherit" href='/inicio'>Inicio</Button>
                                <Button color="inherit" href='/history' >Historia</Button>
                                <Button color="inherit" href='/alumnos/gestion' >Alumno</Button>
                                <Button color="inherit" href='/profesores/gestion' >Profesor</Button>
                                <Button color="inherit" href='/asistencias'>Asistencias</Button>
                            </Grid>
                            <Grid item xs={1}>
                                <Button color="inherit" href='/login'>Login</Button>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
 
            </div>
        )
    }
}


export default Menu;