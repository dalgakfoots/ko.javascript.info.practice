// 믹스인은 특정 행동을 실행해주는 메서드를 제공하는데 단독으로 쓰이지 않고 다른 클래스에 행동을 더해주는 용도로 사용됩니다.

// 믹스인

let sayHiMixin = {
    sayHi() {
        console.log(`hello ${this.name}`);
    },
    sayBye() {
        console.log(`bye ${this.name}`);
    }
};

// 사용법
class User {
    constructor(name) {
        this.name = name;
    }
}

// 메서드 복사
Object.assign(User.prototype, sayHiMixin);

new User('Dude').sayHi(); //hello Dude
new User('Dude').sayBye(); //Bye Dude

// 믹스인 안에서 믹스인 상속을 사용하기

{
    let sayMixin = {
        say(phrase) {
            console.log(phrase);
        }
    };

    let sayHiMixin = {
        __proto__  : sayMixin,

        sayHi() {
            super.say(`Hello ${this.name} !!`);
        },
        sayBye() {
            super.say(`Bye ${this.name} !!`);
        }
    };

    class User {
        constructor(name) {
            this.name = name;
        }
    }

    Object.assign(User.prototype, sayHiMixin);

    new User('Dude').sayHi();
}


// 믹스인 실예제

let eventMixin = {
    /**
     *  이벤트 구독
     *  사용패턴: menu.on('select', function(item) { ... }
     */
    on (eventName, handler) {
        if (!this._eventHandlers) this._eventHandlers = {};
        if (!this._eventHandlers[eventName]) {
            this._eventHandlers[eventName] = [];
        }
        this._eventHandlers[eventName].push(handler);
    },

    /**
     *  구독 취소
     *  사용패턴: menu.off('select', handler)
     */

    off(eventName, handler) {
        let handlers = this._eventHandlers?.[eventName];
        if(!handlers) return;
        for (let i = 0; i < handlers.length; i++) {
            if (handlers[i] === handler) {
                handlers.splice(i--, 1);
            }
        }
    },

    /**
     *  주어진 이름과 데이터를 기반으로 이벤트 생성
     *  사용패턴: this.trigger('select', data1, data2);
     */
    trigger(eventName, ...args) {
        if (!this._eventHandlers?.[eventName]) {
            return;
        }

        this._eventHandlers[eventName].forEach(handler => handler.apply(this, args));
    },
}

class Menu {
    choose(value) {
        this.trigger("select", value);
    }
}

Object.assign(Menu.prototype, eventMixin);

let menu = new Menu();

menu.on('select', value => console.log(`선택된 값 ${value}`));

menu.choose('123');