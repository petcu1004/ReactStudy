import React from "react";

const styles = {
    wrapper: {
        margin: 8,
        padding: 8,
        display: "flex",
        flexDirection: "row",
        border: "1px solid grey",
        borderRadius: 16,
    },
    messageText: {
        color: "black",
        fontSize: 16,
    },
};

class Notification extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    //3가지의 생명 주기 함수들이 호출될 경우 콘솔에 로그를 남기도록 작성
    componentDidMount(){ //컴포넌트가 componentDidMount된 이후
        console.log(`${this. props.id} componentDidMount() called`); //문장을 묶을 때 (`)역따옴표를 사용하기 
    }

    componentDidUpdate(){ //컴포넌트가 componentDidUpdate된 이후
        console.log(`${this. props.id} componentDidUpdate() called`);
    }
    
    componentWillUnmount(){ //컴포넌트가 componentWillUnmount된 이전
        console.log(`${this. props.id} componentWillUnmount() called`);
    }

    render() {
        return (
            <div style={styles.wrapper}>
                <span style={styles.messageText}>{this.props.message}</span>
            </div>
        );
    }
}

export default Notification;