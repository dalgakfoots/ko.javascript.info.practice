// __proto__ 는 다소 구식이기 때문에 사용을 자제하는 것이 좋다.

// Object.create( proto , [descriptors] ) : [[Prototype]] 이 proto 를 참조하는 빈 객체를 만든다. 프로퍼티 설명자를 추가로 넘기기 가능

let animal = {
    eats: true,
};

let rabbit = Object.create(animal);

console.log(rabbit.eats);
console.log(Object.getPrototypeOf(rabbit) === animal); // rabbit 의 [[Prototype]] 을 반환한다.

Object.setPrototypeOf(rabbit, {}); // 프로토타입을 {} 로 바꾼다.


{
    console.log('-----------------')
    let animal = {
        eats: true,
    };

    let rabbit = Object.create( animal , {
        jumps : {
            value : true
        }
    });

    console.log(rabbit.jumps);
}

{
    // 객체의 얕은 복사
    console.log('-----------------')
    let animal = {
        eats: true,
    };

    let rabbit = Object.create( animal , {
        jumps : {
            value: 'jump!',
        }
    });

    let clone = Object.create(Object.getPrototypeOf(rabbit), Object.getOwnPropertyDescriptors(rabbit));

    console.log(clone === rabbit); // false
    console.log(rabbit.jumps); // "jump!"
    console.log(clone.jumps); // "jump!"
}

// 순수 사전식 객체

{
    let obj = Object.create(null); // Object.create(null) 로 객체를 만들면 __proto__ getter 와 setter 를 상속받지 않는다.
    let key  = '__proto__';
    obj[key] = '...value...';
    console.log(obj[key]);
}