import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

export default function BirthDay() {
   const [day,setDay] = useState('');
   const [name,setName] = useState('');
   const [sunday, setSunday] = useState('');
   const [monday, setMonday] = useState('');
   const [tuesday, setTuesday] = useState('');
   const [wednesday, setWedneday] = useState('');
   const [thrusday, setThrusday] = useState('');
   const [friday, setFriday] = useState('');
   const [saturday, setSaturday] = useState('');
   

    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleChange1 = (e) => {
        setDay(e.target.value);
        setSunday(<p>The people have birth day - Sunday, these people are very Lucky. These people have very good personality. Being ruled by the Sun, these people always want to be a the center of attraction and rule their domestic and social front. As, the planets revolve around the sun, these people are surrounded by their near and dear ones, children, pets and people. Having enough fun and a purposeful life are their top priorities. Though they appear confident most of the times, they can be seriously distreesed while confronting troubles and challenges. They will only make friends with those people who will allow them to be at the center. Worshipping Sun god (Bhagwan Surya Narayan) every morning to get good achievements in their life.</p>)
    }
    const handleChange2 = (e) => {
        setDay(e.target.value);
        setMonday(<p>The people have birth day - Monday and it is a day considered and associated with Lord Shiva (Bhagwan Shiv), also considered as the symbol of Goodness and Integrity. This day is influenced by moon due to this the natives born on this day are very emotional and have a soft heart. They are easily influenced by the words of others due to which they may face problems. The impact of moon on the natives born on Monday can make him of gentle tendency. They can easily establish reconciliation with others. The native is also very creative. They can think about a lot of things in their mind. They also have the capability to adapt according to the situation.</p>)
    }
    const handleChange3 = (e) => {
        setDay(e.target.value);
        setTuesday(<p>The people have birth day - Tuesday and based on Vedic Astrology, Tuesday born people tend to be brave. They can also be rash. Being diplomatic is not their virtue. They are warriors; they prefer to fight and win. This makes them good kings but bad politicians. People born on Tuesday are usually clear of the heart but may fail to get the joke. Worse, they tend to take it personally. They may prefer boxing over a game of chess. They will help themselves forward with tenacity until they win.</p>)
    }
    const handleChange4 = (e) => {
        setDay(e.target.value);
        setWedneday(<p>The people have birth day - Wednesday and Born on the day ruled by Mercury, the Wednesday born are restless individuals who question everything in life. These are highly communicative persons who possess versatile capabilities. They are often unreliable and careless in their approach to life. They are highly active and keep moving around. They are great learners and take an active interest in knowing anything and everything. The Wednesday born are highly logical minded. You will shine well in those careers that involve mathematical abilities and scientific approach. Curiosity was born with you and hence you always love to explore everything around you. You will love travels, meeting with new people and undergoing new experiences. To find fulfilment in your career, choose a vocation that will provide an opportunity to make use of your intelligence. You must always strive to stay organized with regard to your thoughts to bag success. Avoid distractions and engage in meditation and yoga to maximize your potentials and bag success.</p>)
    }
    const handleChange5 = (e) => {
        setDay(e.target.value);
        setThrusday(<p>The people have birth day - Thrusday and Born on the day ruled by Jupiter, the Thursday born persons are bound to see expansion and wealth in their life. Everything about them is large and vast. Though they can get a depressive mood at times, they look at life in an optimistic way. Hence they can face the ups and downs of life in a resolute way. They are good at advising. They are always surrounded by people who eagerly look for their views and judgments. The Thursday born people are born teachers. You tend to move with life with a free spirit that gathers more wisdom as the days go by. Your lucky number is three. On Thursdays, visit the temple of Guru and do charities to reap a blissful life.</p>)
    }
    const handleChange6 = (e) => {
        setDay(e.target.value);
        setFriday(<p>The people have birth day - Friday and it is a day of Venus which governs some interesting aspects of life like Lov, Balance, Affection, Beauty, Pertnership, Romance, Refinement, Art, Pleasures, Luxuries and Comforts. Friday born people are highly social and artistic. Often they depend too much on the views and opinions of others. You find a Friday born person have a lazy nature and comfort living. The talents must be nurtures and brought out by surrounding them with beauty and love.You are a pleasant and charming individual endowed with the power to attract anyone on the earth.</p>)
    }
    const handleChange7 = (e) => {
        setDay(e.target.value);
        setSaturday(<p>The people have birth day - Saturday and people born on Saturday are determined individuals who take a firm approach to life. They are slow, steady, hardworking, disciplined, and different from others. They are intelligent and professional and follow a strict, practical, and straightforward approach to life. They can be adamant and suspicious at times. These people occupy leading positions in family setups. They may not be flexible or trusting and life may not be easy for them. They are highly intelligent and are endowed with sharp business acumen. They are shrewd and calculative and are proficient in using their capabilities to achieve optimum results. They also have strong commitment and are perfectionists in whatever they do. These characteristics make them successful in any job or career; however, these attributes become an asset especially in business dealings.  </p>)
    }

    return (
        <Wrapdiv>
          <Navbar />
          <Upper>
          <button onClick={() => window.location.reload()}>Refresh</button>
            <div>
            <label htmlFor="name">Your Full name</label>
            <input type="text" id="name"  onChange={handleChangeName} name="name" /><br />
            </div> 
         <Form>
         <form>
            <div>
            <img src={`https://cdn.iconscout.com/icon/premium/png-64-thumb/sunday-4589944-3809019.png`} alt="sundayImage" id='sunday-img' />
            <input type="radio" value="Sunday" id="sunday"  onChange={handleChange1} name="sunday" />
            <label htmlFor="sunday">Sunday</label>
            </div>

            <div>
            <img src={`https://cdn.iconscout.com/icon/premium/png-64-thumb/monday-4589937-3809012.png`} alt="mondayImage" id='monday-img' />
            <input type="radio" value="Monday" id="monday" onChange={handleChange2} name="day"/>
            <label htmlFor="monday">Monday</label>
            </div>

            <div>
            <img src={`https://cdn.iconscout.com/icon/premium/png-64-thumb/tuesday-4589947-3809022.png`} alt="tuesdayImage" />
            <input type="radio" value="Tuesday" id="tuesday" onChange={handleChange3} name="day"/>
            <label htmlFor="tuesday">Tuesday</label>
            </div>
            </form>
            </Form>

            <div>
            <img src={`https://cdn.iconscout.com/icon/premium/png-64-thumb/wednesday-4589950-3809025.png`} alt="wednesdayImage" />
            <input type="radio" value="Wednesday" id="wednesday" onChange={handleChange4} name="day"/>
            <label htmlFor="wednesday">Wednesday</label>
            </div>
            

            <Form>
            <form>
            <div>
            <img src={`https://cdn.iconscout.com/icon/premium/png-64-thumb/thursday-4589945-3809020.png`} alt="thrusdayImage" />
            <input type="radio" value="Thrusday" id="thrusday" onChange={handleChange5} name="day"/>
            <label htmlFor="thrusday">Thrusday</label>
            </div>

            <div>
            <img src={`https://cdn.iconscout.com/icon/premium/png-64-thumb/friday-4589931-3809006.png`} alt="fridayImage" />
            <input type="radio" value="Friday" id="friday" onChange={handleChange6} name="day"/>
            <label htmlFor="friday">Friday</label>
            </div>
            <div>
            <img src={`https://cdn.iconscout.com/icon/premium/png-64-thumb/saturday-4589942-3809017.png`} alt="saturdayImage" />
            <input type="radio" value="Saturday" id="saturday" onChange={handleChange7} name="day"/>
            <label htmlFor="saturday">Saturday</label>
            </div>
            </form>
            </Form>
            
         </Upper>
         <Lower>
         <h5>Always refresh before reading</h5>
         <p>Hi, {name} Your Birth Day is: {day}</p>
         {sunday} {monday} {tuesday} {wednesday} {thrusday} {friday} {saturday} 
         </Lower>
         
      </Wrapdiv>
    );
}

const Wrapdiv = styled.div`
    width: 100vw;
    height: 100vh;
    // border: 1px solid black;
    overflow-x: hidden;
    overflow-y: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction : column;
    @media (max-width: 640px)
    {
        overflow-x: scroll;
        overflow-y: scroll;
    }
`;
const Upper = styled.div`
    width: 100vw;
    height: 50vh;
    // border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    button{
        outline: none;
        background: white;
        color: black;
        padding: 4px;
        width: 200px;
        // border: 3px solid black;
        border-radius: 50px;
        transition: 0.5s;
        &:hover{
            background: black;
            color: white;
        }
        margin-bottom: 5px;
    }
    div{
        margin-bottom: 5px; 
        marign-top: 20px;         
    }
    label{
        // margin-left: 5px;
        margin-right: 10px;
    }
    @media (max-width: 640px)
    {
        height: 40vh;
    }
`;
const Form = styled.div`
    // border: 3px solid black;
    form{
        display: flex;
        justify-content: center;
        align-items: center;
        div{
            // flex-direction : column;
            padding: 1%;
            // border: 1px solid black;
            img{
                width: 40%;
            }
        }
    }
    

`;
const Lower = styled.div`
    width: 100vw;
    height: 40vh;
    // border: 1px solid black;
    h5{
        font-size: 20px;
        text-align: center;
    }
    p{
        fopnt-size: 18px;
    }
    @media (max-width: 640px){
        height: 50vh;
    }
`;