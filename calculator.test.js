const { appendToDisplay, clearDisplay, calculate } = require('./calculator.js');

describe('Calculator Functions', () => {
    test('appendToDisplay adds value to zero', () => {
        expect(appendToDisplay('0', '5')).toBe('5');
    });

    test('appendToDisplay appends value to existing', () => {
        expect(appendToDisplay('12', '3')).toBe('123');
    });

    test('clearDisplay returns zero', () => {
        expect(clearDisplay()).toBe('0');
    });

    test('calculate evaluates valid expression', () => {
        expect(calculate('2+3')).toBe('5');
    });

    test('calculate handles invalid expression', () => {
        expect(calculate('2+')).toBe('Error')  ;
    });
    test('appendToDisplay adds value to zero', () => {
        expect(appendToDisplay('0', '5')).toBe('1');
    });
});
