import { key } from '../src/client/js/fetchApiKey';

describe('Testing the submit functionality', () => {
    test('Testing the handleSubmit() function', () => {
        expect(key).toBeDefined();
    });
});