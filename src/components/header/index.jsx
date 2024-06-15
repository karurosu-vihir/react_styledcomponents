import styled from "styled-components"
import Busqueda from "../busqueda"
import Barralateral from "../barra_lateral"


const Headerstyle = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 60px 24px;
    .logo{
        width: 212px;
    }
`



const Header = ({inputvalue}) => {
    return(
        <Headerstyle>
            <img src="./imagenes/logo.png" alt="Logo de Space App" className="logo"/>
            <Busqueda inputvalue={inputvalue}/>
            <Barralateral/>
        </Headerstyle>
    )
}

export default Header