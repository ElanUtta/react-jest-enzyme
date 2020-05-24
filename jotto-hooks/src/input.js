import React from 'react';
import PropTypes from 'prop-types';

export function Input({ word }) {
    return (
        <div data-test='component-imput'>

        </div>
    )
}


Input.propTypes = {
    secretWord: PropTypes.string.isRequired
}

