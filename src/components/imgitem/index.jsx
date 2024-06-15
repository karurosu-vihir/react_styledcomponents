import styled from "styled-components";

const Imgitem = ({children,nombre,activo,inactivo,seleccionado}) =>{
    return<>
        <img src={seleccionado ? activo : inactivo} alt={nombre} className="img_lateral"/>
        {children}
    </>
}

export default Imgitem;