import { getHealthStatus } from '../health'

test('health check if value > 50', () => {
let character = { name: 'Маг', health: 90 };
expect(getHealthStatus(character)).toBe('healthy')
});

test('health check if value < 50 and > 15', () => {
    let character = { name: 'Маг', health: 40 };
expect(getHealthStatus(character)).toBe('wounded');
    });

test('health check if value < 15', () => {
    let character = { name: 'Маг' , health: 5 };
expect(getHealthStatus(character)).toBe('critical')
})
