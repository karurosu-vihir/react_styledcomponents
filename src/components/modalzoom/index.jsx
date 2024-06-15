import styled from "styled-components"
import Imagen from "../galeria/imagen"

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.7);
` 

const Dialogstyle = styled.dialog`
    position: absolute;
    top: 313px;
    background-color: transparent;
    border: none;
    width: 1156px;
`

const Form = styled.form`
    position: absolute;
    top: 50px;
    right: 150px;
    button{
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
`

const Modalzoom = ({foto, favorito, seleccionarfoto}) => {
    return <>
        {foto && <>
            <Overlay/>
            <Dialogstyle open={!!foto}>
            <Imagen key={foto.id} foto={foto} expandida={true} height={"660px"} favorito={favorito}/>
            <Form method="dialog">
                <button onClick={()=>{seleccionarfoto(null)}}><img src="./iconos/cerrar.png" alt="cerrar"/></button>
            </Form>
        </Dialogstyle>
        </>}
    </>
}

export default Modalzoom