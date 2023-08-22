import React, { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number : 0, 
        color : null
    }
    // 기본 값


    myRef = null; //ref를 설정
    //  ref를 사용할 경우 다른 컴포넌트에서 만든 함수를 참조하여 호출할 수 있다. 주로 부모 컴포넌트에서 자식 컴포넌트의 메서드를 호출하는것이 관례
    
    constructor(props) {
        super(props);
        console.log("constructor");
    }
    //  constructor란 객체 초기화 같은 역할

    static getDerivedStateFromProps(nextProps, prevState) {
        // getDerivedStateFromProps란 props와 state를 비교, 새로운 state 값을 유도(derive)하고 업뎃 (getDerivedStateFromProps는 무조건 static)
        // 다시 말해 getDerivedStateFromProps는 현재 'props'와 이전 'state'를 기반으로 새로운 state 값을 생성   = props와 state간의 동기화 
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color) {
            // nextProps.color와 prevState.color의 값이 다를 때
            return { color: nextProps.color };
            // color state에 nextProps값을 넣어주고
        }   
        return null;
        // 기본 값은 null을 출력

        // return을 사용하지 않고 else를 사용해도 상관 없음 
    }

    componentDidMount() {
        console.log('componentDidMount');

        // componentDitMount란 컴포넌트가 처음으로 렌더링된 후 한 번만 호출됨
        //  하지만 setState를 호출하면 재렌더링 됨. 그래서 setState를 잘못 사용할 경우 무한루프에 빠질 수 있음 주의해서 사용해야함
        // api와 같은 비동기 작업에 주로 사용

    }

    shouldComponentUpdate(nextProps, nextState) {
        // shouldComponentUpdate는 라이프사이클 메서드 중 하나로, 컴포넌트의 업데이트가 필요한지 여부를 결정하는 메서드. 이 메서드를 구현하여 컴포넌트의 렌더링을 최적화하거나 불필요한 렌더링을 방지할 수 있다.
        console.log('shouldComponentUpdate', nextProps, nextState);
        return nextState.number % 10 !== 4;
        // 숫자의 마지막 자리가 4면 리렌더링하지 않습니다.
        //  4, 14, 24 …가 되면 숫자가 나오지 않고 건너 뛰게 됨(렌더링 건너뜀)
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
        // 컴포넌트가 DOM에서 언마운트되기 전에 호출되는 메서드
        // 컴포넌트가 더 이상 화면에 나타나지 않거나 제거될 때 사용
        // 주로 이벤트 리스너들을 해제하거나 정리할 때 사용
        // useEffect를 사용하면 됨...ㅎㅎ
    }

    handleClick = () => {
        this.setState({
            // setState대신 useState
            number: this.state.number + 1
            // 버튼 클릭하면 state의 number가 +1됨
        });
    }

    getSnapshotBeforUpdate(prevProps, prevState) {
        // 컴포넌트가 업데이트되기 전에 호출되는 메서드
        // 컴포넌트의 현재 상태 및 속성을 캡처
        // 이전 상태와 비교하여 변경 사항을 파악하는데 사용
        // componentDidUpdate가 호출되기 직전에 실행됨
        console.log('getSnapshotBeforeUpdate');
        if(prevProps.color !== this.props.color ) {
            return this.myRef.style.color;
            // this.myRef.style.color = app.js에서 가져오는 랜덤색상
        }

        return null;

        // 참고: 리액트 17 버전부터는 getSnapshotBeforeUpdate와 componentDidUpdate가 동시에 발생하는 경우가 더 이상 없으므로, 업데이트 전과 후의 상태 비교 작업을 분리해서 관리할 필요가 없습니다.
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot) {
            console.log('업데이트되기 직전 색상 : ', snapshot);
        }
    }

    render() {
        console.log('render');

        const style = {
            color : this.props.color
            // props = 부모 컴포넌트로부터 전달받은 속성
        };

        return (
            <div>
                {this.props.missing.value}
                <h1 style={style} ref={ref =>this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>
                    color : {this.state.color}
                </p>
                <button onClick={this.handleClick}>더하기</button>
            </div>
        )
    }

}

export default LifeCycleSample;