import styled from "styled-components";
import Banner from "../banner";
import Galeria from "../galeria";
import fotos from "../../fotos.json"
import { useState } from "react";
import Modalzoom from "../modalzoom";

const Mainstyle = styled.main`
    margin-right: 26px;
    margin-left: 300px;
`

const Main = ({inputvalue, setinputvalue}) => {
    const fotosoriginales = fotos
    const [fotosgal,setfotosgal] = useState(fotos)
     const [fotoshow,setfotoshow] = useState(null)
     const favorito = (foto)=>{
        setfotosgal(fotosgal.map((fotogal)=>{
           return {
            ...fotogal,
            favorita : fotogal.id === foto.id ? !fotogal.favorita : fotogal.favorita
        }
        }))
        setfotoshow(()=>{
            if(fotoshow){
            return {
             ...fotoshow,
             favorita : fotoshow.id === foto.id ? !fotoshow.favorita : fotoshow.favorita}
         }
         else{
            return
         }
         })
     }
    return <Mainstyle>
        <Banner/>
        <Galeria fotos={fotosgal} seleccionarfoto={foto=>setfotoshow(foto)} favorito={favorito} fotoog={fotosoriginales} 
        setfoto={setfotosgal} inputvalue={inputvalue} setinputvalue={setinputvalue}/>
        <Modalzoom foto={fotoshow} favorito={favorito} seleccionarfoto={setfotoshow}/>
    </Mainstyle>
}

export default Main