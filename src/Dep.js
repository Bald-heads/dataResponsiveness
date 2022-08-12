let uid = 0

export default class Dep {
    constructor() {
        this.id = uid++
        //The array holds its own subscribers
        //It's also an instance of Watcher
        this.subs = []
    }

    //Add a subscription
    addSub(sub) {
        this.subs.push(sub)
    }

    //Add the dependent
    depend() {
        if (Dep.target) {
            this.addSub(Dep.target)
        }
    }

    //Inform the update
    notify() {
        const subs = this.subs.slice()
        for (let i = 0, l = subs.length; i < l; i++) {
            subs[i].update()
        }
    }
}