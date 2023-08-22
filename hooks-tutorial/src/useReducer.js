import React, { useReducer } from "react";

// useReducer는 useState보다 더 다양한 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트해 주고 싶을 때 사용하는 Hook

// 리듀서는 현재 상태, 업데이트를 위해 필요한 정보를 담은 액션 값을 전달받아 새로운 상태를 변환하는 함수. * 새로운 상태를 만들 때는 반드시 불변성을 지켜야함.
// function reducer(state, action) { return { ... }; }


function reducer(state, action) {
    // action.type에 따라 다른 작업 수행
    // state는 현재 상태 action은 수행할 작업에 대한 매개변수

    switch (action.type) {
        // 수행되는 action의 type부분
        case 'INCREMENT' :
            // 값이 increment일 때
            return { value : state.value + 1};
            //state의 value에 +1로 업데이트 반환.
        case 'DECREMENT' :
            return { value : state.value - 1};
        default : 
        // 아무것도 해당되지 않을 때 기존 상태 반환
            return state;
    }
}

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { value: 0 });
    // state는 현재 가리키고 있는 상태를 의미
    // dispatch는 액션을 발생시키는 함수
    // 함수 안에 파라미터로 액션 값을 넣어 주면 리듀서 함수가 호출되는 구조
    // useReducer의 첫 번째 파라미터에는 리듀서 함수를 넣고, 두 번재 파라미터에는 해당 리듀서의 기본값을 넣어줌 그래야 state값과 dispatch 함수를 받아 옴.

    // useReducer를 사용했을 때 가장 큰 장점은 컴포넌트 업데이트 로직을 컴포넌트 바깥으로 빼낼 수 있다는 점.
    return (
        <>
            <p>
                현재 카운터 값은 <b>{state.value}</b> 입니다.
            </p>
            <button onClick={() => dispatch({ type: 'INCREMENT'})}> + 1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT'})}> - 1</button>
        </>
    );
};

export default Counter;