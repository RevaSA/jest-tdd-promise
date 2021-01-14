const CustomPromise = require('./promise')

describe('Custom Promise', () => {
    let executorSpy
    let promise

    beforeEach(() => {
        executorSpy = jest.fn(() => {})
        promise = new CustomPromise(executorSpy)
    })


    test('should exists and to be typeof function', () => {
        expect(CustomPromise).toBeDefined()
        expect(typeof CustomPromise).toBe('function')
    })

    test('instance should have methods: then, catch, finally', () => {
        expect(promise.then).toBeDefined()
        expect(promise.catch).toBeDefined()
        expect(promise.finally).not.toBeUndefined()
    })

    test('should call executor function', () => {
        expect(executorSpy).toHaveBeenCalled()
    })
})
