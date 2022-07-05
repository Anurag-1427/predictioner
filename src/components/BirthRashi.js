import React, {useState} from 'react'
import styled from 'styled-components'
import axios from 'axios';
import Navbar from './Navbar';

function BirthRashi() {
  const apiKey = '52eef674-932f-5ea1-b998-14f974be48e0';
  const [rashi, setRashi] = useState();
  const [dob, setDob] = useState("");
  const [rashiTodayPrediction, setRashiTodayPrediction] = useState();
  const [career, setCareer] = useState();
  const [family, setFamily] = useState();
  const [finances, setFinances] = useState();
  const [friends, setFriends] = useState();
  const [health, setHealth] = useState();
  const [luckyColor, setLuckyColor] = useState();
  const [physique, setPhysique] = useState();
  const [relationship, setRelationship] = useState();

  const fetch = ()=>{
      axios.get(`https://api.vedicastroapi.com/json/prediction/dailysun?zodiac=${rashi}&show_same=true&date=${dob}&api_key=${apiKey}`)
      .then((response)=>{
          console.log(response);
          setRashiTodayPrediction(response.data.response.bot_response);
          setCareer(response.data.response.career);
          setFamily(response.data.response.family);
          setFinances(response.data.response.finances);
          setFriends(response.data.response.friends);
          setHealth(response.data.response.health);
          setLuckyColor(response.data.response.luckyColor);
          setPhysique(response.data.response.physique);
          setRelationship(response.data.response.relationship);
      })
  }
  

  return <>
    <Navbar />
    <Wrapper>
        <Inputs>
            <One>
                <label htmlFor="dob">Today's Date</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="text" id='dob' value={dob} onChange={(e) => setDob(e.target.value)} />
            </One>
            <One>
                <p>Date of Birth should be in this pattern: DD/MM/YYYY</p>
            </One>
            
        </Inputs>
        <Upper>
            <Box>
            <img src={`https://cdn.iconscout.com/icon/free/png-64/aries-horoscope-astrology-zodiac-sign-symbol-20965.png`} alt="ariesImage" id='aries-img' />
                <input type="radio" value="1" id="aries" onChange={e=>setRashi(e.target.value)} name="rashi" />
                <label htmlFor="aries">Aries</label>
            </Box>
            <Box>
                <img src={`https://cdn.iconscout.com/icon/free/png-64/taurus-horoscope-astrology-zodiac-sign-symbol-20958.png`} alt="taurasImage" id='taurus-img' />
                <input type="radio" value="2" id="tauras" onChange={e=>setRashi(e.target.value)} name="rashi"/>
                <label htmlFor="taurus">Taurus</label>
            </Box>
            <Box>
                <img src={`https://cdn.iconscout.com/icon/free/png-64/gemini-horoscope-astrology-zodiac-sign-symbol-20947.png`} alt="geminiImage" />
                <input type="radio" value="3" id="gemini" onChange={e=>setRashi(e.target.value)} name="rashi"/>
                <label htmlFor="gemini">Gemini</label>
            </Box>
            <Box>
                <img src={`https://cdn.iconscout.com/icon/free/png-64/cancer-zodiac-horoscope-astrology-sign-symbol-20962.png`} alt="cancerImage" />
                <input type="radio" value="4" id="cancer" onChange={e=>setRashi(e.target.value)} name="rashi"/>
                <label htmlFor="cancer">Cancer</label>
            </Box>
            <Box>
                <img src={`https://cdn.iconscout.com/icon/free/png-64/leo-zodiac-horoscope-astrology-sign-symbol-20955.png`} alt="leoImage" />
                <input type="radio" value="5" id="leo" onChange={e=>setRashi(e.target.value)} name="rashi"/>
                <label htmlFor="leo">Leo</label>
            </Box>
            <Box>
                <img src={`https://cdn.iconscout.com/icon/free/png-64/virgo-zodiac-horoscope-astrology-sign-symbol-20959.png`} alt="virgoImage" />
                <input type="radio" value="6" id="virgo" onChange={e=>setRashi(e.target.value)} name="rashi"/>
                <label htmlFor="virgo">Virgo</label>
            </Box>
            <Box>
                <img src={`https://cdn.iconscout.com/icon/free/png-64/libra-zodiac-horoscope-astrology-sign-symbol-20954.png`} alt="libraImage" />
                <input type="radio" value="7" id="libra" onChange={e=>setRashi(e.target.value)} name="rashi"/>
                <label htmlFor="libra">Libra</label>
            </Box>
            <Box>
                <img src={`https://cdn.iconscout.com/icon/free/png-64/scorpius-3570663-2993149.png`} alt="scorpiusImage" />
                <input type="radio" value="8" id="scorpius" onChange={e=>setRashi(e.target.value)} name="rashi"/>
                <label htmlFor="libra">Scorpius</label>
            </Box>
            <Box>
                <img src={`https://cdn.iconscout.com/icon/free/png-64/sagitarius-2754243-2286887.png`} alt="sagitariusImage" />
                <input type="radio" value="9" id="Sagittarius" onChange={e=>setRashi(e.target.value)} name="rashi"/>
                <label htmlFor="sagittarius">Sagittarius</label>
            </Box>
            <Box>
                <img src={`https://cdn.iconscout.com/icon/free/png-64/capricorn-horoscope-zodiac-astrology-sign-symbol-20964.png`} alt="capricornusImage" />
                <input type="radio" value="10" id="Capricornus" onChange={e=>setRashi(e.target.value)} name="rashi"/>
                <label htmlFor="capricornus">Capricornus</label>
            </Box>
            <Box>
                <img src={`https://cdn.iconscout.com/icon/free/png-64/aquarius-zodiac-horoscope-astrology-sign-symbol-20946.png`} alt="aquariusImage" />
                <input type="radio" value="11" id="aquarius" onChange={e=>setRashi(e.target.value)} name="rashi"/>
                <label htmlFor="aquarius">Aquarius</label>
            </Box>
            <Box>
                <img src={`https://cdn.iconscout.com/icon/premium/png-64-thumb/pieces-1506663-1279746.png`} alt="piecesImage" />
                <input type="radio" value="12" id="pisces" onChange={e=>setRashi(e.target.value)} name="rashi"/>
                <label htmlFor="pisces">Pisces</label>
            </Box>
        </Upper>
        <ButtonDiv>
            <Button onClick={fetch}>Submit</Button>
        </ButtonDiv>
        <Lower>
            <h3>Kindly, refresh before seeing prediction</h3>
            <strong>According to your Birth Rashi, today prediction is: </strong><br />
            {rashiTodayPrediction}<br />
            Career: {career}<br />
            Family: {family}<br />
            Finances: {finances}<br />
            Friends: {friends}<br />
            Health: {health}<br />
            Your Lucky Color: {luckyColor}<br />
            Physique: {physique}<br />
            Relationship: {relationship}<br />
        </Lower>
    </Wrapper>
  </>
}

export default BirthRashi

const Wrapper = styled.div`
    width: 100vw;
    height: 85vh;
    // border: 1px solid black;
`;
const Inputs = styled.div`
    // border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
const One = styled.div`
    display: flex;
    // margin: 0.5%;
    margin-top: 0.5%;
    input{
        margin-right: 5px;
    }
    p{
        color: grey;
        font-size: 12px;
    }
`;
const Upper = styled.div`
    // height: 10vh;
    // border: 1px solid black;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-itmes: center;
`;
const Box = styled.div`
    // border: 1px solid black;
    height: 10vh;
    width: 100%;
    // padding: 1%;
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ButtonDiv = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`;
const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 1px solid black;
    width: 250px;
    border-radius: 50px;    
    padding: 0.4%;
    font-size: 18px;
`;
const Lower = styled.div`
    // border: 1px solid black;
    h3{
        text-align: center;
    }
`;
