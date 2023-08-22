import React, { useState } from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);
    // 기본 셋팅 value 값 = 0
    // useState를 사용할 때 관례로
    // value에 보이는 값
    // setValue에 설정 값
    console.log(value)
    // 변경되는 숫자를 바로 볼 수 있음
    console.log(setValue)
    // 함수만 나옴
    return (
        <div>
            <p>현재 카운터 값은 <b>{value}</b> 입니다.</p>
            <button onClick={()=>{ setValue(value +1)}}>+1</button>
            <button onClick={()=>{ setValue(value -1)}}>-1</button>
        </div>
    )
}

export default Counter;