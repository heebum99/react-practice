import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() { //function App()도 하나의 component

  let [글제목, 글제목변경] = useState('남자 코트 추천');
  //변수 글제목에는 '남자 코트 추천', 글제목변경에는 데이터를 변경하는 함수가 들어간다.
  // var[a,b] = [10,100]; => destructuring 문법으로 이렇게 쓰면 변수 a에 10, b에 100이 담긴다.
  //state는 변수대신 쓰는 데이터 저장공간, useState()를 통해 만들어야함, 문자,숫자,array,object 다 저장가능

  let [글제목2, 글제목변경2] = useState(['한국 공학 대학교', '강남 우동 맛집']);
  //state에 데이터 저장하는 이유: 웹을 app처럼 동작하게 만들 수 있음. => state는 변경이 되면 새로고침 없이도 HTML이 자동으로 재렌더링이 된다.
  //일반 변수는 데이터가 바뀔시 새로고침 후 랜더링이 된다.
  //자주 바뀌는, 중요한 데이터는 일반 변수보다 state로 저장.

  let [글제목3, 글제목변경3] = useState('2018314009 김희범');

  let [따봉, 따봉변경] = useState(0);
  //state 변경 함수를 이용해야 state 값을 변경할 수 있고 재렌더링이 일어남.

  let posts = '강남 고기 맛집';
  let setting = { color: 'blue', fontSize: '30px' };

  //따봉변경('10'); => 따봉이라는 변수가 10으로 변경됨.
  function 함수() {
    return 100
  }

  function 제목순서바꾸기() {
    var newArray = [...글제목2];
    var temp;
    temp = newArray[0];
    newArray[0] = newArray[1];
    newArray[1] = temp;

    글제목변경2(newArray);
  }

  function 제목바꾸기() {
    //글제목[0] = 12314115; => 이런식으로 state를 직접 건드리는건 좋지 않음, deep copy 후 copy한 변수를 수정

    /*이런식으로 새로운 변수를 만들어 deep copy를 통해서도 가능
    var newArray = 글제목; (x) => deep copy(값 복사)가 아닌 값 공유
    var newArray = [...글제목]; deep copy => object의 경우 []대신 {}로
    newArray[0] = "여자코트 추천";
    글제목변경(newArray);
    */
    
    글제목변경("여자 코트 추천"); //state를 완전히 대체해주는 함수
  }

  return (
    <div className="App">
      <div className='black-nav'>
        {/* <div style={ {color : 'blue', fontSize : '30px'} }>개발 Blog</div> */}
        <div style={setting}>개발 Blog</div>
      </div>
      {/* <button onClick={() => { 글제목변경('여자 코트 추천') }}>버튼</button> */}
      <button onClick={제목순서바꾸기}>제목순서 바꾸는 버튼</button>
      <button onClick={제목바꾸기}>제목 바꾸는 버튼</button>
      {/* onClick{} 안에 제목바꾸기()로 넣게 되면 바로 함수를 실행하라는 뜻으로 ()를 넣어주면 안됨.*/}
      <div className="list">
        <h3>{posts} <span onClick={() => { 따봉변경(따봉 + 1); }}>👍</span> {따봉} </h3>
        {/* { <span onClick={() => { 따봉 + 1과 같이 state는 그냥 변경하면 안됨. }}> */}
        {/* <h3>{posts} <span onClick={() => { console.log(1) }}>👍</span>0 </h3> */}
        {/* span tag를 눌렀을때 이벤트가 발생하도록(따봉 개수가 올라가도록), onCick {함수} or {() => {실행할내용}}만 들어가야함. */}
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

      {/* Modal UI 디자인 
      <div className="modal">
        <h2>제목</h2>
        <p>날씨</p>
        <p>상세내용</p>
      </div> 
      */}

      {/* 위의 HTML코드를 한 단어로 줄여쓸 수 있는 방법: component문법 */}

      <Modal></Modal>

    </div>
  );
}

function Modal() {
  //component 만드는법 => 함수 이름은 대문자로 시작, return() 안에 있는건 태그하나로 묶기.
  //<div></div>로 묶어도 되고 <></>로 묶어도됨 => fragment문법
  //어떤걸 component로 만들까? => 반복출현하는 HTML 덩어리들, 자주 변경되는 HTML UI들, 다른 페이지 생성할때
  //component 단점: state쓸때 복잡함, 상위 component에서 만든 state 쓰려면 props 문법사용
  return (
    <div className="modal">
        <h2>제목</h2>
        <p>날씨</p>
        <p>상세내용</p>
      </div> 
  )
}

export default App;
