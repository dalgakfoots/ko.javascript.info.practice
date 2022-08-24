// Symbol.toPrimitive

// hint 에 따라 객체가 문자열 , 또는 숫자 로 변환된다.

let user = {
    name: 'john',
    money: 1000,

    [Symbol.toPrimitive](hint) { // 내장 심볼 사용
        console.log(`hint : ${hint}`);
        return hint === "string" ? `{name : ${this.name}` : this.money;
    },
};

console.log(user);
console.log(+user);  // hint : number 1000
console.log(user + 500); // hint : default : 1500

// toString , valueOf

let usera = {
    name: 'john',
    money: 1000,

    toString() {
        return `{name : ${this.name}}`;
    },

    valueOf() {
        return this.money;
    },
};

console.log(usera);
console.log(+usera); // 1000
console.log(usera + 500); // 1500

let obj = {
    toString(){
        return "2";
    }
};

console.log(obj * 2); // 4
console.log(obj + 2); // "22"