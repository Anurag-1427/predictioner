import React from 'react'
import styled, { keyframes } from 'styled-components'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import { useState } from 'react';
import rasi_chakra from '../../src/rasi_chakra.png'

function Home() {
    const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <Wrap>
        <Nav>
            <Logo>Predictioner</Logo>
            <Menus>
                <Firstlink>Daily Horoscope</Firstlink>
                <Secondlink>Birth Rashi</Secondlink>
                <Thirdlink>Birth Day</Thirdlink>
                <Fourthlink>Indian Name Calculator</Fourthlink>
            </Menus>
            <Sidebar><CustomMenu onClick={()=>setBurgerStatus(true)} /></Sidebar>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper><CustomClose onClick={()=>setBurgerStatus(false)} /></CloseWrapper>
                <li><a href="#">Daily Horoscope</a></li>
                <li><a href="#">Birth Rashi</a></li>
                <li><a href="#">Birth Day</a></li>
                <li><a href="#">Indian Name Calculator</a></li>
            </BurgerNav>
        </Nav>
        <Content>
            <Title>
                <Box></Box>
                <p>A little information about you</p>
                <Boxtwo></Boxtwo>
                <Line></Line>
                <Linetwo></Linetwo>
            </Title>
            <Rasichakra>
                <img src={rasi_chakra} alt="image-of-rasi-chakra" />
            </Rasichakra>
        </Content>
        <Footer>
            <Copyright>
                &copy; 2022 All right reserved
            </Copyright>
            <List>
                <First><a href='#'>Daily Horoscope</a></First>
                <Second><a href='#'>Birth Rashi</a></Second>
                <Third><a href='#'>Birth Day</a></Third>
                <Fourth><a href='#'>Indian Name Calculator</a></Fourth>
            </List>
        </Footer>
    </Wrap>
  )
}

export default Home

const animation = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
`;
const Nav = styled.div`
    width: 100%;
    //border: 1px solid black;
    display: flex;
    justify-content: space-between;
`;
const Logo = styled.div`
    //border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1%;
    margin-left: 7%;
    font-size: 1.7rem;
    font-weight: 700;
    font-family: 'Baloo Bhaijaan 2', cursive;
`;
const Menus = styled.div`
    //border: 1px solid black;
    width: 47%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 640px){
        display: none;
    }
`;
const Firstlink = styled.div`
    //border: 1px solid blue;
    padding: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.09rem;
    font-weight: 500;
`;
const Secondlink = styled.div`
    //border: 1px solid blue;
    padding: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.09rem;
    font-weight: 500;
`;
const Thirdlink = styled.div`
    //border: 1px solid blue;
    padding: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.09rem;
    font-weight: 500;
`;
const Fourthlink = styled.div`
    //border: 1px solid blue;
    padding: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.09rem;
    font-weight: 500;
`;

const Sidebar = styled.div`
    //border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 8%;
    padding: 1%;
    
`;
const CustomMenu = styled(MenuOutlined)`
    cursor: pointer;
`;
const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 300px;
    z-index: 16;
    list-style: none;
    padding: 20px;
    display: flex;
    flex-direction: column;
    text-align: start;

    transform: ${props => props.show ? `tranlateX(0)` : `translateX(100%)`};
    transition: transform 0.2s ease-in-out;

    li{
        padding: 15px 0;
        border-bottom: 1px solid rgba(0,0,0,0.2);
    }
    a{
        font-weight: 600;
        text-decoration: none;
        color: black;
    }
`;
const CustomClose = styled(CloseOutlined)`
    cursor: pointer;
`;
const CloseWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const Content = styled.div`
    //border: 1px solid black;
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 640px) {
        flex-direction: column-reverse;
        width: 100vw;
        height: 80vh;
    }
`;
const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    //border: 1px solid blue;
    width: 50vw;
    height: 100%;
    p{
        font-size: 5rem;
        margin-left: 7%;
    }
    @media (max-width: 640px) {
        width: 100%;
        p{
            font-size: 1.8rem;
            margin-left: 7%;
        }
    }
`;
const Box = styled.div`
    width: 20px;
    height: 20px;
    background: #FFAD26;
    position: absolute;
    top: 30%;
    left: 4%;
    @media (max-width: 640px){
        top: 70%;
        width: 15px;
        height: 15px;
    }
`;
const Boxtwo = styled.div`
    width: 20px;
    height: 20px;
    background: #FFAD26;
    position: absolute;
    top: 72%;
    left: 4%;
    @media (max-width: 640px){
        top: 89%;
        width: 15px;
        height: 15px;
    }
`;
const Line = styled.div`
    width: 75px;
    height: 4px;
    background: #FFAD26;
    position: absolute;
    top: 78%;
    left: 4%;
    @media (max-width: 640px){
        top: 93%;
    }
`;
const Linetwo = styled.div`
    width: 55px;
    height: 2px;
    background: #FFAD26;
    position: absolute;
    top: 80%;
    left: 4%;
    @media (max-width: 640px){
        top: 95%;
    }
`;
const Rasichakra = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    //border: 1px solid blue;
    width: 50vw;
    height: 100%;
    img{
        animation-name: ${animation};
        animation-duration: 200s;
        animaton-iteration-count: infinite;
    }
    @media (max-width: 640px) {
        width: 95%;
        img{
            width: 100%;
        }
    }
`;

const Footer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    //border: 1px solid black;
    @media (max-width: 640px){
        flex-direction: column;
    }
`;
const Copyright = styled.div`
    font-size: 15px;
    color: grey;
`;
const List = styled.div`
    width: 85vw;
    //border: 1px solid blue;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 640px){
        margin-top: 2%;
    }
`;
const First = styled.div`
    //border: 1px solid black;
    padding: 1%;
    a{
        text-decoration: none;
        color: grey;
    }
    @media (max-width: 640px){
        font-size: 0.5rem;
    }
`;
const Second = styled.div`
    //border: 1px solid black;
    padding: 1%;
    a{
        text-decoration: none;
        color: grey;
    }
    @media (max-width: 640px){
        font-size: 0.5rem;
    }
`;
const Third = styled.div`
    //border: 1px solid black;
    padding: 1%;
    a{
        text-decoration: none;
        color: grey;
    }
    @media (max-width: 640px){
        font-size: 0.5rem;
    }
`;
const Fourth = styled.div`
    //border: 1px solid black;
    padding: 1%;
    margin-right: 12%;
    a{
        text-decoration: none;
        color: grey;
    }
    @media (max-width: 640px){
        font-size: 0.5rem;
        margin-right: 0;
    }
`;