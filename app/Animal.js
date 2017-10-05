class Animal {
    constructor(name, height) {
        this.name = name;
        this.height = height;
    }
    hello() {
        console.log(`Hello! Im ${this.name} from the animal kingom.`);
    }
}

export default Animal;