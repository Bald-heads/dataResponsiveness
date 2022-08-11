//Create an observe function to give an aid to the Observer class
import Observer from "./Observer";

export const observe = function (value) {
    //This function serves only objects
    if (typeof value !== 'object') return
    let ob
    if (typeof value.__ob__ !== 'undefined') {
        ob = value.__ob__
    } else {
        ob = new Observer(value)
    }
    return ob
}