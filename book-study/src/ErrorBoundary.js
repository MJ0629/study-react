import React, { Component } from 'react';

class ErrorBoundary extends Component {
    state = {
        error : false
    };
    // 기본값 설정

    componentDidCatch(error, info) {
        // 에러가 발생했을 때 호출되는 메서드
        // 자식 컴포넌트 내부에서 발생하는 JavaScript 에러를 처리하기 위해 사용
        this.setState({
            error : true
            // 에러가 감지되었을 때 error가 true임을 설정
        });
        console.log({error, info});
        // 에러 정보를 콘솔에 찍어줌
    }
    render() {
        if ( this.state.error ) return <div>에러가 발생했습니다.</div>;
        //  에러가 true일 때  에러가 발생했습니다. 를 반환
        return this.props.children;
        // 에러가 false일 때 자식 컴포넌트 반환
    }
}

export default ErrorBoundary;