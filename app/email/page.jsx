'use client'

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID
const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY
const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID

const MyForm = () => {
  const form = useRef();
  const [data, setData] = useState({ user_email: '', user_name: '', message: '' })

  const sendEmail = () => {

    emailjs
      .sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, form.current, {
        publicKey: `${PUBLIC_KEY}`,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className='bg-white w h flex-center flex-col'>
      <h1>My Form</h1>
      <Formik
        initialValues={{ user_email: '', user_name: '', message: '' }}
        validate={(values) => {
          const errors = {};
          if (!values.user_name) {
            errors.user_name = 'Required';
          } else if (!values.user_email) {
            errors.user_email = 'Required';
          } else if (!values.message) {
            errors.message = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.user_email)
          ) {
            errors.user_email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setSubmitting(true);
          sendEmail();
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form ref={form} className='flex flex-col justify-evenly h-[300px] w-[200px]'>
             <label>name</label>
            <Field type="text" name="user_name" className="bg-red-200" />
            <ErrorMessage className='text-red-900' name="user_name" component="div" />
            <label>email</label>
            <Field type="email" name="user_email" className="bg-red-200" />
            <ErrorMessage className='text-red-900' name="user_email" component="div" />
            <label>message</label>
            <Field type="text" name="message" className="bg-red-200" />
            <ErrorMessage className='text-red-900' name="message" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
};

export default MyForm;

// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';



// export default function ContactUs () {
//   const form = useRef();

//   const sendEmail = (e: any) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(`${SERVICE_ID}`, `${TEMPLATE_ID}`, form.current, {
//         publicKey: `${PUBLIC_KEY}`,
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="user_name" />
//       <label>Email</label>
//       <input type="email" name="user_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };
