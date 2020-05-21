import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../test/testUtils';
import GuessedWords from './GuessedWords';


const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
};

/**
 * Factory function to create a SHallowWrapper for the congrats component
 * @function setup
 * @param {object} props 
 * @returns {ShallowWrapper}
 */

const setup = (props = {}) => {
    const setUpProps = { ...defaultProps, ...props };
    return shallow(<GuessedWords {...setUpProps} />)

}

test('does not throw warning with expected props ', () => {
    checkProps(GuessedWords, defaultProps);
})

describe('if there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({ guessedWords: [] });
    })
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1)
    });

    test('renders instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text()).not.toBe(0)
    })
});

describe('if there are words guessed', () => {
    let wrapper;

    const guessedWords = [
        { guessedWord: 'train', letterMatchCount: 3 },
        { guessedWord: 'agile', letterMatchCount: 1 },
        { guessedWord: 'party', letterMatchCount: 5 },
    ];

    beforeEach(() => {
        wrapper = setup({ guessedWords })
    })

    test('renders without error', () => {
        const instructions = findByTestAttr(wrapper, 'component-guessed-words');
        expect(instructions.length).toBe(1)
    });

    test('renders guessed words section', () => {
        const guessedWordNode = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordNode.length).toBe(1)
    });

    test('correct number of guessed words', () => {
        const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
        expect(guessedWordsNodes.lenght).toBe(guessedWords.lenght);

    })
})

