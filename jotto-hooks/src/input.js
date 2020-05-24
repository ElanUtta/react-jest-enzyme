import React from 'react';
import PropTypes from 'prop-types';
import { TextField, Button } from '@material-ui/core';

export function Input({ secretWord }) {
    const [currentGuess, setCurrentGuess] = React.useState("");
    return (
        <div data-test='component-imput'>
            <form
                noValidate autoComplete="off"
                type='text'
                placeholder='enter guess'
            >
                <TextField
                    data-test='input-box'
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    value={currentGuess}
                    onChange={(event) => setCurrentGuess(event.target.value)}
                />
                <Button
                    variant="contained"
                    data-test='submit-button'
                >submit</Button>
            </form>
        </div>
    )
}


Input.propTypes = {
    secretWord: PropTypes.string.isRequired
}

