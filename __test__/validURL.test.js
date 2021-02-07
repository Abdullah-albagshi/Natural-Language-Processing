import { validURL } from '../src/client/js/urlValidator';

describe('Testing the validURL', () => {
    test('Testing the validURL() function', () => {
        expect(validURL).toBeTruthy();
    });
});