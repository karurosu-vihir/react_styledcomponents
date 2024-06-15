import styled from 'styled-components'
import tags from './tags.json'

const Tagstyle = styled.div`
    display: flex;
    gap: 20px;
    p{
        color: #D9D9D9;
        font-size: 24px;
        margin: 0;
        align-self: center;
        margin-right: 44px;
    }
    button{
        width: fit-content;
        height: 64px;
        background: rgba(217, 217, 217, 0.3);
        border-radius: 10px;
        font-size: 24px;
        color: #ffffff;
        padding: 6px;
        padding: 12px;
        box-sizing: border-box;
        border: 2px solid transparent;
        cursor: pointer;
        transition: background-color 0.3s ease;
        &:hover {
             border-color: #C98CF1;
        }
    }
`

const Tags = ({fotoog, setfoto, fotos, inputvalue, setinputvalue}) => {

    if(inputvalue !== null){
        const filterfotos = fotoog.filter(foto => foto.titulo.toLowerCase().includes(inputvalue.toLowerCase()))   
        fotos.map((foto)=>{
            setfoto(filterfotos)
            setinputvalue(null)
        })
    }
    
    const tagselect = (id) =>{
        const filterfotos = fotoog.filter(foto => id === foto.tagId)
        fotos.map((foto)=>{
            if(id=== 0){
                setfoto(fotoog)
            }
            else{
                setfoto(filterfotos)
            }
        })
    }
    return <Tagstyle>
        <p>Busque por tags:</p>
        {
            tags.map(tag => {
                return <button key={tag.id} onClick={()=>{tagselect(tag.id)}}>{tag.titulo}</button>
            })
        }
    </Tagstyle>
}

export default Tags

