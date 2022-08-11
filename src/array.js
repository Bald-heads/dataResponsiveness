import {def} from "./utils";

//To make the array responsive, we will rewrite the seven methods of the array
// ['push', 'pop', 'shift', "unshift", "splice", "sort", "reverse"]
const arrayPrototype = Array.prototype
export const arrayMethods = Object.create(arrayPrototype)
const methodsNeedChange = ['push', 'pop', 'shift', "unshift", "splice", "sort", "reverse"]
methodsNeedChange.forEach(methodName => {
    let original = arrayPrototype[methodName]
    def(arrayMethods, methodName, function () {
        const args = [...arguments]
        const ob = this.__ob__
        let inserted = []

        switch (methodName) {
            case 'push':
            case 'unshift':
                inserted = args
                break
            case 'splice':
                inserted = args.slice(2)
                break
        }
        if (inserted) {
            ob.observeArray(inserted)
        }

        return original.apply(this, arguments)
    }, false)
})
