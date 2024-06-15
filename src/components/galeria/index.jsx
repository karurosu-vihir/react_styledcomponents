import styled from "styled-components"
import Titulo from "../titulo"
import Tags from "./tags"
import Popular from "./popular"
import Imagen from "./imagen"
import fotos_popular from "../../fotospopulares.json"

const Galerystyle = styled.section`
    margin-top: 40px;
`
const GaleriaContainer = styled.div`
    display: flex;
    @media (max-width: 1000px){
        flex-direction: column;
    }
`

const Galeriafotos = styled.section`
    flex-grow:1;
    width: calc(100% - 400px);
    @media (max-width: 1000px){
        width: 100%;
    }
`

const Galeriafotosflex = styled.div`
    display: flex;
    flex-flow: row wrap;
    gap: 15px;
`

const Galeriapopular = styled.section`
    flex-grow:1;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
`

const Btnshowall = styled.button`

    width: 208px;
    height: 56px;
    border: 2px solid#C98CF1;
    border-radius: 10px;
    font-size: 20px;
    color: #FFFFFF;
    background-color: transparent;
    &:hover{
        border-color: #FFFFFF;
    }
`

const Galeria = ({ fotos = [], seleccionarfoto, favorito, fotoog, setfoto, inputvalue, setinputvalue}) => {
    return <>
        <Galerystyle>
            <Tags fotoog={fotoog} setfoto={setfoto} fotos={fotos} inputvalue={inputvalue} setinputvalue={setinputvalue}/>
        </Galerystyle>
        <Galerystyle>
            <GaleriaContainer>
                <Galeriafotos>
                    <Titulo>Navegue por la galería</Titulo>
                    <Galeriafotosflex>
                        {
                            fotos.map(foto => {
                                return <Imagen key={foto.id} foto={foto} expandida={false} seleccionarfoto={seleccionarfoto} favorito={favorito}/>
                            })
                        }
                    </Galeriafotosflex>
                </Galeriafotos>
                <Galeriapopular>
                    <Titulo $align="center">Populares</Titulo>
                        {
                            fotos_popular.map(foto => {
                                return <Popular key={foto.id} foto={foto}/>
                            })
                        }
                        <Btnshowall>Ver más</Btnshowall>
                </Galeriapopular>
            </GaleriaContainer>
        </Galerystyle>
    </>

}

export default Galeria