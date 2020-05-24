import { getLettersMatchCount } from './index';

describe('getLettersMatchCount', () => {
    const sercretWord = 'party';
    test('return correct count when there are no matching letters', () => {
        const letterMatchCount = getLettersMatchCount('bones', sercretWord);
        expect(letterMatchCount).toBe(0);
    });

    test('returns the correct count where are 3 matching letters', () => {
        const letterMatchCount = getLettersMatchCount('train', sercretWord);
        expect(letterMatchCount).toBe(3);
    });

    test('returns correct count when there are duplicate letters in the guess', () => {
        const letterMatchCount = getLettersMatchCount('parka', sercretWord);
        expect(letterMatchCount).toBe(3);
    });
})