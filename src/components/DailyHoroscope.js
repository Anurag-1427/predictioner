// import React, { useState, useReducer } from "react";
// import styled from "styled-components";
// import Navbar from "./Navbar";
// // import { useFormik } from "formik";

// function DailyHoroscope() {
// //   const formik = useFormik({
// //     initialValues: {
// //       name: "",
// //       email: "",
// //       channel: "",
// //     },
// //     onSubmit: values => {
// //         console.log('Form data', values)
// //     }
// //   });

//   const formReducer = (state, event) => {
//     return {
//       ...state,
//       [event.name]: event.value
//     }
//    }

//   const [formData, setFormData] = useReducer(formReducer, {});
//   const [submitting, setSubmitting] = useState(false);
//   const handleSubmit = event => {
//     event.preventDefault();
//    setSubmitting(true);

// //    setTimeout(() => {
// //      setSubmitting(false);
// //    }, 3000)
//  }

//  const handleChange = event => {
//     setFormData({
//       name: event.target.name,
//       value: event.target.value,
//     });
//   }

// //   console.log('Form Values', formik.values);
//   return (
//     <Wrapper>
//       <Navbar />
//       <ContentHoroscope>
//         <Form>
//           <Inputs>
//             <form onSubmit={handleSubmit}>
//               <label htmlFor="dob">Date of Birth</label>
//               <br />
//               <input
//                 type="number"
//                 id="dob"
//                 name="dob"
//                 // onChange={formik.handleChange}
//                 onChange={handleChange}
//                 // value={formik.values.name}
//               />
//               <br />
//               <label htmlFor="mob">Month of Birth</label>
//               <br />
//               <input
//                 type="number"
//                 id="mob"
//                 name="mob"
//                 onChange={handleChange}
//               />
//               <br />
//               <label htmlFor="mob">Year of Birth</label>
//               <br />
//               <input
//                 type="number"
//                 id="yob"
//                 name="yob"
//                 onChange={handleChange}
//               />
//               <br />
//               <label htmlFor="mob">Current Year</label>
//               <br />
//               <input
//                 type="number"
//                 id="cy"
//                 name="cy"
//                 onChange={handleChange}
//               />
//               <br />
//               <label htmlFor="mob">Current Month</label>
//               <br />
//               <input
//                 type="number"
//                 id="cm"
//                 name="cm"
//                 onChange={handleChange}
//               />
//               <br />
//               <label htmlFor="mob">Current Date</label>
//               <br />
//               <input
//                 type="number"
//                 id="cd"
//                 name="cd"
//                 onChange={handleChange}
//               />
//               <br />
//               <label htmlFor="mob">Current Day</label>
//               <br />
//               <input
//                 type="number"
//                 id="cday"
//                 name="cday"
//                 onChange={handleChange}
//               />
//               <br />

//               {/* <label htmlFor="email">E-mail</label>
//               <br />
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 onChange={handleChange}
//                 // value={formik.values.email}
//               />
//               <br />

//               <label htmlFor="channel">Channel</label>
//               <br />
//               <input
//                 type="text"
//                 id="channel"
//                 name="channel"
//                 onChange={handleChange}
//                 // value={formik.values.channel}
//               />
//               <br /> */}

//               <button type="submit">Submit</button>
//             </form>
//           </Inputs>
//         </Form>
//         <Result>Result
//         {submitting &&
//        <div>Submtting Form...
//            You are submitting the following:
//          <ul>
//            {Object.entries(formData).map(([name, value]) => (
//              <li key={name}><strong>{name}</strong>:{value.toString()}</li>
//            ))}
//            <li>{Object.entries(formData).forEach(value => {
//                 map.set(value, 'value'+ value);
//               })
//            }</li>
//          </ul>
//        </div>
//      }
//         </Result>
//       </ContentHoroscope>
//     </Wrapper>
//   );
// }

// export default DailyHoroscope;

// const Wrapper = styled.div`
//   width: 100vw;
//   height: 100vh;
//   overflow: hidden;
// `;
// const ContentHoroscope = styled.div`
//   width: 100%;
//   height: 100%;
//   border: 1px solid black;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Form = styled.div`
//   border: 1px solid black;
//   width: 50%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Inputs = styled.div`
//   border: 1px solid black;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   form {
//     flex-direction: column;
//   }
// `;
// const Result = styled.div`
//   border: 1px solid black;
//   width: 50%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;














































// import React, { useState, useReducer } from "react";
// import styled from "styled-components";
// import Navbar from "./Navbar";

// function DailyHoroscope() {
//   // const formReducer = (state, event) => {
//   //       return {
//   //         ...state,
//   //         [event.name]: event.value
//   //       }
//   // }
    
// //   const [formData, setFormData] = useReducer(formReducer, {});
// //   const [submitting, setSubmitting] = useState(false);
// //   const handleSubmit = event => {
// //     event.preventDefault();
// //     setSubmitting(true);

// // //    setTimeout(() => {
// // //      setSubmitting(false);
// // //    }, 3000)
// // }
//   // const handleChange = event => {
//   //       setFormData({
//   //         name: event.target.name,
//   //         value: event.target.value,
//   //       });
//   //     }
//   const [dob, setDob] = useState();
//   const [mob, setMob] = useState();
//   const [yob, setYob] = useState();
//   const [cy, setCy] = useState();
//   const [cm, setCm] = useState();
//   const [cd, setCd] = useState();
//   const [cday, setCday] = useState();

//   const [actualDob, setActualDob] = useState();
//   const [actualMob, setActualMob] = useState();
//   const [actualYob, setActualYob] = useState();
//   const [actualCy, setActualCy] = useState();
//   const [actualCm, setActualCm] = useState();
//   const [actualCd, setActualCd] = useState();
//   const [actualCday, setActualCday] = useState();
//   const handleChange1 = (event) => {
//     console.log(typeof event.target.value);
//     setDob(event.target.value); 
//     var temp = Number(setDob(event.target.value)); 
//   }
//   const handleChange2 = (event) => {
//     console.log(typeof event.target.value);
//     setMob(event.target.value);
//   }
//   const handleChange3 = (event) => {
//     console.log(typeof event.target.value);
//     setYob(event.target.value);
//   }
//   const handleChange4 = (event) => {
//     console.log(typeof event.target.value);
//     setCy(event.target.value);
//   }
//   const handleChange5 = (event) => {
//     console.log(typeof event.target.value);
//     setCm(event.target.value);
//   }
//   const handleChange6 = (event) => {
//     console.log(typeof event.target.value);
//     setCd(event.target.value);
//   }
//   const handleChange7 = (event) => {
//     console.log(typeof event.target.value);
//     setCday(event.target.value);
//   }
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setActualDob(dob);
//     setActualMob(mob);
//     setActualYob(yob);
//     setActualCy(cy);
//     setActualCm(cm);
//     setActualCd(cd);
//     setActualCday(cday);
//   }
//   return (
//     <Wrapper>
//       <Navbar />
//       <ContentHoroscope>
//         <Form>
//           <Inputs>
//             <form>
//               <label htmlFor="dob">Date of Birth</label><br />
//               <input type="number" id="dob" name="dob" onChange={handleChange1} value={dob} /> <br />
              
//               <label htmlFor="mob">Month of Birth</label> <br />
//               <input type="number" id="mob" name="mob" onChange={handleChange2} value={mob} /> <br />
              
//               <label htmlFor="yob">Year of Birth</label> <br />
//               <input type="number" id="yob" name="yob" onChange={handleChange3} value={yob} /> <br />
              
//               <label htmlFor="cy">Current Year</label> <br />
//               <input type="number" id="cy" name="cy" onChange={handleChange4} value={cy} /> <br />
              
//               <label htmlFor="cm">Current Month</label> <br />
//               <input type="number" id="cm" name="cm" onChange={handleChange5} value={cm} /> <br />
              
//               <label htmlFor="cd">Current Date</label> <br />
//               <input type="number" id="cd" name="cd" onChange={handleChange6} value={cd} /> <br />
              
//               <label htmlFor="cday">Current Day</label><br />
//               <input type="number" id="cday" name="cday" onChange={handleChange7} value={cday} /> <br />
              
//               <button type="submit" onClick={handleSubmit}>Submit</button>
//             </form>
//           </Inputs>
//         </Form>
//         <Result>Result {actualDob}+{actualMob}+{actualYob}+{actualCy}+{actualCm}+{actualCd}+{actualCday}</Result>
//       </ContentHoroscope>
//     </Wrapper>
//   );
// }

// export default DailyHoroscope;

// const Wrapper = styled.div`
//   width: 100vw;
//   height: 100vh;
//   overflow: hidden;
// `;
// const ContentHoroscope = styled.div`
//   width: 100%;
//   height: 100%;
//   border: 1px solid black;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Form = styled.div`
//   border: 1px solid black;
//   width: 50%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Inputs = styled.div`
//   border: 1px solid black;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   form {
//     flex-direction: column;
//   }
// `;
// const Result = styled.div`
//   border: 1px solid black;
//   width: 50%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;









































// import React, { useState, useRef } from "react";
// import styled from "styled-components";
// import Navbar from "./Navbar";

// const DailyHoroscope = () => {
//   const [dobi, setDob] = useState();
//   const [mobi, setMob] = useState();
//   const [yobi, setYob] = useState();
//   const [cyi, setCy] = useState();
//   const [cmi, setCm] = useState();
//   const [cdi, setCd] = useState();
//   const [cdayi, setCday] = useState();

//   const dob = useRef(0);
//   const mob = useRef(0);
//   const yob = useRef(0);
//   const cy = useRef(0);
//   const cm = useRef(0);
//   const cd = useRef(0);
//   const cday = useRef(0);

//   var dobirth, intDoBirth;
//   var mobirth, intMoBirth;
//   var yobirth, intYoBirth;
//   var cyear, intCyear;
//   var cmonth, intCmonth;
//   var cdate, intCdate;
//   var cuday, intCday;

//   let temp = parseInt(dobi, 10)
//   console.log(typeof temp);
//   let temp2 = parseInt(mobi, 10)
//   console.log(typeof temp2);
//   let temp3 = parseInt(yobi, 10)
//   console.log(typeof temp3);
//   let temp4 = parseInt(cyi, 10)
//   console.log(typeof temp4);
//   let temp5 = parseInt(cmi, 10)
//   console.log(typeof temp5);
//   let temp6 = parseInt(cdi, 10)
//   console.log(typeof temp6);
//   let temp7 = parseInt(cdayi, 10)
//   console.log(typeof temp7);
//   const submitForm = (e) => {
//     e.preventDefault();
//     // console.log(typeof dob.current.value);
//     dobirth = dob.current.value;
//     setDob(dobirth);
//     // console.log(typeof dobi);
//     // intDoBirth = parseInt(dobirth);
//     // console.log(intDoBirth);

//     mobirth = mob.current.value;
//     setMob(mobirth);
//     // intMoBirth = parseInt(mobirth);
//     yobirth = yob.current.value;
//     setYob(yobirth);
//     // intYoBirth = parseInt(yobirth);
//     cyear = cy.current.value;
//     setCy(cyear);
//     // intCyear = parseInt(cyear);
//     cmonth = cm.current.value;
//     setCm(cmonth);
//     // intCmonth = parseInt(cmonth);
//     cdate = cd.current.value;
//     setCd(cdate);
//     // intCdate = parseInt(cdate);
//     cuday = cday.current.value;
//     setCday(cday);
//     // intCday = parseInt(cuday);
//   }
  
//   return (
//     <Wrapper>
//       <Navbar />
//       <ContentHoroscope>
//         <Form>
//           <Inputs>
//             <form action="" onSubmit={submitForm}>
//               <label htmlFor="dob">Enter your Date of Birth</label> <br />
//               <input type="number" id="dob" ref={dob} /> <br />

//               <label htmlFor="mob">Enter your Month of Birth</label> <br />
//               <input type="number" id="mob" ref={mob} /> <br />

//               <label htmlFor="yob">Enter your Year of Birth</label> <br />
//               <input type="number" id="yob" ref={yob} /> <br />

//               <label htmlFor="cy">Enter the Current Year</label> <br />
//               <input type="number" id="cy" ref={cy} /> <br />

//               <label htmlFor="cm">Enter the current Month</label> <br />
//               <input type="number" id="cm" ref={cm} /> <br />

//               <label htmlFor="cd">Enter the Current Date</label> <br />
//               <input type="number" id="cd" ref={cd} /> <br />

//               <label htmlFor="cday">Enter the Current Day</label> <br />
//               <input type="number" id="cday" ref={cday} /> <br />
//               <button>Submit</button>
//             </form>
//           </Inputs>
//         </Form>
//         <Result>Result {dobi} {mobi} {yobi} {cyi} {cmi} {cdi} {cdayi}
//         </Result>
//       </ContentHoroscope>
//     </Wrapper>
//   );
// }

// export default DailyHoroscope;

// const Wrapper = styled.div`
//   width: 100vw;
//   height: 100vh;
//   overflow: hidden;
// `;
// const ContentHoroscope = styled.div`
//   width: 100%;
//   height: 100%;
//   border: 1px solid black;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Form = styled.div`
//   border: 1px solid black;
//   width: 50%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
// const Inputs = styled.div`
//   border: 1px solid black;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   form {
//     flex-direction: column;
//   }
// `;
// const Result = styled.div`
//   border: 1px solid black;
//   width: 50%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;



















































import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const DailyHoroscope = () => {
  const [dobi, setDob] = useState();
  const [mobi, setMob] = useState();
  const [yobi, setYob] = useState();
  const [cyi, setCy] = useState();
  const [cmi, setCm] = useState();
  const [cdi, setCd] = useState();
  const [cdayi, setCday] = useState();

  const [ni, setNi] = useState();

  const dob = useRef(0);
  const mob = useRef(0);
  const yob = useRef(0);
  const cy = useRef(0);
  const cm = useRef(0);
  const cd = useRef(0);
  const cday = useRef(0);
  
  var dobirth;
  var mobirth;
  var yobirth;
  var cyear;
  var cmonth;
  var cdate;
  var cuday;
  

  let temp = parseInt(dobi, 10)
  let temp2 = parseInt(mobi, 10)
  let temp3 = parseInt(yobi, 10)
  let temp4 = parseInt(cyi, 10)
  let temp5 = parseInt(cmi, 10)
  let temp6 = parseInt(cdi, 10)
  let temp7 = parseInt(cdayi, 10)
  let n = temp+temp2+temp3+temp4+temp5+temp6+temp7;
  console.log(n);

  // const getSum = (ni) => {
  //   var sum = 0;
  //   while (ni !== 0) {
  //     sum = sum + ni % 10;
  //     ni = ni / 10;
  //   }
  //   return sum;
  // }
  // console.log(getSum());

  // let result = getSum(n);
  // let resulted = getSum(result);
  // console.log(resulted);



  // console.log(typeof temp);
// useEffect(()=>{
// setNi(getSum());


// },[])
  
  
  
  const submitForm = (e) => {
    e.preventDefault();
    // console.log(typeof dob.current.value);
    dobirth = dob.current.value;
    setDob(dobirth);
    // console.log(typeof dobi);
    // intDoBirth = parseInt(dobirth);
    // console.log(intDoBirth);

    mobirth = mob.current.value;
    setMob(mobirth);

    yobirth = yob.current.value;
    setYob(yobirth);

    cyear = cy.current.value;
    setCy(cyear);

    cmonth = cm.current.value;
    setCm(cmonth);

    cdate = cd.current.value;
    setCd(cdate);

    cuday = cday.current.value;
    setCday(cuday);


  }
  
  return (
    <Wrapper>
      <Navbar />
      <ContentHoroscope>
        <Form>
          <Inputs>
            <form action="" onSubmit={submitForm}>
              <label htmlFor="dob">Enter your Date of Birth</label> <br />
              <input type="number" id="dob" ref={dob} /> <br />

              <label htmlFor="mob">Enter your Month of Birth</label> <br />
              <input type="number" id="mob" ref={mob} /> <br />

              <label htmlFor="yob">Enter your Year of Birth</label> <br />
              <input type="number" id="yob" ref={yob} /> <br />

              <label htmlFor="cy">Enter the Current Year</label> <br />
              <input type="number" id="cy" ref={cy} /> <br />

              <label htmlFor="cm">Enter the current Month</label> <br />
              <input type="number" id="cm" ref={cm} /> <br />

              <label htmlFor="cd">Enter the Current Date</label> <br />
              <input type="number" id="cd" ref={cd} /> <br />

              <label htmlFor="cday">Enter the Current Day</label> <br />
              <input type="number" id="cday" ref={cday} /> <br />
              <button>Submit</button>
            </form>
          </Inputs>
        </Form>
        <Result>Result {dobi} {mobi} {yobi} {cyi} {cmi} {cdi} {cdayi} {ni}
        </Result>
      </ContentHoroscope>
    </Wrapper>
  );
}

export default DailyHoroscope;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const ContentHoroscope = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.div`
  border: 1px solid black;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Inputs = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  form {
    flex-direction: column;
  }
`;
const Result = styled.div`
  border: 1px solid black;
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;