const CustomPromise = require('./promise')

describe('Custom Promise', () => {
    test('should exists and to be typeof function', () => {
        expect(CustomPromise).toBeDefined()
        expect(typeof CustomPromise).toBe('function')
    })
})
