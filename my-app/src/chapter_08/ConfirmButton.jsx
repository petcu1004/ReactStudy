import React from "react";

class ConfirmButton extends React.Component{
    constructor(props){
        super(props);

        this.state={
            isConfirmed : false,
        };

        this.handleConfirm=this.handleConfirm.bind(this); //bind를 사용하는 방식으로 이벤트를 처리함
    }

    handleConfirm(){
        this.setState((prevState)=>({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render(){
        return(
            <button
                onClick={this.handleConfirm}
                disabled={this.state.isConfirmed}
                >
                    {this.state.isConfirmed ?"확인됨":"확인하기"}
                </button>
        );
    }
}

export default ConfirmButton;