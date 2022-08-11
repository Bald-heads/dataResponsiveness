import {observe} from "./observe";

let obj = {
    a: {
        m: {
            n: 5
        }
    },
    b: 18,
    g: [22, 33, 44, 55]
}

observe(obj)