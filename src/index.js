import {observe} from "./observe";
import Watcher from "./Watcher";

let obj = {
    a: {
        m: {
            n: {
                q: 11
            }
        }
    },
    b: 10,
    c: [11, 22, 33, 44]
}

observe(obj)
obj.c.push(66)
new Watcher(obj, 'a.m.n.q', (val) => {
    console.log(val)
})
obj.a.m.n.q = 88
console.log(obj)