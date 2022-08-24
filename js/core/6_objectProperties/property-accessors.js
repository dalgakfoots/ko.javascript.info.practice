// 접근자 프로퍼티 : getter , setter
// 객체 리터럴 안에서 get 과 set 으로 나타낼 수 있다.

{
    let obj = {
        get propName() {

        },

        set propName(value) {

        },
    };
}


{
    let user = {
        name: 'john',
        surname: 'smith',

        get fullName() {
            return `${this.name} ${this.surname}`;
        },

        set fullName(value){
            [this.name, this.surname] = value.split(' ');
        },
    };

    console.log(user.fullName);

    user.fullName = 'alice cooper';

    console.log(user.name); // alice
    console.log(user.surname); // cooper

}

// 접근자 프로퍼티 설명자
// get – 인수가 없는 함수로, 프로퍼티를 읽을 때 동작함
// set – 인수가 하나인 함수로, 프로퍼티에 값을 쓸 때 호출됨
// enumerable – 데이터 프로퍼티와 동일함
// configurable – 데이터 프로퍼티와 동일함

{
    let user = {
        name: 'john',
        surname: 'smith',
    };

    Object.defineProperty(user , 'fullName' , {
        get () {
            return `${this.name} ${this.surname}`;
        },

        set (value) {
            [this.name, this.surname] = value.split(' ');
        }

    });

}

{
    let user = {
        get name() {
            return this._name;
        },

        set name(value) {
            if (value.length < 4) {
                console.log('입력값이 너무 짧음');
                return
            }
            this._name = value;
        },
    };

    user.name = 'pete';
    console.log(user.name); // pete
    user.name = ''; // 입력값이 너무 짧음

    // user 의 이름은 _name 에 저장되고, 프로퍼티 접근은 get/set 을 통해 이뤄진다.
    // 외부코드에서 user._name 으로 바로 접근이 가능하나, _ 으로 시작하는 프로퍼티는 내부에서만 사용하는 것이 관습이다.
}

{
    function User( name , birthday ) {
        this.name = name;
        this.birthday = birthday;

        Object.defineProperty(this , "age" , {
            get() {
                let todayYear = new Date().getFullYear();
                return todayYear - this.birthday.getFullYear();
            }
        });

    }

    let john = new User("John", new Date(1992, 6, 1));

    console.log(john.age);
}

