function restP(...properties){
  let tempObj = {
    id : "",
    name : "",
    password : "",
    email: ""
  };



  for ( let key in tempObj){
    tempObj[key] = properties.shift();
  }

  return tempObj;
}
const test = (...tt) => {
  for(let i =0 ; i< 3;i++){
    return   tt.shift();
  }
  
}
console.log(restP('kyj','권예준','1234','ㅅㄷㄴㅅ@naver.com'));
// ! 이렇게 되면 배열의 데이터도 한번에 보내주어 값을 객체에 넣어 줄수 있을 것이다.
let list = ['213','test','4321'];

console.log(restP(...list));
// ? test해보기 list를 만들어주어 테스트를 해보자
