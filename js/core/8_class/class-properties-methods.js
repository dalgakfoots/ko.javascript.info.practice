// 클래스 함수 자체에 메서드를 설정한다. 이를 정적 메서드라고 부른다.

class User {
    static staticMethod() { // static 키워드를 붙여서 만든다.
        console.log(this === User);
    }
}

User.staticMethod(); // true

{
    class User {}

    User.staticMethod = function () {
        console.log(`this === User : ${this === User}`);
    };

    User.staticMethod();
}

class Article {
    constructor(title, date) {
        this.title = title;
        this.date = date;
    }

    static compare(a , b) {
        return a.date - b.date;
    }
}

let articles = [
    new Article('html', new Date(2022,7,30)),
    new Article('CSS', new Date(2022,5,30)),
    new Article('JavaScript', new Date(2022,9,30)),
];

articles.sort(Article.compare);

console.log(articles[0].title); // CSS
