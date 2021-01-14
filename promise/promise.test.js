const CustomPromise = require('./promise')

describe('Custom Promise', () => {
    const successResult = 42
    const errorResult = 'I am error'
    let executorSpy
    let promise

    beforeEach(() => {
        executorSpy = jest.fn(resolve => setTimeout(() => resolve(successResult), 150))
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

    test('should get data in then block and chain them', async () => {
        const result = await promise
            .then(num => num * 4)
            .then(num => num / 2)

        expect(result).toBe(successResult * 2)
    })

    test('should catch error', () => {
        const errorExecutor = (_, reject) => setTimeout(() => reject(errorResult), 150)
        const errorPromise = new CustomPromise(errorExecutor)

        return new Promise(resolve => {
            errorPromise.catch(error => {
                expect(error).toBe(errorResult)
                resolve()
            })
        })
    })
})
