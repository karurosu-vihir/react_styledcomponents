import styled from "styled-components"
import Imgitem from "../imgitem"
import { useState } from "react"

const Container = styled.aside`
    position: fixed;
    left: 24px;
    top: 190px;
`

const Ul = styled.ul`
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
    gap: 29px;
`

const Li = styled.li`
    a{
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 18px;
    font-size: 28px;
    line-height: 28px;
    cursor: pointer;
    max-height: 40px;
    text-decoration: none;
    color: ${props => props.$activo ? "#7b78e5":"#d9d9d9"};
    font-family: ${props => props.$activo ? "GandhiSansBold":"GandhiSansRegular"};
    .img_lateral{
        width: 32px;
        height: 32px;
        display: inline-block;
    }}
`




const Barralateral = () => {
    const [items_menu,setitems_menu] = useState([
        {
            nombre: "Inicio",
            activo: "./iconos/home-activo.png",
            inactivo: "./iconos/home-inactivo.png",
            seleccionado: true 
        },
        {
            nombre: "Mas Vistas",
            activo: "./iconos/mas-vistas-activo.png",
            inactivo: "./iconos/mas-vistas-inactivo.png",
            seleccionado: false 
        },
        {
            nombre: "Mas me Gusta",
            activo: "./iconos/me-gusta-activo.png",
            inactivo: "./iconos/me-gusta-inactivo.png",
            seleccionado: false 
        },
        {
            nombre: "Nuevas",
            activo: "./iconos/nuevas-activo.png",
            inactivo: "./iconos/nuevas-inactivo.png",
            seleccionado: false 
        },
        {
            nombre: "Sorprendeme",
            activo: "./iconos/sorprendeme-activo.png",
            inactivo: "./iconos/sorprendeme-inactivo.png",
            seleccionado: false 
        }
    ])

    const selectitems_menu = (id) => {
        const items = items_menu.map((item,index)=>{
            if(id === index){
                item.seleccionado = true
            }
            else{
                item.seleccionado = false
            }
            return item
        })
        setitems_menu(items)
    }
    return (
        <Container>
            <nav>
                <Ul>
                    {
                        items_menu.map((item, index) =>
                            <Li $activo={item.seleccionado} key={index} onClick={()=>selectitems_menu(index)}>
                                <a href="#">
                                <Imgitem nombre={item.nombre} activo={item.activo} inactivo={item.inactivo} seleccionado={item.seleccionado}>
                                    <p>{item.nombre}</p>
                                </Imgitem>
                                </a>
                            </Li>)
                    }

                </Ul>
            </nav>
        </Container>
    )
}

export default Barralateral