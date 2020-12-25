import React, { Component, useState } from "react";
import { BASE_URL, USER } from "../../../../resources/APIEndpoints";
import { Link } from 'react-router-dom';
import './Register.css';
import cogoToast from "cogo-toast";
import APIService from '../../../../services/APIService';
import { Formik } from "formik";
import { useHistory } from "react-router"
import * as Yup from 'yup'
import ErrorValidation from '../../errors/ErrorValidation';

export default function Register(props) {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     mobile: "",
  //     firstName: "",
  //     lastName: "",
  //     password: "",
  //     error: false,
  //     errorMessage: false,
  //     redirectLoginPage: false,
  //   };
  // }
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false);
  const [redirectLoginPage, setredirectLoginPage] = useState(false);
  const history = useHistory();

  const validationSchema = Yup.object().shape({
    mobile: Yup.string()
      .required("The username field is required"),
    firstName: Yup.string()
      .required("The firstname field is required"),
    lastName: Yup.string()
      .required("The lastname field is required"),
    password: Yup.string()
      .required("The password field is required")
  });
  return(
      <>
      <div>
        <div className="sign-up">
          <h2 className='title'>I do not have a account</h2>
          <span>Sign up with your mobile number and password</span>
          <Formik
            initialValues={{ mobile: '', firstName: '', lastName: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { setStatus, setSubmitting }) => {
              setSubmitting(true)
              setTimeout(() => {
                let url = BASE_URL + USER;
                let data = {
                  mobile: values.mobile,
                  name: values.firstName + ' ' + values.lastName,
                  password: values.password,
                }
                let response = new APIService().post(url, data);
                if (response.error) {
                  if (response.status !== 400) {
                    cogoToast.error(response.results.message);
                  }
                } else {
                  cogoToast.success("Successfully Created");
                  history.push("/");
                  console.log(response);
                }
              })
            }}
          >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
              <form onSubmit={handleSubmit} autocomplete="off" className='login-form'>
                <div>
                  <input
                    type="number"
                    placeholder="Mobile"
                    name="mobile"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.mobile}
                    // onChange={this.handleChange}
                    className="form-input"
                  />
                  <ErrorValidation touched={touched.mobile} message={errors.mobile} />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    name="firstName"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.firstName}
                    // onChange={this.handleChange}
                    className="form-input"
                  />
                  <ErrorValidation touched={touched.firstName} message={errors.firstName} />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={values.lastName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    name="lastName"
                    // onChange={this.handleChange}
                    className="form-input"
                  />
                  <ErrorValidation touched={touched.lastName} message={errors.lastName} />
                </div>
                <div>
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    // onChange={this.handleChange}
                    className="form-input"
                  />
                  <ErrorValidation touched={touched.password} message={errors.password} />
                </div>
                <div className="buttons">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="custom-button"
                  >
                    SIGN UP
                    </button>
                  <p style={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center', margin: '10px 0 0 0' }}>OR</p>
                  <div>
                    <Link to="/">
                      <button className='custom-button'>
                        SIGN IN
                </button>
                    </Link>
                  </div>
                </div>
              </form>
            )}
            </Formik>
        </div>
        </div>
      </>
    );
  }
