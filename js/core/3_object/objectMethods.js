let user = {
    name: 'Pete',
    age : 30
};

user.sayHi = function () {
    console.log("안녕!");
};

user.sayHi();

let user1 = Object.assign({}, user);
user1.sayBye = sayBye;
user1.sayBye();

function sayBye() {
    console.log("안녕히계세요");
}


// 메서드 단축 구문

user2 = {
    sayHi : function() {
        console.log("Hello!");
    }
};

user3 = {
    sayHi() {
        console.log("Hello!");
    }
};


// 객체 안에서의 this
user4 = {
    name: 'john',
    age : 30,

    sayHi() {
        console.log(`Hello my name is ${this.name}`);
    }

}
user4.sayHi();

// 자유로운 this : this 는 런타임 시점에서 결정된다.

function thisHi(){
    console.log(this.name);
}

user4.f = thisHi;
user.f = thisHi;

user4.f(); // john
user.f(); // Pete

// 화살표함수는 this가 없다.

let user5 = {
    firstName: 'dg',
    sayHi() {
        let arrow = () => console.log(this.firstName); // 화살표 함수가 아닌 외부함수의 this 값을 사용한다.
        arrow();
    }
};

user5.sayHi();


/* Exercise */

// 1. calculator라는 객체를 만들고 세 메서드를 구현해 봅시다.
//
// sum()은 저장된 두 값의 합을 반환합니다.
// mul()은 저장된 두 값의 곱을 반환합니다.

let calculator = {

    read(a,b) {
        this.a = +a;
        this.b = +b;
    },

    sum() {
        return this.a + this.b;
    },
    mul() {
        return this.a * this.b;
    }
}

calculator.read(1, 2);
console.log(calculator.sum());
console.log(calculator.mul());

// 2. 올라가기(up)와 내려가기(down) 메서드를 제공하는 객체 ladder가 있습니다.
// up, down, showStep을 수정해 아래처럼 메서드 호출 체이닝이 가능하도록 해봅시다.
// ladder.up().up().down().showStep(); // 1

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this;
    },
    down() {
        this.step--;
        return this;
    },
    showStep: function() { // 사다리에서 몇 번째 단에 올라와 있는지 보여줌
        console.log( this.step );
    }
};

ladder.up().up().down().showStep();