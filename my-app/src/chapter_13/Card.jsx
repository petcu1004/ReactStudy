//Card 컴포넌트는 범용적으로 재사용이 가능한 컴포넌트이다.
function Card(props){
    const { title, backgroundColor, children} = props; 
    //title, backgroundColor : Specialization 사용
    //children : Containment 사용

    return(
        <div
        style={{
            margin: 8,
            padding : 8,
            borderRadius:8,
            boxShadow: "0px 0px 4px grey",
            backgroundColor : backgroundColor || "white",
        }}
        >
            {title && <h1>{title}</h1>}
            {children} 
        </div>
    );
}

export default Card;