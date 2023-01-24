import React from "react";

//Context의 초기값을 별도로 설정하기 않았고 이후 Provider에서 값을 설정할 예정
const ThemeContext = React.createContext(); 
ThemeContext.displayName="ThemeContext";

export default ThemeContext;