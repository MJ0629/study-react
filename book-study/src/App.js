import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';


// 랜덤 색상을 생성
  function getRandomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
    // 16진수 컬러코드를 뽑아내는 식
//     Math.random(): 0 이상 1 미만의 랜덤한 실수 값을 반환합니다.
// Math.random() * 16777215: 0 이상 16777215 미만의 랜덤한 실수 값을 반환합니다. 여기서 16777215는 16진수로 표현했을 때의 최대 색상 코드 값 (0xFFFFFF) 입니다.
// Math.floor(Math.random() * 16777215): 이전 단계의 결과를 내림하여 정수 값으로 변환합니다.
// .toString(16): 앞서 계산한 정수 값을 16진수 문자열로 변환합니다. 이 때, 16진수로 변환되므로 색상 코드 형식을 갖게 됩니다.
// 결과적으로, 이 코드는 랜덤한 16진수 색상 코드를 생성합니다. 이 색상 코드는 웹 페이지에서 CSS 스타일을 설정하거나 다양한 그래픽 작업에서 사용할 수 있습니다. 만약 랜덤한 색상을 생성하는 목적이라면, 이 코드를 사용하여 다양한 색상을 생성할 수 있습니다.
  }
class App extends Component {
  state = {
    color : '#000000'
    // 기본 색상값 설정
  }
  handleClick = () => {
    this.setState({
      color: getRandomColor()
      // 랜덤 색상 돌리기
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>
          랜덤 색상
        </button>
        <ErrorBoundary>
        <LifeCycleSample color={ this.state.color }/>
        </ErrorBoundary>
      </div>
    );
  }
}

export default App;
