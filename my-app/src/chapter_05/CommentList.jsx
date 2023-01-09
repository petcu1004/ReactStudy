import React from "react";
import Comment from "./Comment";

function CommentList(props){
    return(
        <div>
            <Comment name={"민새미"} comment={"안녕하세요, 민새미입니다."}/>
            <Comment name={"유재석"} comment={"리액트 재미있어요~"}/>
        </div>
    );
}

export default CommentList;