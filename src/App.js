import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [글제목, 글제목변경] = useState('남자 코트 추천');
  //변수 글제목에는 '남자 코트 추천', 글제목변경에는 데이터를 변경하는 함수가 들어간다.
  // var[a,b] = [10,100]; => destructuring 문법으로 이렇게 쓰면 변수 a에 10, b에 100이 담긴다.
  //state는 변수대신 쓰는 데이터 저장공간, useState()를 통해 만들어야함, 문자,숫자,array,object 다 저장가능

  let [글제목2, 글제목변경2] = useState(['한국 공학 대학교', '강남 우동 맛집']);
  //state에 데이터 저장하는 이유: 웹을 app처럼 동작하게 만들 수 있음. => state는 변경이 되면 새로고침 없이도 HTML이 자동으로 재렌더링이 된다.
  //일반 변수는 데이터가 바뀔시 새로고침 후 랜더링이 된다.
  //자주 바뀌는, 중요한 데이터는 일반 변수보다 state로 저장.

  let [글제목3, 글제목변경3] = useState('2018314009 김희범');

  let posts = '강남 고기 맛집';
  let setting = { color: 'blue', fontSize: '30px' };

  function 함수() {
    return 100
  }

  return (
    <div className="App">
      <div className='black-nav'>
        {/* <div style={ {color : 'blue', fontSize : '30px'} }>개발 Blog</div> */}
        <div style={setting}>개발 Blog</div>
      </div>
      <div className="list">
        <h3>{posts}</h3>
        <p>9월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목}</h3>
        <p>9월 17일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목2[1]}</h3>
        {/* {}안에는 변수명, state명이 들어갈수 있다. */}
        <p>9월 27일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목2[0]}</h3>
        <p>9월 28일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3>{글제목3}</h3>
        <p>9월 30일 발행</p>
        <hr />
      </div>
      {/* <img src={logo} />  */}
      {/* 이미지 삽입할땐 import후 import명을 {}안에 넣어주기 */}
      {/* <h4>{posts}</h4> */}
      {/* <h4>{ 함수() }</h4>  */}
      {/* {}안에 변수명, 함수 등을 통해서 데이터 바인딩 쉽게 가능  */}
    </div>
  );
}

export default App;
