import React, { Component } from 'react';
import { TextField, Button, Grid, Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { styles } from '../utils/css/styles';
import { AuthConsumer } from './context/AuthProvider';

class Login extends Component {
    state = {
        user: "",
        pass: ""
    }

    constructor(props) {
        super(props);
        this.setUser = this.setUser.bind(this);
        this.setPass = this.setPass.bind(this);
    }

    render() {
        const { classes } = this.props;
        return (
                <Grid container direction="row">
                    <Grid item xs={4} />
                    <Grid item xs={2}>
                        <Paper >
                            <TextField className={classes.textField} id="user" label="legajo" value={this.state.user} onChange={this.setUser} type="text" />
                            <TextField className={classes.textField} id="pass" label="Contraseña" value={this.state.pass} onChange={this.setPass} type="password" />
                        <AuthConsumer>{( {login} ) => (
                            <Button variant="contained" className={classes.textField} onClick={e => login(this.state.user,this.state.pass,e)} color="primary" >Ingresar</Button>
                        )}</AuthConsumer>
                        </Paper>
                    </Grid>
                    <Grid item xs={4} />
                </Grid>
        )
    }
    setUser(e) { this.setState({ user: e.target.value }) }
    setPass(e) { this.setState({ pass: e.target.value }) }
}


export default withStyles(styles)(Login);


/*<Grid container direction="row">
<Grid item xs={4} />
<Grid item xs={2}>
    <Paper >
        <TextField className={classes.textField} id="user" label="legajo" value={this.state.user} onChange={this.setUser} type="text" />
        <TextField className={classes.textField} id="pass" label="Contraseña" value={this.state.pass} onChange={this.setPass} type="password" />
        <Button variant="contained" className={classes.textField} onClick={this.onClickEnviar} color="primary" >Ingresar</Button>
    </Paper>
</Grid>
<Grid item xs={4} />
</Grid>*/