import styled from 'styled-components'

//justify-content: center;
//align-items: center;

export const HeroContainer = styled.div`
background: rgb(250, 250, 248);
display: flex;

height: 800px;
position: relative;
z-index: 1;

:before{
    content: '';
    position: absolute;
    top: 0;
    left:0;
    right:0;
    bottom:0;
    backgound: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%),
    linear-gradient(180deg,rgba(0,0,0,0.2) 0%, transparent 100%);
    z-index:2;
}
`;


export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 50%;
height: 100%;
overflow:hidden;
`;

export const HeroContent = styled.div`
z-index: 3;
width: 100%;
position: absolute;
height: 100%;
display:flex;
flex-direction:column;
justify-content:center;
`;

export const TitleContent = styled.div`
z-index: 3;
width: 100%;
position: absolute;
height: 30%;
`;

export const Title = styled.h1`
    font-size: 5vw;
    font-weight: 800;
    color: black;
    font-family: georgia;
    right:16px;
    position:absolute;
    padding:50px 0;
    text-align:center;

`;
/*
@media screen and (max-width: 1200px){
        font-size: 4rem;    }
     @media screen and (max-width: 950px){
            font-size: 3.5rem;    }
     @media screen and (max-width: 800px){
                font-size: 3.1rem;    }
*/
export const BackgroundTitle = styled.h1`
    letter-spacing:8px;
    font-size: 12vw;
    color: rgb(133, 89, 68);
    right:16px;
    position:absolute;
    font-family: georgia; 
    opacity:0.1;

    white-space:nowrap;
    overflow:hidden;
    text-overflow:clip;

`;

export const MiniIndex = styled.p`
    font-size: 2.1rem;
    font-family:helvetica; 
    color: black;
    font-family: georgia;
    right:16px;
    position:absolute;
 }
`;

export const MiniHeroP = styled.p`
    margin-top: 50px;
    color: #e6eaeb;  
    font-size: 13px;
    text-align: center;
    max-width: 600px;
    font-family:  "monaco";
    text-shadow: 2px 2px 4px #000000;

    @media screen and (max-width: 768px) {
        font-size:13px;
    }

    @media screen and (max-width: 480px){
        font-size:11px;
    }
    
`;

export const Image = styled.img`
    width: 80%;
    height: 100%;
    -o-object-fit: cover;
    object-fit:cover;
    background: #232a34;
`;

export const FooterContainer = styled.div`
    display:flex;
    width:100%;
    height:20%;
    z-index:4;
    position:absolute;
    bottom:0;
    border-radius:10%;
`;
export const FooterColumn1 = styled.div`    
    display:flex;
    z-index:4;
    position:absolute;
    bottom:0;
    width:75%;
    height:100%;
    backdrop-filter: blur(5px);
    border-radius:1%;
`;
export const FooterColumn2 = styled.div`
        display:flex;
        z-index:4;
        position:absolute;
        bottom:0;
        width:25%;
        height:100%;
        margin-left:75%;
        border-radius:1%;

        background:black;
    
`;

