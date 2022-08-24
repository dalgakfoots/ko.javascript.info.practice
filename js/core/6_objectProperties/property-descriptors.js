// 객체 프로퍼티는 플래그라 불리는 특별한 속성 세가지를 갖는다.
// writable – true이면 값을 수정할 수 있습니다. 그렇지 않다면 읽기만 가능합니다.
// enumerable – true이면 반복문을 사용해 나열할 수 있습니다. 그렇지 않다면 반복문을 사용해 나열할 수 없습니다.
// configurable – true이면 프로퍼티 삭제나 플래그 수정이 가능합니다. 그렇지 않다면 프로퍼티 삭제와 플래그 수정이 불가능합니다.

// 플래그를 얻는 방법
// let descriptor = Object.getOwnPropertyDescriptor( obj , propertyName );

{
    let user = {
        name: 'John',
    };

    let descriptor = Object.getOwnPropertyDescriptor(user, 'name');

    console.log(JSON.stringify(descriptor, null, 2));
    //{
    //   "value": "John",
    //   "writable": true,
    //   "enumerable": true,
    //   "configurable": true
    // }
}

// 플래그를 변경하는 방법
// Object.defineProperty ( obj , propertyName , descriptor );

{
    let user1 = {};

    Object.defineProperty(user1, "name", {value: 'John',});

    let descriptor = Object.getOwnPropertyDescriptor(user1, 'name');

    console.log(JSON.stringify(descriptor, null, 2));
    //{
    //   "value": "John",
    //   "writable": false,
    //   "enumerable": false,
    //   "configurable": false
    // } <== 플래그가 false 로 만들어진다.
}

// writable 플래그 : 값을 쓰지 못하도록 한다

{
    let user = {
        name : 'john',
    };

    Object.defineProperty( user , 'name' , { writable : false});

    console.log(user); // { name: 'john' }
    user.name = 'Pete';
    console.log(user); // { name: 'john' }
}

// enumerable 플래그 : for .. in 시 나타나지 않도록 한다

{
    let user = {
        name : 'john',
        toString() {
            return this.name;
        }
    };

    for( let key in user ) console.log(key); // name , toString

    Object.defineProperty(user, "toString", {
        enumerable: false,
    });

    for( let key in user ) console.log(key); // name

    console.log(Object.keys(user)); // [ 'name' ]
}

// configurable 플래그 :
// 1. configurable 플래그 수정 불가
// 2. enumerable 플래그 수정 불가
// 3. writable : false 에서 true 로 불가
// 접근자 프로퍼티 get/set 을 변경할 수 없음
{
    let user = {};

    Object.defineProperty( user , "name" , {
        value : 'john',
        writable : false,
        configurable : false
    });
}

// Object.getOwnPropertyDescriptors
// 프로퍼티 설명자를 전부 한꺼번에 가져온다.

// let clone = Object.getOwnPropertyDescriptors( {} , Object.getOwnPropertyDescriptors (obj) );
