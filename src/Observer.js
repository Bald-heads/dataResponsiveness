import {def} from './utils'
import defineReactive from "./defineReactive";
import {arrayMethods} from "./array";
import {observe} from "./observe";
import Dep from "./Dep";

//The purpose of the Observer class
//Converting a normal Object to Objects that are responsive (can be detected) at each level
export default class Observer {
    constructor(value) {
        //Every instance of an Observer has a DEP on it
        this.dep = new Dep()
        def(value, "__ob__", this, false)
        if (Array.isArray(value)) {
            //Force a change in the prototype chain
            Object.setPrototypeOf(value, arrayMethods)
            this.observeArray(value)
        } else {
            this.walk(value)
        }
    }

    walk(value) {
        for (let k in value) {
            defineReactive(value, k)
        }
    }

    observeArray(arr) {
        for (let i = 0, l = arr.length; i < l; i++) {
            observe(arr[i])
        }
    }
}