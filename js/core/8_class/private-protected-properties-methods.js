class CoffeeMachine {
    _waterAmount = 0; // protected 프로퍼티 명 앞에는 _ 가 붙는다. 상속된다.

    constructor(power) {
        this._power = power;
    }

    get power() { // 읽기전용 프로퍼티를 만들려면 getter 만 만든다.
        return this._power;
    }

    set waterAmount(value) {
        if(value < 0) throw new Error(' 물의 양은 음수가 될 수 없습니다. ');
        this._waterAmount = value;
    }

    get waterAmount() {
        return this._waterAmount;
    }
}

let coffeeMachine = new CoffeeMachine(99);
coffeeMachine.power = 10; // setter 가 없어 실행되지 않는다.
console.log(coffeeMachine.power);

// private 프로퍼티와 메서드는 아직 명세서에 등재되지 않은
// 제안 목록에 등재된 문법이다.

class WaterMachine {

    #waterAmount = 0;

    get waterAmount() {
        return this.#waterAmount;
    }

    set waterAmount(value) {
        if (value < 0) new Error('물의 양은 음수가 될 수 없다.');
        this.#waterAmount = value;
    }
}

let waterMachine = new WaterMachine();
waterMachine.waterAmount = 100;
console.log(waterMachine.waterAmount);
