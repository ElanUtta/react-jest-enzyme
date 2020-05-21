import React from 'react';
import PropTypes from 'prop-types'
import { Table, TableRow, TableCell, TableHead, TableContainer, Paper, TableBody } from '@material-ui/core';
import { Container } from '@material-ui/core';

const GuessedWords = (props) => {
    let contents
    if (props.guessedWords.length === 0) {
        contents = (
            <span data-test='guess-instructions'>
                Try to guess the secret word!
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

            <Container data-test='guessed-words' maxWidth="sm">
                <h3>Guessed Words</h3>
                <TableContainer component={Paper}>
                    <Table aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Guess</TableCell>
                                <TableCell align="center">Matching Letters</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {guessedWordsRows}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Container>

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