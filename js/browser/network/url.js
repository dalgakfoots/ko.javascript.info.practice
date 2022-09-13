// 아래 둘은 같은 URL 이다.
let url = new URL('https://javascript.info/profile/admin');
let url1 = new URL('/profile/admin', 'https://javascript.info');

let url2 = new URL('https://google.com/search');

url2.searchParams.set('q', 'testme');
console.log(url2);

url.searchParams.set('tbs', 'qdr:y');
console.log(url2);