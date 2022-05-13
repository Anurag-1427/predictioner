import React, { useState, useReducer } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
// import { useFormik } from "formik";

function DailyHoroscope() {
//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       channel: "",
//     },
//     onSubmit: values => {
//         console.log('Form data', values)
//     }
//   });

  const formReducer = (state, event) => {
    return {
      ...state,
      [event.name]: event.value
    }
   }

  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
   setSubmitting(true);

//    setTimeout(() => {
//      setSubmitting(false);
//    }, 3000)
 }

 const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

//   console.log('Form Values', formik.values);
  return (
    <Wrapper>
      <Navbar />
      <ContentHoroscope>
        <Form>
          <Inputs>
            <form onSubmit={handleSubmit}>
              <label htmlFor="dob">Date of Birth</label>
              <br />
              <input
                type="number"
                id="dob"
                name="dob"
                // onChange={formik.handleChange}
                onChange={handleChange}
                // value={formik.values.name}
              />
              <br />
              <label htmlFor="mob">Month of Birth</label>
              <br />
              <input
                type="number"
                id="mob"
                name="mob"
                onChange={handleChange}
              />
              <br />
              <label htmlFor="mob">Year of Birth</label>
              <br />
              <input
                type="number"
                id="yob"
                name="yob"
                onChange={handleChange}
              />
              <br />
              <label htmlFor="mob">Current Year</label>
              <br />
              <input
                type="number"
                id="cy"
                name="cy"
                onChange={handleChange}
              />
              <br />
              <label htmlFor="mob">Current Month</label>
              <br />
              <input
                type="number"
                id="cm"
                name="cm"
                onChange={handleChange}
              />
              <br />
              <label htmlFor="mob">Current Date</label>
              <br />
              <input
                type="number"
                id="cd"
                name="cd"
                onChange={handleChange}
              />
              <br />
              <label htmlFor="mob">Current Day</label>
              <br />
              <input
                type="number"
                id="cday"
                name="cday"
                onChange={handleChange}
              />
              <br />

              {/* <label htmlFor="email">E-mail</label>
              <br />
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
                // value={formik.values.email}
              />
              <br />

              <label htmlFor="channel">Channel</label>
              <br />
              <input
                type="text"
                id="channel"
                name="channel"
                onChange={handleChange}
                // value={formik.values.channel}
              />
              <br /> */}

              <button type="submit">Submit</button>
            </form>
          </Inputs>
        </Form>
        <Result>Result
        {submitting &&
       <div>Submtting Form...
           You are submitting the following:
         <ul>
           {Object.entries(formData).map(([name, value]) => (
             <li key={name}><strong>{name}</strong>:{value.toString()}</li>
           ))}
           <li>{Object.entries(formData).forEach(value => {
                map.set(value, 'value'+ value);
              })
           }</li>
         </ul>
       </div>
     }
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
