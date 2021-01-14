const CustomPromise = require('./promise')

describe('Custom Promise', () => {
    test('should exists and to be typeof function', () => {
        expect(CustomPromise).toBeDefined()
        expect(typeof CustomPromise).toBe('function')
    })

    test('instance should have methods: then, catch, finally', () => {
        const promise = new CustomPromise()

        expect(promise.then).toBeDefined()
        expect(promise.catch).toBeDefined()
        expect(promise.finally).not.toBeUndefined()
    })
})
