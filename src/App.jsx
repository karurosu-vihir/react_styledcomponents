import styled from "styled-components";
import GlobalStyle from "./components/global_styles";
import Header from "./components/header";
import Main from "./components/main";
import { useState } from "react";
import Footer from "./components/footer";

const Fondogradiente = styled.div`
background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
width: 100%;
min-height: 100vh;
`



const App = () => {
  const [inputvalue,setinputvalue] = useState(null);
  return (
    <>
      <Fondogradiente>
        <GlobalStyle />
        <Header inputvalue={setinputvalue}/>
        <Main inputvalue={inputvalue} setinputvalue={setinputvalue}/>
        <Footer/>
      </Fondogradiente>
    </>
  )
}

export default App
