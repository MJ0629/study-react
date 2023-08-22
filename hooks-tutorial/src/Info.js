import React, { useState, useEffect } from "react";

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    // 기본 스테이트 값 설정

    useEffect(() => {
        console.log('랜더링이 완료되었습니다!');
        console.log({
            name,
            nickname
        });
    });

    useEffect(() => {
        console.log("마운트 될 때만 실행");
    }, []);

    useEffect(() => {
        console.log(name);
        
    }, [name]);
    // [name] name의 값이 변경될 때만 작업 수행
    // class 형태일 때는 componentDidUpdate를 사용해서 if문 사용해야했음

    useEffect(()=> {
        // 마운트 될 때
        console.log('컴포넌트가 렌더릴 될 때 : effect');
        console.log(name);
        return () => {
            // 언마운트 될 때
            console.log('언마운트가 될 때 : cleanUp');
            console.log(name);
        };
    }, [name]);
    // useEffect는 기본적으로 렌더링되고 난 직후마다 실행됨
    // 두번째 파라미터 배열에 무엇을 넣는지에 따라 실행되는 조건이 달라짐
    // 


    const onChangeName = e => {
        setName(e.target.value);
        // 이 함수에 입력된 값을 이름에 넣어줌
        // change는 인풋에 값이 입력되었을 때....
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName}/>
                {/* value에 name을 넣어줌 인풋의 값이 바뀌면 onChangeName함수 적용시켜서 인풋의 바뀐 값을 setName에 넣어줘서 name의 값을 바꿔줌 */}
                <input value={nickname} onChange={onChangeNickname}/>
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
    )
}

export default Info;