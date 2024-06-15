import styled from "styled-components"

const Footerstyle = styled.footer`
    background: #04244F;
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
`

const Social = styled.div`
    display: flex;
    flex-flow: row;
    gap: 34px;
    align-items: center;
    a{
        cursor: pointer;
    }
`
const Info = styled.div`
    color: #FFFFFF;
    font-weight: 500;
    font-size: 16px;
`


const Footer = () => {
    return <Footerstyle>
        <Social>
            <a href="https://github.com/karurosu-vihir" target="_blank"><img src="./imagenes/redes/icons8-github-50.png" alt="github" /></a>
            <div>
                <a target="_blank" href="https://icons8.com/icon/12598/github">GitHub</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
            </div>
        </Social>
        <Info>
            <h4>Desarollado por Carlos E. Vijil</h4>
        </Info>
    </Footerstyle>
}

export default Footer
