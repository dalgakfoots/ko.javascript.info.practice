let json = '{ "age" : 30 }';

try {
    let user = JSON.parse(json);

    if (!user.name) {
        throw new SyntaxError('불완전 데이터 : 이름 없음');
    }

    console.log(user.name);
} catch (e) {
    console.log('JSON ERROR : ' + e.message);
}

// 다시 던지기

function readData(){
    let json = '{ "age" : 30  , "name" : "john"}';

    try {
        let user = JSON.parse(json);

        if (!user.name) {
            throw new SyntaxError('불완전 데이터 : 이름 없음');
        }

        kiki();

        console.log(user.name);
    } catch (e) {
        if(!(e instanceof SyntaxError)) {
            throw e;
        } else {
            console.log(e.message);
        }
    }
}

try {
    readData();
} catch (e) {
    console.log("external catch got : " + e);
}