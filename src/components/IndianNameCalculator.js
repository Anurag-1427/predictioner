import React, { useState } from 'react'
import styled from 'styled-components'
import axios from 'axios';
import Navbar from './Navbar'

function IndianNameCalculator() {
  const apiKey = 'e9adef17-d0d3-59f8-954c-8356f2e80bfb';
  const [name, setName] = useState();
  const [date, setDate] = useState();
  const [agenda, setAgenda] = useState();
  const [attitude, setAttitude] = useState();
  const [character, setCharacter] = useState();
  const [destiny, setDestiny] = useState();
  const [personality, setPersonality] = useState();
  const [purpose, setPurpose] = useState();
  const [soul, setSoul] = useState();
  const fetch = ()=>{
    axios.get( `https://api.vedicastroapi.com/json/prediction/numerology?name=${name}&show_same=true&date=${date}&api_key=${apiKey}`)
    .then((response)=>{
        console.log(response);
        setAgenda(response.data.response.agenda.meaning)
        setAttitude(response.data.response.attitude.meaning)
        setCharacter(response.data.response.character.meaning)
        setDestiny(response.data.response.destiny.meaning)
        setPersonality(response.data.response.personality.meaning)
        setPurpose(response.data.response.purpose.meaning)
        setSoul (response.data.response.soul.meaning)
    })
  }
  return <>
      <Navbar />
      <Wraper>
          <Inputs>
                <One>
                  <label htmlFor="name">Name</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <input type="text" id='name' onChange={(e)=>setName(e.target.value)} />
                </One>
                <One>
                  <label htmlFor="date">Today's Date</label>&nbsp;&nbsp;&nbsp;
                  <input type="text" id='date' onChange={(e)=>setDate(e.target.value)} />
                </One>
                <ButtonDiv><Button onClick={fetch}>Submit</Button></ButtonDiv>
          </Inputs>
          <Content>
          <h3>Kindly, refresh before seeing prediction</h3>
          <strong>Agenda: </strong>{agenda}<br /><br />
          <strong>Attitude: </strong>{attitude}<br /><br />
          <strong>Character: </strong>{character}<br /><br />
          <strong>Destiny: </strong>{destiny}<br /><br />
          <strong>Personality: </strong>{personality} <br /><br />
          <strong>Purpose: </strong>{purpose} <br /><br />
          <strong>Soul: </strong>{soul} <br /><br />
          </Content>
      </Wraper>
  </>
}

export default IndianNameCalculator

const Wraper = styled.div`
  // border: 1px solid black;
  width: 100vw;
  height: 80vh;
`;
const Inputs = styled.div`
  width: 100%;
`;
const One = styled.div`
  // border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  // flex-direction: column;
  margin: 0.2%;
  padding: 0.5%;
`;
const ButtonDiv = styled.div`
  // border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.div`
  border: 1px solid black;
  width: 200px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.2%;
  cursor: pointer;
  margin: 0.5%;
`;
const Content = styled.div`
  // border: 1px solid black;
  width: 100vw;
  h3{
    text-align: center;
}
`;