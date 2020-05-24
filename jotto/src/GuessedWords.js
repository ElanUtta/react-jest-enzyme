import React from 'react';
import PropTypes from 'prop-types'
import {
    Table,
    TableRow,
    TableCell,
    TableHead,
    TableContainer,
    Paper,
    TableBody,
    Typography,
    withStyles
} from '@material-ui/core';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);


const GuessedWords = (props) => {
    let contents
    if (props.guessedWords.length === 0) {
        contents = (
            <span data-test='guess-instructions' >
                <Typography variant='h6'>Try to guess the secret word!</Typography>
            </span>
        );
    } else {
        const guessedWordsRows = props.guessedWords.map((word, index) => (
            <TableRow data-test='guessed-word' key={index}>
                <TableCell align="center">{word.guessedWord}</TableCell>
                <TableCell align="center">{word.letterMatchCount}</TableCell>
            </TableRow >
        ));

        contents = (

            <div data-test='guessed-words'>
                <h3 style={{ textAlign: 'center' }}>Guessed Words</h3>
                <TableContainer component={Paper}>
                    <Table aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Guess</StyledTableCell>
                                <StyledTableCell align="center">Matching Letters</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {guessedWordsRows}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div >

        )
    }

    return (
        <div data-test="component-guessed-words">
            {contents}
        </div>
    );
};

GuessedWords.propTypes = {
    guessedWords: PropTypes.arrayOf(
        PropTypes.shape({
            guessedWord: PropTypes.string.isRequired,
            letterMatchCount: PropTypes.number.isRequired
        })
    ).isRequired
}

export default GuessedWords;