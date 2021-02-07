import { handleForm } from '../src/client/js/formHandler';

describe('Testing the submit functionality', () => {
    test('Testing the handleSubmit() function', () => {
        expect(handleForm).toBeDefined();
    });
});