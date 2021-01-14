class CustomPromise {
    constructor(executor) {
        this.queue = []
        executor.call(null, this.onResolve.bind(this), this.onReject.bind(this))
    }

    onResolve(data) {
        this.queue.forEach(callback => {
            data = callback(data)
        })
    }

    onReject() {
    }

    then(fn) {
        this.queue.push(fn)
        return this
    }

    catch() {
    }

    finally() {
    }
}

module.exports = CustomPromise
