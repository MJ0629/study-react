import React, { useReducer } from "react";


function reducer(state, action) {
    return {
        ...state, 
        // state를 복사
        [action.name] : action.value
        // action.name값을 action.value
    };
}

const Info = () => {
    const [state, dispatch] = useReducer(reducer, {
        name : '',
        nickname: ''
        // 이름과 닉네임에 기본 공백 값 설정
    });
    const { name, nickname } = state;
    // 이름과 닉네임은 = state
    const onChange = e => {
        dispatch(e.target);
        // e.target은 dispatch로 ㄱㄱ
    };

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b> {nickname}
                </div>
            </div>
        </div>

    );
};

export default Info;