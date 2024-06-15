import styled from "styled-components"

const Picture = styled.figure`
    display: flex;
    flex-direction: column;
    gap: 0;
    margin: 20px 0;
    width: ${props => props.$expandir ? '90%' : '400px'};
    .foto{
        height: 256px;
        height: ${props => props.$height? props.$height :'256px'};
        border-radius: 20px 20px 0px 0px;
    }
`

const Caption = styled.figcaption`
    background-color: black;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    height: 80px;
    background: #001634;
    border-radius: 0px 0px 20px 20px;
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    color: white;
    gap: 0;
    justify-content: center;
    padding-left: 20px;
    h3{
        font-family: "GandhiSansBold";
    }
    p{
        margin-top: -20px;
    }
`

const Bottons = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    padding-right: 20px;
    padding-bottom: 20px;
    gap: 24px;
    .favorito{
        cursor: pointer;
    }
    .expandir{
        display: ${props => props.$expandir ? 'none' : 'block'};
        cursor: pointer;
    }
`

const Imagen = ({foto, expandida=false, seleccionarfoto, height, favorito}) => {

    const iconofavorito = foto.favorita ? "./iconos/favorito-activo.png" : "./iconos/favorito.png"

    return <Picture $expandir={expandida} $height={height}>
        <img className="foto" src={foto.path} alt={foto.titulo}/>
        <Caption>
            <Info>
                <h3>{foto.titulo}</h3>
                <p>{foto.fuente}</p>
            </Info>
            <Bottons $expandir={expandida}>
                <img src={iconofavorito} alt="favorito" className="favorito" onClick={() => favorito(foto)}/>
                <img src="./iconos/expandir.png" alt="expandir" className="expandir" onClick={()=>seleccionarfoto(foto)}/>
            </Bottons>
        </Caption>
    </Picture>
}

export default Imagen

