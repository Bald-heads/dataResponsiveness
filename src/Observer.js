import {def} from './utils'
import defineReactive from "./defineReactive";

//The purpose of the Observer class
//Converting a normal Object to Objects that are responsive (can be detected) at each level
export default class Observer {
    constructor(value) {
        def(value, "__ob__", this, false)
        this.walk(value)
        console.log(value)
    }

    walk(value) {
        for (let k in value) {
            defineReactive(value, k)
        }
    }
}