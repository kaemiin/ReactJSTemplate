import { IS_DEBUG_MODE } from '../constants/Config';

class Clown {
    constructor() {
        if (IS_DEBUG_MODE) {
            console.log('THIS IS CLOWN!');
        }
    }

    sayHello() {
        return new Promise((resolve, reject) => {
            resolve(true);
        });
    }
}

const instance = new Clown();

Object.freeze(instance);

export default instance;
