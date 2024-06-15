import styled from "styled-components"

const Banner_container = styled.div`
    width:100%;
    min-height:328px;
    background-image: url("src/assets/banner.png");
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-start;
    opacity: 0.8;
    border-radius: 20px;
    h1{
        font-family: "GandhiSansRegular";
        font-size: 40px;
        line-height: 53px;
        color: #d9d9d9;
        max-width: 301px;
        padding: 45px 36px;
    }
`

const Banner = () => {
    return <>
    <Banner_container>
        <h1>La galería más completa del espacio</h1>
    </Banner_container>
    </>
}

export default Banner


