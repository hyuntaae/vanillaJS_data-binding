/* 

****** 🚀 기능 정의 🚀 ******

array 와 object를 이용해서 데이터를 html에 넣어보려고 한다.
- array & object를 사용해서 데이터 요소를 만들어준다.
- 특정 html 요소에 내가 원하는 데이터를 넣는 코드를 작성한다.

*/

// ****** 🕹 1차 기능 구현 🕹 ******

let tesla = [
  {name : 'Model-3', distance : 528, zTosix : 6.1, maxKm : 225, hp : 1020 },
  {name : 'Model-X', distance : 499, zTosix : 3.9, maxKm : 240, hp : 1020 },
  {name : 'Model-Y', distance : 511, zTosix : 5.0, maxKm : 217, hp : 1020 }
]

// document.querySelectorAll('.model')[0].innerHTML = tesla[0].name;
// document.querySelectorAll('#card-1 .func h3')[0].innerHTML = `${tesla[0].distance} km`;
// document.querySelectorAll('#card-1 .func h3')[1].innerHTML = `${tesla[0].zTosix} 초`;
// document.querySelectorAll('#card-1 .func h3')[2].innerHTML = `${tesla[0].maxKm} km/h`;
// document.querySelectorAll('#card-1 .func h3')[3].innerHTML = `${tesla[0].hp} hp`;

// document.querySelectorAll('.model')[1].innerHTML = tesla[1].name;
// document.querySelectorAll('#card-2 .func h3')[0].innerHTML = `${tesla[1].distance} km`;
// document.querySelectorAll('#card-2 .func h3')[1].innerHTML = `${tesla[1].zTosix} 초`;
// document.querySelectorAll('#card-2 .func h3')[2].innerHTML = `${tesla[1].maxKm} km/h`;
// document.querySelectorAll('#card-2 .func h3')[3].innerHTML = `${tesla[1].hp} hp`;

// document.querySelectorAll('.model')[2].innerHTML = tesla[2].name;
// document.querySelectorAll('#card-3 .func h3')[0].innerHTML = `${tesla[2].distance} km`;
// document.querySelectorAll('#card-3 .func h3')[1].innerHTML = `${tesla[2].zTosix} 초`;
// document.querySelectorAll('#card-3 .func h3')[2].innerHTML = `${tesla[2].maxKm} km/h`;
// document.querySelectorAll('#card-3 .func h3')[3].innerHTML = `${tesla[2].hp} hp`;


// ****** 🕹 2차 코드 재정비 및 간략화 🕹 ******

let model = document.querySelectorAll('.model');
let model3 = document.querySelectorAll('#card-1 .func h3');
let modelX = document.querySelectorAll('#card-2 .func h3');
let modelY = document.querySelectorAll('#card-3 .func h3');

// 반복문을 통해 반복되는 코드 축약

for (let i = 0; i < 3; i++) {
  model[i].innerHTML = tesla[i].name;
}

model3[0].innerHTML = `${tesla[0].distance} km`;
model3[1].innerHTML = `${tesla[0].zTosix} 초`;
model3[2].innerHTML = `${tesla[0].maxKm} km/h`;
model3[3].innerHTML = `${tesla[0].hp} hp`;

modelX[0].innerHTML = `${tesla[1].distance} km`;
modelX[1].innerHTML = `${tesla[1].zTosix} 초`;
modelX[2].innerHTML = `${tesla[1].maxKm} km/h`;
modelX[3].innerHTML = `${tesla[1].hp} hp`;

modelY[0].innerHTML = `${tesla[2].distance} km`;
modelY[1].innerHTML = `${tesla[2].zTosix} 초`;
modelY[2].innerHTML = `${tesla[2].maxKm} km/h`;
modelY[3].innerHTML = `${tesla[2].hp} hp`;