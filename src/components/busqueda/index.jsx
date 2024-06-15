import { useState } from "react"
import styled from "styled-components"


const Container = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    .icono_busqueda{
        width: 32px;
        height: 32px;
        position: absolute;
        right: 10px;
        top: 20px;
        cursor: pointer;
    }
`

const Input = styled.input`
    box-sizing: border-box;
    width: 566px;
    color: #D9D9D9;
    background-color: transparent;
    padding: 12px 16px;
    border: 3px solid #C98CF1;
    border-radius: 10px;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
    height: 56px;
    @media (max-width:950px) {
        width: 340px;
    }
`

const Busqueda = ({inputvalue}) => {
    const [valor,setvalor] = useState();
    return(
        <Container>
        <Input placeholder="¿Qué estás buscando?" onChange={(e)=>{setvalor(e.target.value)}}/>
        <img src="./iconos/search.png" alt="boton de Busqueda" className="icono_busqueda" onClick={()=>{inputvalue(valor)}}/>
        </Container>
    )
}

export default Busqueda





