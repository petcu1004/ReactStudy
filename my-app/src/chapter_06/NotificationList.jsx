import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id: 1,
        message: "안녕하세요, 오늘 일정을 알려드립니다.",
    },
    {
        id: 2,
        message: "점심식사 시간입니다.",
    },
    {
        id: 3,
        message: "이제 곧 미팅이 시작됩니다.",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            //생성자에서 빈 notifications라는 배열을 state에 넣었음.
            //이처럼 생성자는 앞으로 사용할 데이터를 state에 넣어 초기화함.
            notifications: [],
        };
    }

    componentDidMount() { //클래스 컴포넌트의 생명주기 함수 중 하나
        const { notifications } = this.state;
        timer = setInterval(() => { //자바 스크립트의 setInterval 함수를 사용하여 매 1초마다 정해진 작업을 수행하고 있음.
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({ //state를 업데이트 하기 위해 setState함수 사용
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications: [], //notifications 비우기!
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification) => {
                    return (
                        <Notification
                            key={notification.id} //리액트 element를 구분하기 위한 고유의 값인데 map 함수를 사용할 때는 필수적으로 들어가야함.
                            id={notification.id}
                            message={notification.message}
                        />
                    );
                })}
            </div>
        );
    }
}

export default NotificationList;