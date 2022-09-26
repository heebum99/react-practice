import logo from './logo.svg';
import './App.css';

function App() {

  let posts = '강남 고기 맛집';
  let setting = {color : 'blue', fontSize : '30px'};

  function 함수(){
    return 100
  }

  return (
    <div className="App">
      <div className='black-nav'>
        {/* <div style={ {color : 'blue', fontSize : '30px'} }>개발 Blog</div> */}
        <div style={setting}>개발 Blog</div>
      </div>
      {/* <img src={logo} />  */}
      {/* 이미지 삽입할땐 import후 import명을 {}안에 넣어주기 */}
      <h4>{ posts }</h4>
      {/* <h4>{ 함수() }</h4>  */}
       {/* {}안에 변수명, 함수 등을 통해서 데이터 바인딩 쉽게 가능  */}
    </div>
  );
}

export default App;
