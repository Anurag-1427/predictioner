import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

export default function BirthRashi() {
   const [rashi,setRashi] = useState('');
   const [name,setName] = useState('');
   const [aries, setAries] = useState('');
   const [taurus, setTaurus] = useState('');
   const [gemini, setGemini] = useState('');
   const [cancer, setCancer] = useState('');
   const [leo, setLeo] = useState('');
   const [virgo, setVirgo] = useState('');
   const [libra, setLibra] = useState('');
   const [scorpius, setScorpius] = useState('');
   const [sagittarius, setSagittarius] = useState('');
   const [capricornus, setCapricornus] = useState('');
   const [aquarius, setAquarius] = useState('');
   const [pisces, setPisces] = useState('');

    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleChange1 = (e) => {
        setRashi(e.target.value);
        setAries(<p>The person who have a sign Aries are have following physical qualities: Good Height, Thin, Long Face and Neck, Thick Head and Curly Hair.  These type of person are very Ambitious, Leading, Motivated, Stubborn but a clear one. The lord of this sign is Mars that'why you have a strong determination, dedication, hard-worker especially towards your work. They wanted a high offical designation especially in a government sector. These type of person always wanted a strong place in every field. Person have a sign aries have a huge medically sounded mind if these type of people wanted carrer in the medical field, they must persue. These person have a probability of following diseases are: Headache(especially, these people have a problem of headache from a long time; after a teenage time ), Burning Issues on skins, High Fever, Acnes, Paralysis. Disclaimer: Kindly, contact Astrologer for a full detail about the positions of planets according to your horoscope so that everything should be clear about your carrer, buisness, and diseases as well and sometimes above identifications do not match with the person so in that case you must have to contact the Astrologer.</p>)
    }
    const handleChange2 = (e) => {
        setRashi(e.target.value);
        setTaurus(<p>The person who have a sign Taurus are have following qualities: Average Height, Good looking face, Attractive and Thick Body, head, shoulders, long ears. These types of person are very good in decision making, leadership qualities. These people easily got believe in anyone. These people are fond of pleasures from materials such as good and high qualities technologies, music, beautiness, have a behaviour of love. These people never wanted for messing with anyone, they want peace in their and eveyone life. They are trustworthy for everybody, if your friend have a sign taurus then you can easily trust him/her. They have their own principles of life and wanted to live a life according to that. They are very hardworker (experiencely, they forget about the timing while doing their work), they are good musician, have a good hold in media and fashion industry. These person have a probability of following disease are: Tonsil, Pyria, Constipation, Cold. Disclaimer: Kindly, contact Astrologer for a full detail about the positions of planets according to your horoscope so that everything should be clear about your carrer, buisness, and diseases as well and sometimes above identifications do not match with the person so in that case you must have to contact the Astrologer.  </p>)
    }
    const handleChange3 = (e) => {
        setRashi(e.target.value);
        setGemini(<p>The person who have a sign Gemini are have following qualities: Thin and Good Height, Attractive Body, Pit on Chin, Sharp and Black Eyes, Long Nose. These people have a good knowledge regarding the behavioural science of humans. They bear lose maximumlly by cheating. If positon of the sign's lord is excellent in your horoscope then you have following qualites are: Pleasant voice for singing, excellent logical skills for the subjects like Mathematics. They have good dedication towards their work, sharp decision making. They have a strong verbal abilities so they are good poet, speaker, writer, musician, have a good technical knowledge. They have a hold of fate when they dedicatedly work otherwise not. They always ready for taking participation in social works, that's why they have a good respect in society. These person have a probability of following disease are: Cold, Coughing, Tuberculosis. Disclaimer: Kindly, contact Astrologer for a full detail about the positions of planets according to your horoscope so that everything should be clear about your carrer, buisness, and diseases as well and sometimes above identifications do not match with the person so in that case you must have to contact the Astrologer. </p>)
    }
    const handleChange4 = (e) => {
        setRashi(e.target.value);
        setCancer(<p>The person who have a sign Cancer are have following qualities: Short Height, Thin Body in Young Age, Circular face Brown Hair, Thick Teeth, Shoulders. They have a stong imagination. They easily accept the new thoughts that's why they easily adapts in a new environment. They are great actor, speaker, writer, planning maker. They are of soft nature and majorly focuses on karma and saves everything such as money while doing this. They have a strong support of mother. They have good learning things. They are moody and favourites of great personalities. These person have a probability of following disease are: Infection in Lungs, Coughing, Tuberculosis, Weakness, Jaundice. Disclaimer: Kindly, contact Astrologer for a full detail about the positions of planets according to your horoscope so that everything should be clear about your carrer, buisness, and diseases as well and sometimes above identifications do not match with the person so in that case you must have to contact the Astrologer.</p>)
    }
    const handleChange5 = (e) => {
        setRashi(e.target.value);
        setLeo(<p>The person who have a sign Leo are have following qualities: Long Height, Shoulders, Muscular Body, effective personality. They are having a very good level of confidence, power, have a bossy nature and leadership skills. They have a strong interest in studying and have a carrer through them. Major skill of these type of people is Peaceful Nature. They never lose the coming opportunity, have a great speech by which they are successful to motivate others. They have a great carrer in the government sector like on a good designation of officers like Administrative Services, and much more like that. These person have a probability of following disease are: Inflammation, Epilepsy, Heart Diseases. Disclaimer: Kindly, contact Astrologer for a full detail about the positions of planets according to your horoscope so that everything should be clear about your carrer, buisness, and diseases as well and sometimes above identifications do not match with the person so in that case you must have to contact the Astrologer.</p>)
    }
    const handleChange6 = (e) => {
        setRashi(e.target.value);
        setVirgo(<p>The person who have a sign Virgo are have following qualities: Average Height, Blackish Hair and eyes, sharp and low pitch in voice, straight nose, sometimes, they apperars to a younger than the actual age. They are very intellectual, analyst, sharp minded. They have a knowledge of more than 3 languages. They have a scientific view to see the natural phenomena. They easily flow in the feeling. These person have a probability of following disease are: Abdomen related diseases, Typhoid, Stones in various organs of body, Dysentery. Disclaimer: Kindly, contact Astrologer for a full detail about the positions of planets according to your horoscope so that everything should be clear about your carrer, buisness, and diseases as well and sometimes above identifications do not match with the person so in that case you must have to contact the Astrologer. </p>)
    }
    const handleChange7 = (e) => {
        setRashi(e.target.value);
        setLibra(<p>The person who have a sign Libra are have following qualities: Long Height and Thin Body, attractice face, gaps in between the teeths, little bend nose,  hair loss in young age then also have a attractice personality. They are very soft, kind hearted, trustworthy, ability of justice, strong decision making abilities, sensitive nature but flexible feeling, got anger suddenly, care more about others than themselves. They want peace in their life, always favours justice in every moment, traveller, good buisnessmen. These person have a probability of following disease are: Kidney Stones, pain in spinal cord, immediately come in influence of communicable diseases. Disclaimer: Kindly, contact Astrologer for a full detail about the positions of planets according to your horoscope so that everything should be clear about your carrer, buisness, and diseases as well and sometimes above identifications do not match with the person so in that case you must have to contact the Astrologer. </p>)
    }
    const handleChange8 = (e) => {
        setRashi(e.target.value);
        setScorpius(<p>The person who have a sign Scorpius are have following qualities: Average Height, Curly hair, muscular body. These type of people are very clear while speaking in everything, not afraid of anyone, intellectual, stong determination. They have ability of choosing the words while speaking. They always think before speaking. They believe in hardwork, great ability of Administration and stubborn in nature sometimes. They have interest in occult science. They majorly find difficulties in saving and earning the money. They have a lot of enemies. Disclaimer: Kindly, contact Astrologer for a full detail about the positions of planets according to your horoscope so that everything should be clear about your carrer, buisness, and diseases as well and sometimes above identifications do not match with the person so in that case you must have to contact the Astrologer.</p>)
    }
    const handleChange9 = (e) => {
        setRashi(e.target.value);
        setSagittarius(<p>The person who have a sign Sagittarius are have following qualities: Handsome/Beautiful, dark eyes, brown hair. They are very intellectual, rich, loves freedom, kind, trustworthy, sincere, faith in god. They have stong blessing of god that's why fate is always with them. They are determined to their work, obey the rules and regulations of the society and country. They know where they have to maintain the balance in life whether while eating, studying, pleasures. They have a great support of eveyone especially government. Actually, if they have a good believe in god then there is nothing which these people can achieve. These person have a probability of following disease are: Gout disease, lungs diseases. Disclaimer: Kindly, contact Astrologer for a full detail about the positions of planets according to your horoscope so that everything should be clear about your carrer, buisness, and diseases as well and sometimes above identifications do not match with the person so in that case you must have to contact the Astrologer.</p>)
    }
    const handleChange10 = (e) => {
        setRashi(e.target.value);
        setCapricornus(<p>The person who have a sign Capricornus are have following qualities: Thin body, majorly noticed that they become healthy while growing in age, blackish hair. they are thoughtful, favours justice, determined to their work. They have a ability to nourish their family even in odd times of their life. They used statistics to calculate and measures everything to gain a good amount of information in any domain. They are trustworthy. They take care of every person whoever trust him. They have a good technically sounded mind which make them in good carrer in any type of enginnering. These person have a probability of following disease are: skin problems, bone fracturing, have a chance of getting a injury from fire, weapons, a thing made from iron in younger age. Disclaimer: Kindly, contact Astrologer for a full detail about the positions of planets according to your horoscope so that everything should be clear about your carrer, buisness, and diseases as well and sometimes above identifications do not match with the person so in that case you must have to contact the Astrologer.</p>)
    }
    const handleChange11 = (e) => {
        setRashi(e.target.value);
        setAquarius(<p>The person who have a sign Aquarius are have following qualities: Average Height, healthy and circular face, good complexion, brownish hair. They have a very neutral view to make decision in life and in society, they are trustworthy, reluctant nature, they obey rules of place where they live, patience minded person, they are clear while speaking. They take care of everyone in their life, have a interest in yoga and meditation. They are technically sounded people. These person have a probability of following disease are: Communicable diseases, tooth problems, tonsil, injury from weapons or a thing made frm iron. Disclaimer: Kindly, contact Astrologer for a full detail about the positions of planets according to your horoscope so that everything should be clear about your carrer, buisness, and diseases as well and sometimes above identifications do not match with the person so in that case you must have to contact the Astrologer.</p>)
    }
    const handleChange12 = (e) => {
        setRashi(e.target.value);
        setPisces(<p>The person who have a sign Pisces are have following qualities: attractice personality, very intellectual mind, average height, soft hairs. These people have a good consultancy power and anybody take their advice then that person always successfull in that part. They are trurtworthy, faith in god, moody, patience, have a knowledge about their strong points and weak points, they are very fond of expensive things. Disclaimer: Kindly, contact Astrologer for a full detail about the positions of planets according to your horoscope so that everything should be clear about your carrer, buisness, and diseases as well and sometimes above identifications do not match with the person so in that case you must have to contact the Astrologer.</p>)
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
            <img src={`https://cdn.iconscout.com/icon/free/png-64/aries-horoscope-astrology-zodiac-sign-symbol-20965.png`} alt="ariesImage" id='aries-img' />
            <input type="radio" value="Aries" id="aries"  onChange={handleChange1} name="rashi" />
            <label htmlFor="aries">Aries</label>
            </div>

            <div>
            <img src={`https://cdn.iconscout.com/icon/free/png-64/taurus-horoscope-astrology-zodiac-sign-symbol-20958.png`} alt="ariesImage" id='taurus-img' />
            <input type="radio" value="Tauras" id="tauras" onChange={handleChange2} name="rashi"/>
            <label htmlFor="taurus">Taurus</label>
            </div>

            <div>
            <img src={`https://cdn.iconscout.com/icon/free/png-64/gemini-horoscope-astrology-zodiac-sign-symbol-20947.png`} alt="ariesImage" />
            <input type="radio" value="Gemini" id="gemini" onChange={handleChange3} name="rashi"/>
            <label htmlFor="gemini">Gemini</label>
            </div>
</form>
</Form>
<Form>
    <form>
            <div>
            <img src={`https://cdn.iconscout.com/icon/free/png-64/cancer-zodiac-horoscope-astrology-sign-symbol-20962.png`} alt="ariesImage" />
            <input type="radio" value="Cancer" id="cancer" onChange={handleChange4} name="rashi"/>
            <label htmlFor="cancer">Cancer</label>
            </div>

            <div>
            <img src={`https://cdn.iconscout.com/icon/free/png-64/leo-zodiac-horoscope-astrology-sign-symbol-20955.png`} alt="ariesImage" />
            <input type="radio" value="Leo" id="leo" onChange={handleChange5} name="rashi"/>
            <label htmlFor="leo">Leo</label>
            </div>

            <div>
            <img src={`https://cdn.iconscout.com/icon/free/png-64/virgo-zodiac-horoscope-astrology-sign-symbol-20959.png`} alt="ariesImage" />
            <input type="radio" value="Virgo" id="virgo" onChange={handleChange6} name="rashi"/>
            <label htmlFor="virgo">Virgo</label>
            </div>
            </form>
            </Form>
            <Form>
            <form>
            <div>
            <img src={`https://cdn.iconscout.com/icon/free/png-64/libra-zodiac-horoscope-astrology-sign-symbol-20954.png`} alt="ariesImage" />
            <input type="radio" value="Libra" id="libra" onChange={handleChange7} name="rashi"/>
            <label htmlFor="libra">Libra</label>
            </div>

            <div>
            <img src={`https://cdn.iconscout.com/icon/free/png-64/scorpius-3570663-2993149.png`} alt="ariesImage" />
            <input type="radio" value="Scorpius" id="scorpius" onChange={handleChange8} name="rashi"/>
            <label htmlFor="libra">Scorpius</label>
            </div>

            <div>
            <img src={`https://cdn.iconscout.com/icon/free/png-64/sagitarius-2754243-2286887.png`} alt="ariesImage" />
            <input type="radio" value="sagittarius" id="Sagittarius" onChange={handleChange9} name="rashi"/>
            <label htmlFor="sagittarius">Sagittarius</label>
            </div>
            </form>
            </Form>
            <Form>
                <form>

            <div>
            <img src={`https://cdn.iconscout.com/icon/free/png-64/capricorn-horoscope-zodiac-astrology-sign-symbol-20964.png`} alt="ariesImage" />
            <input type="radio" value="capricornus" id="Capricornus" onChange={handleChange10} name="rashi"/>
            <label htmlFor="capricornus">Capricornus</label>
            </div>

            <div>
            <img src={`https://cdn.iconscout.com/icon/free/png-64/aquarius-zodiac-horoscope-astrology-sign-symbol-20946.png`} alt="ariesImage" />
            <input type="radio" value="Aquarius" id="aquarius" onChange={handleChange11} name="rashi"/>
            <label htmlFor="aquarius">Aquarius</label>
            </div>

            <div>
            <img src={`https://cdn.iconscout.com/icon/premium/png-64-thumb/pieces-1506663-1279746.png`} alt="ariesImage" />
            <input type="radio" value="Pisces" id="pisces" onChange={handleChange12} name="rashi"/>
            <label htmlFor="pisces">Pisces</label>
            </div>
         </form>
         </Form>
         </Upper>
         <Lower>
         <h5>Always refresh before reading</h5>
         <p>Hi, {name} Your Sign is: {rashi}</p>
         {aries} {taurus} {gemini} {cancer} {leo} {virgo} {libra} {scorpius} {sagittarius} {capricornus} {aquarius} {pisces}
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
            padding: 2%;
            // border: 1px solid black;
            img{
                width: 30%;
            }
        }
    }
    @media (max-width: 640px)
    {
        form{
            div{
                padding: 0;
                img{
                    width: 20%;
                }
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