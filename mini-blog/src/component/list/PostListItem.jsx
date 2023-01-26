import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width : calc(100% - 32px);
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius : 8px;
    cursor : pointer;
    background: white;
    :hover{
        background : lightgrey;
    }
`;

const TitleText=styled.p`
    font-size:20px;
    font-weight: 500;
`;

//PostListItem 컴포넌트는 글의 제목만 보여주면 되기 때문에 단순함.
function PostListItem(props){
    const {post, onClick}= props;

    return(
        <Wrapper onClick={onClick}>
            <TitleText>{post.title}</TitleText>
        </Wrapper>
    );
}

export default PostListItem;