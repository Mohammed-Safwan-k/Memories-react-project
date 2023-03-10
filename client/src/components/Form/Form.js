import React from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

import useStyles from './styles'
const Form = () => {
    const classes = useStyles();

    const handleSubmit = () => {

    }

    return(
        <Paper className={classes.paper}>
            <Form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Memory</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth />
            </Form>

        </Paper>
    );
}

export default Form;