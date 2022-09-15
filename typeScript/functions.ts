function add (x : number, y : number) : number {
    return x + y;
}
// 각 파라미터와 반환 타입을 지정할 수 있다.
// 반환타입은 생략이 가능함
let _myAdd = function ( x: number , y: number ) : number {return x + y};

/************************************************************/

let __myAdd : (x: number , y : number) => number =
    function (x : number , y : number) : number {
        return x + y;
    };


// 타입추론
let myAdd : (baseValue : number , increment : number) => number =
    function (x, y) {
        return x + y;};


/************************************************************/
