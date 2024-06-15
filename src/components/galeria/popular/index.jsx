import styled from "styled-components"

const Container_popular = styled.div`
    width: 212px;
    height: 158px;
`

const Popular = ({foto}) => {
    return<Container_popular>
        <img src={foto.path} alt="hola"/>
    </Container_popular>
}

export default Popular