class Animal {
    constructor(name) {
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} 은 속도 ${this.speed}로 달린다.`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} 이 멈췄다.`);
    }

}

// 키워드 extends는 프로토타입을 기반으로 동작합니다.
// extends는 Rabbit.prototype.[[Prototype]]을 Animal.prototype으로 설정합니다.
// 그렇기 때문에 Rabbit.prototype에서 메서드를 찾지 못하면 Animal.prototype에서 메서드를 가져옵니다.

class Rabbit extends Animal {

    constructor(name, earLength) {
        super(name);
        this.earLength = earLength;
    }

    hide() {
        console.log(`${this.name} 이 숨었음.`);
    }

    stop() { // 메서드 오버라이딩
        super.stop();
        this.hide();
    }
}

{
    let rabbit = new Rabbit('흰토끼',10);
    console.log(rabbit.earLength);
    rabbit.run(10);
    rabbit.stop();
}