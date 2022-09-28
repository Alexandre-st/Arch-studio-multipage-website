// import { useState } from 'react';
import { useFormik } from 'formik';

import Arrow from '../assets/icons/icon-arrow.svg';

const ContactForm = () => {

  const formik = useFormik({
    initialValues: {
      name:'',
      email:'',
      message:''
    }, 
    validate: (values) => {
      const errors = {};
      console.log(errors);

      if (!values.name) {
        errors.name = "Can't be empty";
        
      }
      if (!values.email) {
        errors.email = "Can't be empty";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Please use a valid email address';
      }
      if (!values.message) {
        errors.message = "Can't be empty";
      }
      return errors; 
    },
    onSubmit: (values) => { 
      console.log("submit", values);
      // openModal(); 
      formik.resetForm({ values : ''});
    }
  });

  return (
      <form className="form-content" onSubmit={formik.handleSubmit}>
        <div className="form-content-input">
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Name" {...formik.getFieldProps('name')} />
          {formik.touched.name && formik.errors.name && <p className="form-content-error error-input">{formik.errors.name}</p>}
          {console.log(formik.errors)}
        </div>
        <div className="form-content-input">
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Email" {...formik.getFieldProps('email')} />
          {formik.touched.email && formik.errors.email && <p className="form-content-error error-input">{formik.errors.email}</p>}
        </div>
        <div className="form-content-aera">
          <label htmlFor="message">Message</label>
          <textarea type="text" placeholder="Message" row={5} {...formik.getFieldProps('message')} />
          {formik.touched.message && formik.errors.message && <p className="form-content-error error-area">{formik.errors.message}</p>}
        </div>

        <button className="form-button button" type="submit">
          <img src={Arrow} alt="Arrow Button" />
        </button>
      </form>
  )
}

export default ContactForm;