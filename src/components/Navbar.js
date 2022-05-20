import React, { useState} from 'react'
import styled  from 'styled-components'
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';
import {
    Link
  } from "react-router-dom";


function Navbar() {
    const [burgerStatus, setBurgerStatus] = useState(false);

  return (
        <Nav>
            <Logo><Link to="/">Predictioner</Link></Logo>
            <Menus>
                <Firstlink><Link to="/daily-horoscope">Daily Horoscope</Link></Firstlink>
                <Secondlink><Link to="/birth-rashi">Birth Rashi</Link></Secondlink>
                <Thirdlink><Link to="/birth-day">Birth Day</Link></Thirdlink>
                <Fourthlink><Link to="/indian-name-calculator">Indian Name Calculator</Link></Fourthlink>
            </Menus>
            <Sidebar><CustomMenu onClick={()=>setBurgerStatus(true)} /></Sidebar>
            <BurgerNav show={burgerStatus}>
                <CloseWrapper><CustomClose onClick={()=>setBurgerStatus(false)} /></CloseWrapper>
                <li><Link to="/daily-horoscope">Daily Horoscope</Link></li>
                <li><Link to="/birth-rashi">Birth Rashi</Link></li>
                <li><Link to="/birth-day">Birth Day</Link></li>
                <li><Link to="/indian-name-calculator">Indian Name Calculator</Link></li>
            </BurgerNav>
        </Nav>
  )
}

export default Navbar

const Nav = styled.div`
    width: 100%;
    // border: 1px solid black;
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
    a{
        text-decoration: none;
        underline: none;
        color: black;
    }
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
    a{
        text-decoration: none;
        underline: none;
        color: black;
    }
`;
const Secondlink = styled.div`
    //border: 1px solid blue;
    padding: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.09rem;
    font-weight: 500;
    a{
        text-decoration: none;
        underline: none;
        color: black;
    }
`;
const Thirdlink = styled.div`
    //border: 1px solid blue;
    padding: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.09rem;
    font-weight: 500;
    a{
        text-decoration: none;
        underline: none;
        color: black;
    }
`;
const Fourthlink = styled.div`
    //border: 1px solid blue;
    padding: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.09rem;
    font-weight: 500;
    a{
        text-decoration: none;
        underline: none;
        color: black;
    }
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