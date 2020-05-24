import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@material-ui/lab';

/**
 * Functional react component for congratularoty message.
 * @function
 * @returns {JSX.Element}
 */


const Congrats = (props) => {


    if (props.success) {
        return (
            <div data-test='component-congrats'>
                <span data-test='congrats-message'>
                    <Alert severity="success">Congratulaions! You guessed the word!</Alert>
                </span>
            </div>
        )
    } else {
        return (
            <div data-test='component-congrats' />
        )
    }
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired
}

export default Congrats;